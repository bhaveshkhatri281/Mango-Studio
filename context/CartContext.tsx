"use client";

import React, { createContext, useContext, useReducer, useEffect, ReactNode, useState } from "react";

export type CartItem = {
  id: string; // E.g., 'mango-studio-alphonso-300ml-single'
  productId: string;
  name: string;
  size: string;
  pack: string;
  price: number;
  quantity: number;
  imagePath: string;
};

type CartState = {
  items: CartItem[];
  isDrawerOpen: boolean;
};

type Action =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: { id: string } }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "OPEN_DRAWER" }
  | { type: "CLOSE_DRAWER" }
  | { type: "SET_CART"; payload: CartItem[] };

const initialState: CartState = {
  items: [],
  isDrawerOpen: false,
};

function cartReducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      if (existingItemIndex >= 0) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += action.payload.quantity;
        return { ...state, items: updatedItems };
      }
      return { ...state, items: [...state.items, action.payload] };
    }
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        ),
      };
    case "CLEAR_CART":
      return { ...state, items: [] };
    case "OPEN_DRAWER":
      return { ...state, isDrawerOpen: true };
    case "CLOSE_DRAWER":
      return { ...state, isDrawerOpen: false };
    case "SET_CART":
      return { ...state, items: action.payload };
    default:
      return state;
  }
}

type CartContextType = {
  cartItems: CartItem[];
  cartCount: number;
  cartTotal: number;
  isDrawerOpen: boolean;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedCart = localStorage.getItem("mangoStudioCart");
    if (savedCart) {
      try {
        dispatch({ type: "SET_CART", payload: JSON.parse(savedCart) });
      } catch (e) {
        console.error("Failed to parse cart from local storage", e);
      }
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("mangoStudioCart", JSON.stringify(state.items));
    }
  }, [state.items, isMounted]);

  const cartCount = state.items.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = state.items.reduce((total, item) => total + item.price * item.quantity, 0);

  const addItem = (item: CartItem) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const openDrawer = () => {
    dispatch({ type: "OPEN_DRAWER" });
  };

  const closeDrawer = () => {
    dispatch({ type: "CLOSE_DRAWER" });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.items,
        cartCount,
        cartTotal,
        isDrawerOpen: state.isDrawerOpen,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        openDrawer,
        closeDrawer,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
