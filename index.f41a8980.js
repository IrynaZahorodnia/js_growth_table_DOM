function e(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function r(r){return function(r){if(Array.isArray(r))return e(r)}(r)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(r,t){if(r){if("string"==typeof r)return e(r,void 0);var n=Object.prototype.toString.call(r).slice(8,-1);if("Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(r,void 0)}}(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var t=document.querySelector(".field"),n=document.querySelector(".append-row"),o=document.querySelector(".remove-row"),i=document.querySelector(".append-column"),l=document.querySelector(".remove-column");n.addEventListener("click",function(){var e=t.rows;if(!(e.length>=10)){var r=e[0].cloneNode(!0);t.tBodies[0].append(r),o.removeAttribute("disabled"),n.disabled=10===e.length}}),o.addEventListener("click",function(){var e=t.rows;e[0].remove(),n.removeAttribute("disabled"),o.disabled=2===e.length}),i.addEventListener("click",function(){var e=t.rows,n=t.rows[0].children;n.length>=10||(r(e).forEach(function(e){var r=e.firstElementChild.cloneNode();e.append(r)}),l.removeAttribute("disabled"),i.disabled=10===n.length)}),l.addEventListener("click",function(){var e=t.rows,n=t.rows[0].children;r(e).forEach(function(e){e.firstElementChild.remove()}),i.removeAttribute("disabled"),l.disabled=2===n.length});
//# sourceMappingURL=index.f41a8980.js.map