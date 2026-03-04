import LabelCustom from "../../Buttons/LabelCustom";
import styles from '../../../styles/Content.module.css';

const HeaderService: React.FC = () => {
  return (
    <div className={styles.headerServiceContainer} >
      <LabelCustom text="Services" backgroundColor="#F97316" color="#fff" orientation="horizontal" rotate={-2} />
      <div className={styles.headerServiceContentText}>
        <h2>Ce que je fais mieux que les autres.</h2>
        <p>Spécialisé React, TypeScript et React Native. Je construis des apps web et mobile qui fonctionnent vraiment — rapides, maintenables et prêtes à scaler.</p>
      </div>
    </div>

  );
  
}

export default HeaderService;