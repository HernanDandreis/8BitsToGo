import { createContext, useContext, useState, useEffect } from 'react';

const CarritoContext = createContext();

export const useCart = () => {
  const context = useContext(CarritoContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de un CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(() => {
    try {
      const saved = localStorage.getItem('carrito');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

const agregarAlCarrito = (productoNuevo) => {
  setCarrito((prev) => {
    const index = prev.findIndex(p => p.id === productoNuevo.id);

    if (index !== -1) {
      const newCarrito = [...prev];
      newCarrito[index] = {
        ...newCarrito[index],
        quantity: newCarrito[index].quantity + (productoNuevo.quantity || 1),
      };
      return newCarrito;
    }

    return [
      ...prev,
      {
        id: productoNuevo.id,
        title: productoNuevo.title || productoNuevo.nombre || 'Producto sin nombre',
        price: productoNuevo.price || productoNuevo.precio || 0,
        quantity: productoNuevo.quantity || 1,
      }
    ];
  });
};

  const eliminarDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((p) => p.id !== id));
  };

  const actualizarCantidad = (id, cantidad) => {
    setCarrito((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: cantidad } : p))
    );
  };

  const vaciarCarrito = () => setCarrito([]);

  return (
    <CarritoContext.Provider
      value={{ carrito, agregarAlCarrito, eliminarDelCarrito, actualizarCantidad, vaciarCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export default CartProvider;