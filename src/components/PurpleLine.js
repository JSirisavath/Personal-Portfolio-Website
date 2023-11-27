import { useState, useEffect } from 'react';

export const PurpleLine = () => {
  const [borderColor, setBorderColor] = useState('#a855f7'); // Initial light purple color

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; // Use scrollY instead of pageYOffset
      const newColor = calculateColorBasedOnScroll(scrollY);
      setBorderColor(newColor);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calculateColorBasedOnScroll = (scrollY) => {
    const startColor = { r: 168, g: 85, b: 247 }; // Light purple
    const endColor = { r: 58, g: 12, b: 163 }; // Dark purple
    const scrollHeight = document.body.scrollHeight - window.innerHeight;
    const scrollRatio = Math.min(scrollY / scrollHeight, 1);

    const r = interpolate(startColor.r, endColor.r, scrollRatio);
    const g = interpolate(startColor.g, endColor.g, scrollRatio);
    const b = interpolate(startColor.b, endColor.b, scrollRatio);

    return `rgb(${r}, ${g}, ${b})`;
  };

  const interpolate = (start, end, ratio) => {
    return Math.round(start + (end - start) * ratio);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        width: '2px', // Width of the line
        backgroundColor: borderColor, // Apply dynamic color
        zIndex: 10, // Ensure it's above other elements
      }}
    />
  );
};
