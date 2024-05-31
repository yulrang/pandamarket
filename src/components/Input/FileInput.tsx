import {
  ChangeEvent,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import Styles from "./Input.module.scss";
import icoPlus from "../../img/ic_plus.svg";
import icoX from "../../img/ic_x.svg";

interface FileInputProps {
  name?: string;
  value?: File | null;
  onChange?: (name: string, file: File | null) => void;
}

export default function FileInput({ name, value, onChange }: FileInputProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onChange && onChange(name || "", e.target.files[0]);
    }
  };

  const handleClearClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    setPreview(null);
    onChange && onChange(name || "", null);
  };

  useEffect(() => {
    if (!value) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };

    reader.readAsDataURL(value);

    return () => {
      URL.revokeObjectURL(preview as string);
    };
  }, [value]);

  return (
    <div className={Styles["file-view"]}>
      <label htmlFor="item-file" className={Styles["file-view__label"]}>
        <img
          src={icoPlus}
          alt="아이콘"
          aria-hidden="true"
          className={Styles.img}
        />
        <span className={Styles.txt}>이미지 등록</span>
      </label>
      <input
        type="file"
        accept="image/png, image/jpeg"
        ref={fileInput}
        onChange={handleChange}
        id="item-file"
        className={Styles["file-view__input"]}
        multiple
      />

      {preview && (
        <div className={Styles["file-view__preview"]}>
          <img src={preview} alt="이미지 미리보기" className={Styles.img} />
          <button
            type="button"
            onClick={handleClearClick}
            className={Styles["btn-close"]}
          >
            <img src={icoX} alt="아이콘" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}