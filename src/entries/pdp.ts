// =============================================================================
// Product Details Page entry point
// It imports all the components required by PDP
// Each page type has own entry point containing required components.
// It allows optimizing bundles in webpack - which gathers common imports in separate package.
// It is a job of every component to initilize.

import 'config/base.scss';
// TODO: Remove this file when possible
import 'bundle.scss';

// =============================================================================
// Components
// =============================================================================

// Base components
import 'components/authorization-link';
import 'components/addtocart';
import 'components/autocomplete';
import 'components/breadcrumbs';
import 'components/button';
import 'components/container';
import 'components/cookie-message';
import 'components/device-detection';
import 'components/display-controller';
import 'components/dropdown-switcher';
import 'components/field';
import 'components/footer';
import 'components/grid-layout';
import 'components/headline';
import 'components/header';
import 'components/lazyload';
import 'components/links-block-addto';
import 'components/logo';
import 'components/messages';
import 'components/minicart';
import 'components/minicart-product';
import 'components/free-shipping-indicator';
import 'components/modal';
import 'components/navigation';
import 'components/newsletter';
import 'components/offcanvas-toggle';
import 'components/offcanvas-navigation';
import 'components/offcanvas';
import 'components/page-title';
import 'components/page-bottom';
import 'components/price-box';
import 'components/product-tile';
import 'components/qty-increment';
import 'components/slider';
import 'components/social-media-list';
import 'components/star-rating';
import 'components/swatches';
import 'components/tile-gallery';
import 'components/topbar';
import 'components/typography';
import 'components/usps';
import 'components/visually-hidden';
import 'components/select';
import 'components/product-navigation';

import 'components/non-critical';

// Content Constructor
import 'components/brand-carousel';
import 'components/category-links';
import 'components/daily-deal-teaser';
import 'components/dailydeal';
import 'components/image-teaser';
import 'components/image-teaser-legacy';
import 'components/paragraph';
import 'components/products-carousel';
import 'components/products-grid';
import 'components/products-list';
import 'components/product-finder';
import 'components/separator';
import 'components/accordion';
// PDP specific
import 'pages/product';
import 'components/bundle-box';
import 'components/buybox';
import 'components/form';
import 'components/indicators';
import 'components/product-gallery';
import 'components/product-details';
import 'components/review';
import 'components/reviews';
import 'components/reviews-summary';
import 'components/tabs';
import 'components/table';
import 'components/toolbar';
import 'components/captcha';
import 'customizations/plugincompany-contactforms/plugincompany-contactforms';
import 'components/video-player';

// Exported for usage in templates:
export { Select } from 'components/select';
export { AddressAutofill } from 'components/address-autofill';
