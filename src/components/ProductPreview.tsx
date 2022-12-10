import React, { useMemo } from "react";

import mobileProductImage from "../assets/images/image-product-mobile.jpg";
import desktopProductImage from "../assets/images/image-product-desktop.jpg";
import cartImage from "../assets/images/cart.svg";

import Media from "react-media";
import InlineSVG from "react-inlinesvg";
import { getCategoryName, ProductCategory } from "../helpers/getCategoryName";

type ProductPreviewProps = {
  name: string;
  category: ProductCategory;
  description: string;
  price: number;
  culture: string;
  currency: string;
  discountPrice?: number;
  onCartAdd?: () => void;
};

const ProductPreview = ({
  name,
  category,
  description,
  price,
  culture,
  currency,
  discountPrice,
  onCartAdd,
}: ProductPreviewProps) => {
  const handleAddToCart = () => {
    onCartAdd && onCartAdd();
  };

  const priceFormatter = useMemo(() => {
    return new Intl.NumberFormat(culture, {
      style: "currency",
      currency: currency,
      maximumFractionDigits: 2,
    });
  }, [culture, currency]);

  return (
    <div className="ProductPreview">
      <Media
        queries={{
          mobile: "(max-width: 610px)",
        }}
      >
        {(matches) =>
          matches.mobile ? (
            <img
              src={mobileProductImage}
              className="ProductPreview__image ProductPreview__image--horizontal"
              alt="mobile_image"
            />
          ) : (
            <img
              src={desktopProductImage}
              className="ProductPreview__image ProductPreview__image--vertical"
              alt="desktop_image"
            />
          )
        }
      </Media>
      <div className="ProductPreview__info">
        <span className="ProductPreview__category">
          {getCategoryName(category)}
        </span>
        <h1 className="ProductPreview__name">{name}</h1>
        <p className="ProductPreview__description">{description}</p>
        <div className="ProductPreview__prices ProductPreviewPrices">
          <span className="ProductPreviewPrices__current">
            {priceFormatter.format(price)}
          </span>
          {discountPrice && (
            <span className="ProductPreviewPrices__discount">
              {priceFormatter.format(discountPrice)}
            </span>
          )}
        </div>
        <button
          className="ProductPreview__add-to-cart"
          onClick={handleAddToCart}
        >
          <InlineSVG src={cartImage} title="Cart" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductPreview;
