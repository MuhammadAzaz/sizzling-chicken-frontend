import React, { useEffect, useMemo, useState } from "react";

// Styles
import {
  bgGradient,
  fireBg,
  offersBanner,
  heroEmojiBg,
  heroTitle,
  mainCard,
  primaryHeroBtn,
  secondaryHeroBtn,
  itemImage,
  itemImageGlow,
  addBtn,
} from "./styles/theme";

// Utils & defaults
import { currency } from "./utils/format";
import { defaultDeliverySettings } from "./utils/deliveryDefaults";
import { playOrderSound } from "./utils/sound";

// Components
import StyleBlock from "./components/StyleBlock";
import Header from "./components/Header";
import HeroTitle from "./components/HeroTitle";
import DeliveryStatus from "./components/DeliveryStatus";
import QuickStats from "./components/QuickStats";
import SectionTitle from "./components/SectionTitle";
import MenuCategories from "./components/MenuCategories";
import ItemsGrid from "./components/ItemsGrid";
import ItemCard from "./components/ItemCard";
import DealCard from "./components/DealCard";
import Feature from "./components/Feature";
import CartSidebar from "./components/CartSidebar";
import NotificationBar from "./components/NotificationBar";
import CheckoutModal from "./components/CheckoutModal";
import AdminPanel from "./components/AdminPanel";

// Hooks & types
import useSizzleParticles from "./hooks/useSizzlingParticles";
import useScrollReveal from "./hooks/useScrollReveal";
import type { CartItem, DeliverySettings } from "./types";

const STORAGE_KEY = "sizzlingChickenDeliverySettings";

type MenuItem = {
  category: "all" | "pizza" | "burger" | "wrap" | "side";
  icon: string;
  title: string;
  price: number;
  desc: string;
};

