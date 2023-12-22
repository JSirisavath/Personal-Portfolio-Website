import { useState, useEffect } from 'react';

export const PurpleLine = ({ appRef }) => {
  const [borderColor, setBorderColor] = useState('#a855f7'); // Initial light purple color

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer =
        appRef && appRef.current ? appRef.current : document.documentElement;
      const scrollY = scrollContainer.scrollTop;
      const scrollHeight =
        scrollContainer.scrollHeight - scrollContainer.clientHeight;
      const newColor = calculateColorBasedOnScroll(scrollY, scrollHeight);
      setBorderColor(newColor);
    };

    const scrollableElement =
      appRef && appRef.current ? appRef.current : window;
    scrollableElement.addEventListener('scroll', handleScroll);

    return () => scrollableElement.removeEventListener('scroll', handleScroll);
  }, [appRef]);

  const calculateColorBasedOnScroll = (scrollY, scrollHeight) => {
    const startColor = { r: 168, g: 85, b: 247 }; // Light purple
    const endColor = { r: 58, g: 12, b: 163 }; // Dark purple
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
        width: '2px',
        backgroundColor: borderColor,
        zIndex: 10,
      }}
    />
  );
};
