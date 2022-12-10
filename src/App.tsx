import React from "react";
import ProductPreview from "./components/ProductPreview";
import useCulture from "./hooks/useCulture";
import { ProductCategory } from "./helpers/getCategoryName";

import "./styles/scss/base.css";

const App = () => {
  const culture = useCulture();

  return (
    <ProductPreview
      name="Gabrielle Essence Eau De Parfum"
      category={ProductCategory.PERFUMES}
      culture={culture}
      currency="USD"
      description="A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL."
      price={149.99}
      discountPrice={169.99}
    />
  );
};

export default App;