const App: React.FC = () => {
  // Cart
  const [cart, setCart] = useState<CartItem[]>([]);
  const total = useMemo(() => cart.reduce((s, i) => s + i.price, 0), [cart]);

  // UI state
  const [cartOpen, setCartOpen] = useState(false);
  const [notification, setNotification] = useState("");
  const [showCheckout, setShowCheckout] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);

  // Delivery settings
  const [delivery, setDelivery] = useState<DeliverySettings>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved
        ? ({ ...defaultDeliverySettings, ...JSON.parse(saved) } as DeliverySettings)
        : defaultDeliverySettings;
    } catch {
      return defaultDeliverySettings;
    }
  });

  // Toast helper
  const toast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(""), 3000);
  };

  // Cart actions
  const addToCart = (name: string, price: number) => {
    setCart((c) => [...c, { name, price }]);
    toast(`🔥 ${name} added to your order!`);
    setTimeout(playOrderSound, 80);
  };

  const removeFromCart = (index: number) => {
    setCart((c) => {
      const copy = [...c];
      const [removed] = copy.splice(index, 1);
      if (removed) toast(`${removed.name} removed from cart`);
      return copy;
    });
  };

  // Delivery logic
  const checkDeliveryAvailability = (): boolean => {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    const current = `${hh}:${mm}`;
    const within = current >= delivery.deliveryStartTime && current <= delivery.deliveryEndTime;
    return delivery.isDeliveryActive && within;
  };

  const getNextDeliveryTime = (): string => {
    const now = new Date();
    const [sh, sm] = delivery.deliveryStartTime.split(":").map((n) => +n);
    const todayStart = new Date();
    todayStart.setHours(sh, sm, 0, 0);
    if (now > todayStart) return `tomorrow at ${delivery.deliveryStartTime}`;
    return `today at ${delivery.deliveryStartTime}`;
  };

  const saveDelivery = (next: DeliverySettings) => {
    setDelivery(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    toast("✅ Delivery settings updated successfully!");
  };

  // Global key handler (Esc)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (cartOpen) setCartOpen(false);
        if (showCheckout) setShowCheckout(false);
        if (showAdmin) setShowAdmin(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [cartOpen, showCheckout, showAdmin]);

  // FX
  useSizzleParticles();
  useScrollReveal();

  useEffect(() => {
    const id = setTimeout(
      () => toast("🔥 Welcome to Sizzling Chicken! Hot deals are waiting!"),
      1000
    );
    return () => clearTimeout(id);
  }, []);

  const isDeliveryNow = checkDeliveryAvailability();

  // ------------------- MENU: horizontal categories + filtering -------------------
  const [selectedCategory, setSelectedCategory] = useState<MenuItem["category"]>("all");

  const allMenuItems: MenuItem[] = [
    // Pizza
    { category: "pizza", icon: "🍕", title: "Margherita Pizza", price: 9.99, desc: "Tomato, mozzarella, basil" },
    { category: "pizza", icon: "🍕", title: "Pepperoni Pizza", price: 11.99, desc: "Loaded with pepperoni & cheese" },
    { category: "pizza", icon: "🍕", title: "BBQ Chicken Pizza", price: 12.99, desc: "BBQ sauce, chicken, onions" },

    // Burgers
    { category: "burger", icon: "🍔", title: "Crispy Chicken Burger", price: 8.99, desc: "Buttermilk fried chicken & spicy mayo" },
    { category: "burger", icon: "🍔", title: "Grilled Chicken Burger", price: 9.49, desc: "Char‑grilled breast, lettuce & pickles" },

    // Wraps
    { category: "wrap", icon: "🌯", title: "Spicy Chicken Wrap", price: 7.99, desc: "Grilled strips, lettuce, ranch" },
    { category: "wrap", icon: "🌯", title: "Peri‑Peri Wrap", price: 8.49, desc: "Peri peri chicken, slaw, garlic sauce" },

    // Sides
    { category: "side", icon: "🍟", title: "Loaded Chicken Fries", price: 9.99, desc: "Fries, chicken, cheese, jalapeños" },
    { category: "side", icon: "🥗", title: "Coleslaw", price: 3.49, desc: "Creamy, crunchy & fresh" },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? allMenuItems
      : allMenuItems.filter((i) => i.category === selectedCategory);

  // -----------------------------------------------------------------------------

  return (
    <div className="min-h-screen overflow-x-hidden" style={bgGradient}>
      <StyleBlock />
      <div className="fixed bottom-0 left-0 w-full h-[200px] pointer-events-none" style={fireBg} />

      <div className="text-white text-center py-3 font-black tracking-widest uppercase" style={offersBanner}>
        🔥 LIMITED TIME: Buy 2 Get 1 FREE on all Chicken Combos! 🔥
      </div>

      <Header
        onOpenAdmin={() => setShowAdmin(true)}
        onToggleCart={() => setCartOpen((v) => !v)}
        cartCount={cart.length}
      />

      <section className="relative text-white overflow-hidden py-20" id="top">
        <div className="container mx-auto px-5 relative">
          <div className="absolute inset-0 opacity-10" style={heroEmojiBg} aria-hidden />
          <HeroTitle titleStyle={heroTitle} />

          <div className="flex flex-wrap gap-4 justify-center mb-14">
            <a
              href="#menu"
              className="hero-btn primary-hero-btn inline-block px-10 py-4 text-xl font-black rounded-full shadow-lg"
              style={primaryHeroBtn}
            >
              Order Now
            </a>
            <a
              href="#deals"
              className="hero-btn secondary-hero-btn inline-block px-10 py-4 text-xl font-black rounded-full border-4"
              style={secondaryHeroBtn}
            >
              View Deals
            </a>
          </div>

          <DeliveryStatus isNow={isDeliveryNow} delivery={delivery} nextTime={getNextDeliveryTime()} />
          <QuickStats />
        </div>
      </section>

      <main className="my-5 mx-5 rounded-[30px] shadow-2xl backdrop-blur" style={mainCard}>
        <div className="container mx-auto px-5 py-12">
          {/* --------------------------- MENU (updated) --------------------------- */}
          <section id="menu">
            <SectionTitle>Our Sizzling Menu</SectionTitle>

            <MenuCategories
              categories={[
                { key: "all", icon: "⭐", title: "All" },
                { key: "pizza", icon: "🍕", title: "Pizza" },
                { key: "burger", icon: "🍔", title: "Burgers" },
                { key: "wrap", icon: "🌯", title: "Wraps" },
                { key: "side", icon: "🍟", title: "Sides" },
              ]}
              selected={selectedCategory}
              onSelect={(k) => setSelectedCategory(k as MenuItem["category"])}
            />

            <ItemsGrid>
              {filteredItems.map((item, idx) => (
                <ItemCard
                  key={`${item.category}-${idx}`}
                  icon={item.icon}
                  title={item.title}
                  price={item.price}
                  desc={item.desc}
                  onAdd={addToCart}
                  itemImage={itemImage}
                  itemImageGlow={itemImageGlow}
                  addBtn={addBtn}
                />
              ))}
            </ItemsGrid>
          </section>
          {/* --------------------------------------------------------------------- */}

          {/* Why Sizzling section (unchanged) */}
          <section className="my-20 text-center">
            <SectionTitle>Why Sizzling Chicken?</SectionTitle>
            <div className="grid gap-10" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
              <Feature icon="⚡" title="Lightning Fast" text="Hot and fresh chicken delivered to your door in 15 minutes or less" />
              <Feature icon="🔥" title="Always Sizzling" text="Our special heat-retention packaging keeps your food hot and crispy" />
              <Feature icon="🏆" title="Award Winning" text={'Winner of "Best Fast Food Chicken" for 3 consecutive years'} />
              <Feature icon="💰" title="Great Value" text="Premium quality chicken at unbeatable prices with daily deals" />
            </div>
          </section>

          {/* Deals (unchanged) */}
          <section id="deals" className="my-20">
            <SectionTitle>Today's Hot Deals</SectionTitle>
            <ItemsGrid>
              <DealCard
                badge="50% OFF"
                badgeStyle={{ background: "#FFD23F", color: "#FF6B35" }}
                icon="🎉"
                title="Mega Monday Deal"
                price={19.99}
                crossed={39.98}
                cta="Order Deal"
                itemImage={itemImage}
                itemImageGlow={itemImageGlow}
                addBtn={addBtn}
                onAdd={addToCart}
              />
              <DealCard
                borderStyle={{ borderColor: "#28a745" }}
                icon="🎓"
                title="Student Special"
                price={6.99}
                cta="Order Now"
                itemImage={itemImage}
                itemImageGlow={itemImageGlow}
                addBtn={addBtn}
                onAdd={addToCart}
              />
            </ItemsGrid>
          </section>
        </div>
      </main>

      <CartSidebar
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        total={total}
        onRemove={removeFromCart}
        onCheckout={() => setShowCheckout(true)}
      />

      <NotificationBar show={!!notification} message={notification} />

      {showCheckout && (
        <CheckoutModal
          items={cart}
          total={total}
          onCancel={() => setShowCheckout(false)}
          onConfirm={() => {
            setShowCheckout(false);
            toast("🔥 Order confirmed! Your sizzling chicken will arrive in 15 minutes!");
            setCart([]);
            setTimeout(() => toast("👨‍🍳 Your chicken is being prepared..."), 3000);
            setTimeout(() => toast("🏍️ Your order is out for delivery!"), 8000);
          }}
        />
      )}

      {showAdmin && (
        <AdminPanel
          delivery={delivery}
          onCancel={() => setShowAdmin(false)}
          onSave={(next) => {
            setShowAdmin(false);
            saveDelivery(next);
          }}
        />
      )}
    </div>
  );
};

export default App;