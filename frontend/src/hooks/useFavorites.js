import { useState, useEffect } from 'react';

const STORAGE_KEY = 'waulkeen_favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Failed to load favorites:', error);
    }
  }, []);

  // Save to localStorage whenever favorites change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.error('Failed to save favorites:', error);
    }
  }, [favorites]);

  const toggleFavorite = (hostelName) => {
    setFavorites((prev) => {
      if (prev.includes(hostelName)) {
        return prev.filter((name) => name !== hostelName);
      } else {
        return [...prev, hostelName];
      }
    });
  };

  const addFavorite = (hostelName) => {
    setFavorites((prev) => {
      if (!prev.includes(hostelName)) {
        return [...prev, hostelName];
      }
      return prev;
    });
  };

  const removeFavorite = (hostelName) => {
    setFavorites((prev) => prev.filter((name) => name !== hostelName));
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  return {
    favorites,
    toggleFavorite,
    addFavorite,
    removeFavorite,
    clearFavorites,
  };
}