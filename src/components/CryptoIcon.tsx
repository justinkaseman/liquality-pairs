import React, { useState, useEffect } from "react";

export default function CryptoIcon({ ticker }: { ticker: any }) {
  let [icon, setIcon] = useState("");

  useEffect(() => {
    const importIcon = async () => {
      try {
        let iconImport = await import(
          `../../node_modules/cryptocurrency-icons/32/color/${ticker.toLowerCase()}.png`
        );
        setIcon(iconImport.default);
      } catch {
        let fallbackImport = await import(
          `../../node_modules/cryptocurrency-icons/32/color/generic.png`
        );
        setIcon(fallbackImport.default);
      }
    };
    importIcon();
  }, [ticker]);

  return (
    <div className="CryptoIcon-container">
      {icon.length > 0 && <img alt={`${ticker} symbol`} src={icon} />}
    </div>
  );
}
