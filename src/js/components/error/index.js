import mobile1x from '../../../images/noCoctails/errorMobile1x.png'
import mobile2x from '../../../images/noCoctails/errorMobile2x.png'

import tablet1x from '../../../images/noCoctails/errorTablet1x.png'
import tablet2x from '../../../images/noCoctails/errorTablet2x.png'

import desctop1x from '../../../images/noCoctails/errorDesctop1x.png'
import desctop2x from '../../../images/noCoctails/errorDesctop2x.png'

export const notFound = `<div class="container search-coctail__error">
<p class="search-coctail__title">Sorry, we didn't find any cocktail for you</p>

<picture>
    <source
      srcset="
      ${mobile1x}  1x,
      ${mobile2x}  2x
      "
      media="(max-width: 767.98px)"
    />
    <source
      srcset="
      ${tablet1x}    1x,
      ${tablet2x} 2x
      "
      media="(max-width: 1279px)"
    />
    <source
      srcset="
      ${desctop1x}    1x,
      ${desctop2x} 2x
      "
      media="(min-width: 1280px)"
    />
    <img
      class="coctail__error-img"
      src="./images/noCoctails/errorMobile1x.png"
      alt="couple in restaurant"
    />
  </picture>
</div>`