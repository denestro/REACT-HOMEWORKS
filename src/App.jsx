import { Card } from "./components/Card"

import img1 from "./assets/cpu.svg"
import img2 from "./assets/laptop.svg"
import img3 from "./assets/mouse.svg"
import img4 from "./assets/videocard.svg"
import styles from "./App.module.css"

function App() {


  return (
    <div className={styles.cards}>
      <Card title="CPU" dsc="Цена:250$" img= {img1} butt="Pay" link= "https://dns-shop.kg/ru/product/db9240cda6c3ed20/processor-intel-core-i5-13400-box/" />
      <Card title="Laptop" dsc="Цена:800$" img= {img2} butt="Pay" link="https://dns-shop.kg/ru/product/2bb7df42cd2ced20/17.3-noutbuk-ardor-gaming-rage-x17-i7nd311-cernyj/"/>
      <Card title="Mouse" dsc="Цена:25$" img= {img3} butt="Pay" link="https://dns-shop.kg/ru/product/7cb1f5920d87ed20/mys-besprovodnaaprovodnaa-ardor-gaming-phantom-ardw-ph3335-wt-belyj/"/>
      <Card title="Card" dsc="Цена:270$" img= {img4} butt="Pay" link="https://dns-shop.kg/ru/product/7301e2897ec3ed20/videokarta-msi-geforce-rtx-4070-ti-ventus-3x-e1-oc-geforce-rtx-4070-ti-ventus-3x-e1-12g-oc/"/>
      
    </div>
    
  )
}

export default App
