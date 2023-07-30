import { CountTotalBooking } from "./MainCartList";
import styles from "./index.module.css";

export function FooterTotal() {
    return (
        <footer className={styles.totalCart}>
            <span>Итого билетов:</span>
            <span>
                <CountTotalBooking />
            </span>
        </footer>
    );
}
