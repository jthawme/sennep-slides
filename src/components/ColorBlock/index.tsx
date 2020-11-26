import React, { useEffect, useRef, useState } from "react";
import { BlockPicker, CirclePicker } from "react-color";
import { clickOutside } from "../../utils/utils";

import styles from "./ColorBlock.module.scss";

interface ColorBlockProps {
  color: string;
  onUpdate: (color: string) => void;
}

const ColorBlock: React.FC<ColorBlockProps> = ({
  color = "#000",
  onUpdate,
}) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && wrapperRef.current) {
      return clickOutside(wrapperRef.current, () => {
        setOpen(false);
      });
    }
  }, [open]);

  return (
    <div
      ref={wrapperRef}
      className={styles.wrapper}
      style={{ "--current-color": color } as React.CSSProperties}
    >
      {open && (
        <div className={styles.swatch}>
          <CirclePicker
            onChangeComplete={(colors) => onUpdate(colors.hex)}
            color={color}
          />
        </div>
      )}
      <div className={styles.picker} onClick={() => setOpen(!open)} />
    </div>
  );
};

export { ColorBlock };
