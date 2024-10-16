import styles from "./Contact.module.css";
import { useEffect } from "react";

export const Contact = () => {
  useEffect(() => {
    // コンポーネントがマウントされたときに背景色を変更
    const bodyStyle = document.body.style;
    bodyStyle.background = "radial-gradient(#0A1121, #13203E)";
    bodyStyle.height = "100vh";

    // コンポーネントがアンマウントされたときに背景色を元に戻す
    return () => {
      bodyStyle.background = "";
      bodyStyle.height = "";
    };
  }, []);

  return (
    <>
      <p className={styles.tentative}>Contact</p>
    </>
  );
};
