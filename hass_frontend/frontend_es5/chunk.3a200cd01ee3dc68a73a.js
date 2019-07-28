/*! For license information please see chunk.3a200cd01ee3dc68a73a.js.LICENSE */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [113],
  {
    457: function(t, e, i) {
      var n, a;
      function o(t) {
        return (o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      (a = function(t) {
        "use strict";
        t = t && t.hasOwnProperty("default") ? t.default : t;
        var e = {
          rgb2hsl: i,
          rgb2hsv: n,
          rgb2hwb: a,
          rgb2cmyk: s,
          rgb2keyword: l,
          rgb2xyz: d,
          rgb2lab: u,
          rgb2lch: function(t) {
            return y(u(t));
          },
          hsl2rgb: h,
          hsl2hsv: function(t) {
            var e = t[0],
              i = t[1] / 100,
              n = t[2] / 100;
            if (0 === n) return [0, 0, 0];
            return [
              e,
              100 * ((2 * (i *= (n *= 2) <= 1 ? n : 2 - n)) / (n + i)),
              100 * ((n + i) / 2),
            ];
          },
          hsl2hwb: function(t) {
            return a(h(t));
          },
          hsl2cmyk: function(t) {
            return s(h(t));
          },
          hsl2keyword: function(t) {
            return l(h(t));
          },
          hsv2rgb: c,
          hsv2hsl: function(t) {
            var e,
              i,
              n = t[0],
              a = t[1] / 100,
              o = t[2] / 100;
            return (
              (e = a * o),
              [
                n,
                100 * (e = (e /= (i = (2 - a) * o) <= 1 ? i : 2 - i) || 0),
                100 * (i /= 2),
              ]
            );
          },
          hsv2hwb: function(t) {
            return a(c(t));
          },
          hsv2cmyk: function(t) {
            return s(c(t));
          },
          hsv2keyword: function(t) {
            return l(c(t));
          },
          hwb2rgb: f,
          hwb2hsl: function(t) {
            return i(f(t));
          },
          hwb2hsv: function(t) {
            return n(f(t));
          },
          hwb2cmyk: function(t) {
            return s(f(t));
          },
          hwb2keyword: function(t) {
            return l(f(t));
          },
          cmyk2rgb: p,
          cmyk2hsl: function(t) {
            return i(p(t));
          },
          cmyk2hsv: function(t) {
            return n(p(t));
          },
          cmyk2hwb: function(t) {
            return a(p(t));
          },
          cmyk2keyword: function(t) {
            return l(p(t));
          },
          keyword2rgb: M,
          keyword2hsl: function(t) {
            return i(M(t));
          },
          keyword2hsv: function(t) {
            return n(M(t));
          },
          keyword2hwb: function(t) {
            return a(M(t));
          },
          keyword2cmyk: function(t) {
            return s(M(t));
          },
          keyword2lab: function(t) {
            return u(M(t));
          },
          keyword2xyz: function(t) {
            return d(M(t));
          },
          xyz2rgb: m,
          xyz2lab: v,
          xyz2lch: function(t) {
            return y(v(t));
          },
          lab2xyz: x,
          lab2rgb: k,
          lab2lch: y,
          lch2lab: w,
          lch2xyz: function(t) {
            return x(w(t));
          },
          lch2rgb: function(t) {
            return k(w(t));
          },
        };
        function i(t) {
          var e,
            i,
            n = t[0] / 255,
            a = t[1] / 255,
            o = t[2] / 255,
            r = Math.min(n, a, o),
            s = Math.max(n, a, o),
            l = s - r;
          return (
            s == r
              ? (e = 0)
              : n == s
              ? (e = (a - o) / l)
              : a == s
              ? (e = 2 + (o - n) / l)
              : o == s && (e = 4 + (n - a) / l),
            (e = Math.min(60 * e, 360)) < 0 && (e += 360),
            (i = (r + s) / 2),
            [
              e,
              100 * (s == r ? 0 : i <= 0.5 ? l / (s + r) : l / (2 - s - r)),
              100 * i,
            ]
          );
        }
        function n(t) {
          var e,
            i,
            n = t[0],
            a = t[1],
            o = t[2],
            r = Math.min(n, a, o),
            s = Math.max(n, a, o),
            l = s - r;
          return (
            (i = 0 == s ? 0 : ((l / s) * 1e3) / 10),
            s == r
              ? (e = 0)
              : n == s
              ? (e = (a - o) / l)
              : a == s
              ? (e = 2 + (o - n) / l)
              : o == s && (e = 4 + (n - a) / l),
            (e = Math.min(60 * e, 360)) < 0 && (e += 360),
            [e, i, ((s / 255) * 1e3) / 10]
          );
        }
        function a(t) {
          var e = t[0],
            n = t[1],
            a = t[2];
          return [
            i(t)[0],
            100 * ((1 / 255) * Math.min(e, Math.min(n, a))),
            100 * (a = 1 - (1 / 255) * Math.max(e, Math.max(n, a))),
          ];
        }
        function s(t) {
          var e,
            i = t[0] / 255,
            n = t[1] / 255,
            a = t[2] / 255;
          return [
            100 *
              ((1 - i - (e = Math.min(1 - i, 1 - n, 1 - a))) / (1 - e) || 0),
            100 * ((1 - n - e) / (1 - e) || 0),
            100 * ((1 - a - e) / (1 - e) || 0),
            100 * e,
          ];
        }
        function l(t) {
          return C[JSON.stringify(t)];
        }
        function d(t) {
          var e = t[0] / 255,
            i = t[1] / 255,
            n = t[2] / 255;
          return [
            100 *
              (0.4124 *
                (e =
                  e > 0.04045
                    ? Math.pow((e + 0.055) / 1.055, 2.4)
                    : e / 12.92) +
                0.3576 *
                  (i =
                    i > 0.04045
                      ? Math.pow((i + 0.055) / 1.055, 2.4)
                      : i / 12.92) +
                0.1805 *
                  (n =
                    n > 0.04045
                      ? Math.pow((n + 0.055) / 1.055, 2.4)
                      : n / 12.92)),
            100 * (0.2126 * e + 0.7152 * i + 0.0722 * n),
            100 * (0.0193 * e + 0.1192 * i + 0.9505 * n),
          ];
        }
        function u(t) {
          var e = d(t),
            i = e[0],
            n = e[1],
            a = e[2];
          return (
            (n /= 100),
            (a /= 108.883),
            (i =
              (i /= 95.047) > 0.008856
                ? Math.pow(i, 1 / 3)
                : 7.787 * i + 16 / 116),
            [
              116 *
                (n = n > 0.008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) -
                16,
              500 * (i - n),
              200 *
                (n -
                  (a =
                    a > 0.008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116)),
            ]
          );
        }
        function h(t) {
          var e,
            i,
            n,
            a,
            o,
            r = t[0] / 360,
            s = t[1] / 100,
            l = t[2] / 100;
          if (0 == s) return [(o = 255 * l), o, o];
          (e = 2 * l - (i = l < 0.5 ? l * (1 + s) : l + s - l * s)),
            (a = [0, 0, 0]);
          for (var d = 0; d < 3; d++)
            (n = r + (1 / 3) * -(d - 1)) < 0 && n++,
              n > 1 && n--,
              (o =
                6 * n < 1
                  ? e + 6 * (i - e) * n
                  : 2 * n < 1
                  ? i
                  : 3 * n < 2
                  ? e + (i - e) * (2 / 3 - n) * 6
                  : e),
              (a[d] = 255 * o);
          return a;
        }
        function c(t) {
          var e = t[0] / 60,
            i = t[1] / 100,
            n = t[2] / 100,
            a = Math.floor(e) % 6,
            o = e - Math.floor(e),
            r = 255 * n * (1 - i),
            s = 255 * n * (1 - i * o),
            l = 255 * n * (1 - i * (1 - o));
          n *= 255;
          switch (a) {
            case 0:
              return [n, l, r];
            case 1:
              return [s, n, r];
            case 2:
              return [r, n, l];
            case 3:
              return [r, s, n];
            case 4:
              return [l, r, n];
            case 5:
              return [n, r, s];
          }
        }
        function f(t) {
          var e,
            i,
            n,
            a,
            o = t[0] / 360,
            s = t[1] / 100,
            l = t[2] / 100,
            d = s + l;
          switch (
            (d > 1 && ((s /= d), (l /= d)),
            (n = 6 * o - (e = Math.floor(6 * o))),
            0 != (1 & e) && (n = 1 - n),
            (a = s + n * ((i = 1 - l) - s)),
            e)
          ) {
            default:
            case 6:
            case 0:
              (r = i), (g = a), (b = s);
              break;
            case 1:
              (r = a), (g = i), (b = s);
              break;
            case 2:
              (r = s), (g = i), (b = a);
              break;
            case 3:
              (r = s), (g = a), (b = i);
              break;
            case 4:
              (r = a), (g = s), (b = i);
              break;
            case 5:
              (r = i), (g = s), (b = a);
          }
          return [255 * r, 255 * g, 255 * b];
        }
        function p(t) {
          var e = t[0] / 100,
            i = t[1] / 100,
            n = t[2] / 100,
            a = t[3] / 100;
          return [
            255 * (1 - Math.min(1, e * (1 - a) + a)),
            255 * (1 - Math.min(1, i * (1 - a) + a)),
            255 * (1 - Math.min(1, n * (1 - a) + a)),
          ];
        }
        function m(t) {
          var e,
            i,
            n,
            a = t[0] / 100,
            o = t[1] / 100,
            r = t[2] / 100;
          return (
            (i = -0.9689 * a + 1.8758 * o + 0.0415 * r),
            (n = 0.0557 * a + -0.204 * o + 1.057 * r),
            (e =
              (e = 3.2406 * a + -1.5372 * o + -0.4986 * r) > 0.0031308
                ? 1.055 * Math.pow(e, 1 / 2.4) - 0.055
                : (e *= 12.92)),
            (i =
              i > 0.0031308
                ? 1.055 * Math.pow(i, 1 / 2.4) - 0.055
                : (i *= 12.92)),
            (n =
              n > 0.0031308
                ? 1.055 * Math.pow(n, 1 / 2.4) - 0.055
                : (n *= 12.92)),
            [
              255 * (e = Math.min(Math.max(0, e), 1)),
              255 * (i = Math.min(Math.max(0, i), 1)),
              255 * (n = Math.min(Math.max(0, n), 1)),
            ]
          );
        }
        function v(t) {
          var e = t[0],
            i = t[1],
            n = t[2];
          return (
            (i /= 100),
            (n /= 108.883),
            (e =
              (e /= 95.047) > 0.008856
                ? Math.pow(e, 1 / 3)
                : 7.787 * e + 16 / 116),
            [
              116 *
                (i = i > 0.008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) -
                16,
              500 * (e - i),
              200 *
                (i -
                  (n =
                    n > 0.008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116)),
            ]
          );
        }
        function x(t) {
          var e,
            i,
            n,
            a,
            o = t[0],
            r = t[1],
            s = t[2];
          return (
            o <= 8
              ? (a = ((i = (100 * o) / 903.3) / 100) * 7.787 + 16 / 116)
              : ((i = 100 * Math.pow((o + 16) / 116, 3)),
                (a = Math.pow(i / 100, 1 / 3))),
            [
              (e =
                e / 95.047 <= 0.008856
                  ? (e = (95.047 * (r / 500 + a - 16 / 116)) / 7.787)
                  : 95.047 * Math.pow(r / 500 + a, 3)),
              i,
              (n =
                n / 108.883 <= 0.008859
                  ? (n = (108.883 * (a - s / 200 - 16 / 116)) / 7.787)
                  : 108.883 * Math.pow(a - s / 200, 3)),
            ]
          );
        }
        function y(t) {
          var e,
            i = t[0],
            n = t[1],
            a = t[2];
          return (
            (e = (360 * Math.atan2(a, n)) / 2 / Math.PI) < 0 && (e += 360),
            [i, Math.sqrt(n * n + a * a), e]
          );
        }
        function k(t) {
          return m(x(t));
        }
        function w(t) {
          var e,
            i = t[0],
            n = t[1];
          return (
            (e = (t[2] / 360) * 2 * Math.PI),
            [i, n * Math.cos(e), n * Math.sin(e)]
          );
        }
        function M(t) {
          return _[t];
        }
        var _ = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50],
          },
          C = {};
        for (var S in _) C[JSON.stringify(_[S])] = S;
        var P = function() {
          return new F();
        };
        for (var I in e) {
          P[I + "Raw"] = (function(t) {
            return function(i) {
              return (
                "number" == typeof i &&
                  (i = Array.prototype.slice.call(arguments)),
                e[t](i)
              );
            };
          })(I);
          var A = /(\w+)2(\w+)/.exec(I),
            D = A[1],
            T = A[2];
          (P[D] = P[D] || {})[T] = P[I] = (function(t) {
            return function(i) {
              "number" == typeof i &&
                (i = Array.prototype.slice.call(arguments));
              var n = e[t](i);
              if ("string" == typeof n || void 0 === n) return n;
              for (var a = 0; a < n.length; a++) n[a] = Math.round(n[a]);
              return n;
            };
          })(I);
        }
        var F = function() {
          this.convs = {};
        };
        (F.prototype.routeSpace = function(t, e) {
          var i = e[0];
          return void 0 === i
            ? this.getValues(t)
            : ("number" == typeof i && (i = Array.prototype.slice.call(e)),
              this.setValues(t, i));
        }),
          (F.prototype.setValues = function(t, e) {
            return (
              (this.space = t), (this.convs = {}), (this.convs[t] = e), this
            );
          }),
          (F.prototype.getValues = function(t) {
            var e = this.convs[t];
            if (!e) {
              var i = this.space,
                n = this.convs[i];
              (e = P[i][t](n)), (this.convs[t] = e);
            }
            return e;
          }),
          ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(t) {
            F.prototype[t] = function(e) {
              return this.routeSpace(t, arguments);
            };
          });
        var L = P,
          O = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50],
          },
          R = {
            getRgba: B,
            getHsla: z,
            getRgb: function(t) {
              var e = B(t);
              return e && e.slice(0, 3);
            },
            getHsl: function(t) {
              var e = z(t);
              return e && e.slice(0, 3);
            },
            getHwb: W,
            getAlpha: function(t) {
              var e = B(t);
              if (e) return e[3];
              if ((e = z(t))) return e[3];
              if ((e = W(t))) return e[3];
            },
            hexString: function(t, e) {
              var e = void 0 !== e && 3 === t.length ? e : t[3];
              return (
                "#" +
                j(t[0]) +
                j(t[1]) +
                j(t[2]) +
                (e >= 0 && e < 1 ? j(Math.round(255 * e)) : "")
              );
            },
            rgbString: function(t, e) {
              if (e < 1 || (t[3] && t[3] < 1)) return N(t, e);
              return "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
            },
            rgbaString: N,
            percentString: function(t, e) {
              if (e < 1 || (t[3] && t[3] < 1)) return V(t, e);
              var i = Math.round((t[0] / 255) * 100),
                n = Math.round((t[1] / 255) * 100),
                a = Math.round((t[2] / 255) * 100);
              return "rgb(" + i + "%, " + n + "%, " + a + "%)";
            },
            percentaString: V,
            hslString: function(t, e) {
              if (e < 1 || (t[3] && t[3] < 1)) return E(t, e);
              return "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)";
            },
            hslaString: E,
            hwbString: function(t, e) {
              void 0 === e && (e = void 0 !== t[3] ? t[3] : 1);
              return (
                "hwb(" +
                t[0] +
                ", " +
                t[1] +
                "%, " +
                t[2] +
                "%" +
                (void 0 !== e && 1 !== e ? ", " + e : "") +
                ")"
              );
            },
            keyword: function(t) {
              return q[t.slice(0, 3)];
            },
          };
        function B(t) {
          if (t) {
            var e = [0, 0, 0],
              i = 1,
              n = t.match(/^#([a-fA-F0-9]{3,4})$/i),
              a = "";
            if (n) {
              a = (n = n[1])[3];
              for (var o = 0; o < e.length; o++)
                e[o] = parseInt(n[o] + n[o], 16);
              a && (i = Math.round((parseInt(a + a, 16) / 255) * 100) / 100);
            } else if ((n = t.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i))) {
              (a = n[2]), (n = n[1]);
              for (o = 0; o < e.length; o++)
                e[o] = parseInt(n.slice(2 * o, 2 * o + 2), 16);
              a && (i = Math.round((parseInt(a, 16) / 255) * 100) / 100);
            } else if (
              (n = t.match(
                /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i
              ))
            ) {
              for (o = 0; o < e.length; o++) e[o] = parseInt(n[o + 1]);
              i = parseFloat(n[4]);
            } else if (
              (n = t.match(
                /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i
              ))
            ) {
              for (o = 0; o < e.length; o++)
                e[o] = Math.round(2.55 * parseFloat(n[o + 1]));
              i = parseFloat(n[4]);
            } else if ((n = t.match(/(\w+)/))) {
              if ("transparent" == n[1]) return [0, 0, 0, 0];
              if (!(e = O[n[1]])) return;
            }
            for (o = 0; o < e.length; o++) e[o] = H(e[o], 0, 255);
            return (i = i || 0 == i ? H(i, 0, 1) : 1), (e[3] = i), e;
          }
        }
        function z(t) {
          if (t) {
            var e = t.match(
              /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/
            );
            if (e) {
              var i = parseFloat(e[4]);
              return [
                H(parseInt(e[1]), 0, 360),
                H(parseFloat(e[2]), 0, 100),
                H(parseFloat(e[3]), 0, 100),
                H(isNaN(i) ? 1 : i, 0, 1),
              ];
            }
          }
        }
        function W(t) {
          if (t) {
            var e = t.match(
              /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/
            );
            if (e) {
              var i = parseFloat(e[4]);
              return [
                H(parseInt(e[1]), 0, 360),
                H(parseFloat(e[2]), 0, 100),
                H(parseFloat(e[3]), 0, 100),
                H(isNaN(i) ? 1 : i, 0, 1),
              ];
            }
          }
        }
        function N(t, e) {
          return (
            void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
            "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
          );
        }
        function V(t, e) {
          return (
            "rgba(" +
            Math.round((t[0] / 255) * 100) +
            "%, " +
            Math.round((t[1] / 255) * 100) +
            "%, " +
            Math.round((t[2] / 255) * 100) +
            "%, " +
            (e || t[3] || 1) +
            ")"
          );
        }
        function E(t, e) {
          return (
            void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
            "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
          );
        }
        function H(t, e, i) {
          return Math.min(Math.max(e, t), i);
        }
        function j(t) {
          var e = t.toString(16).toUpperCase();
          return e.length < 2 ? "0" + e : e;
        }
        var q = {};
        for (var Y in O) q[O[Y]] = Y;
        var U = function t(e) {
          return e instanceof t
            ? e
            : this instanceof t
            ? ((this.valid = !1),
              (this.values = {
                rgb: [0, 0, 0],
                hsl: [0, 0, 0],
                hsv: [0, 0, 0],
                hwb: [0, 0, 0],
                cmyk: [0, 0, 0, 0],
                alpha: 1,
              }),
              void ("string" == typeof e
                ? (i = R.getRgba(e))
                  ? this.setValues("rgb", i)
                  : (i = R.getHsla(e))
                  ? this.setValues("hsl", i)
                  : (i = R.getHwb(e)) && this.setValues("hwb", i)
                : "object" === o(e) &&
                  (void 0 !== (i = e).r || void 0 !== i.red
                    ? this.setValues("rgb", i)
                    : void 0 !== i.l || void 0 !== i.lightness
                    ? this.setValues("hsl", i)
                    : void 0 !== i.v || void 0 !== i.value
                    ? this.setValues("hsv", i)
                    : void 0 !== i.w || void 0 !== i.whiteness
                    ? this.setValues("hwb", i)
                    : (void 0 === i.c && void 0 === i.cyan) ||
                      this.setValues("cmyk", i))))
            : new t(e);
          var i;
        };
        ((U.prototype = {
          isValid: function() {
            return this.valid;
          },
          rgb: function() {
            return this.setSpace("rgb", arguments);
          },
          hsl: function() {
            return this.setSpace("hsl", arguments);
          },
          hsv: function() {
            return this.setSpace("hsv", arguments);
          },
          hwb: function() {
            return this.setSpace("hwb", arguments);
          },
          cmyk: function() {
            return this.setSpace("cmyk", arguments);
          },
          rgbArray: function() {
            return this.values.rgb;
          },
          hslArray: function() {
            return this.values.hsl;
          },
          hsvArray: function() {
            return this.values.hsv;
          },
          hwbArray: function() {
            var t = this.values;
            return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb;
          },
          cmykArray: function() {
            return this.values.cmyk;
          },
          rgbaArray: function() {
            var t = this.values;
            return t.rgb.concat([t.alpha]);
          },
          hslaArray: function() {
            var t = this.values;
            return t.hsl.concat([t.alpha]);
          },
          alpha: function(t) {
            return void 0 === t
              ? this.values.alpha
              : (this.setValues("alpha", t), this);
          },
          red: function(t) {
            return this.setChannel("rgb", 0, t);
          },
          green: function(t) {
            return this.setChannel("rgb", 1, t);
          },
          blue: function(t) {
            return this.setChannel("rgb", 2, t);
          },
          hue: function(t) {
            return (
              t && (t = (t %= 360) < 0 ? 360 + t : t),
              this.setChannel("hsl", 0, t)
            );
          },
          saturation: function(t) {
            return this.setChannel("hsl", 1, t);
          },
          lightness: function(t) {
            return this.setChannel("hsl", 2, t);
          },
          saturationv: function(t) {
            return this.setChannel("hsv", 1, t);
          },
          whiteness: function(t) {
            return this.setChannel("hwb", 1, t);
          },
          blackness: function(t) {
            return this.setChannel("hwb", 2, t);
          },
          value: function(t) {
            return this.setChannel("hsv", 2, t);
          },
          cyan: function(t) {
            return this.setChannel("cmyk", 0, t);
          },
          magenta: function(t) {
            return this.setChannel("cmyk", 1, t);
          },
          yellow: function(t) {
            return this.setChannel("cmyk", 2, t);
          },
          black: function(t) {
            return this.setChannel("cmyk", 3, t);
          },
          hexString: function() {
            return R.hexString(this.values.rgb);
          },
          rgbString: function() {
            return R.rgbString(this.values.rgb, this.values.alpha);
          },
          rgbaString: function() {
            return R.rgbaString(this.values.rgb, this.values.alpha);
          },
          percentString: function() {
            return R.percentString(this.values.rgb, this.values.alpha);
          },
          hslString: function() {
            return R.hslString(this.values.hsl, this.values.alpha);
          },
          hslaString: function() {
            return R.hslaString(this.values.hsl, this.values.alpha);
          },
          hwbString: function() {
            return R.hwbString(this.values.hwb, this.values.alpha);
          },
          keyword: function() {
            return R.keyword(this.values.rgb, this.values.alpha);
          },
          rgbNumber: function() {
            var t = this.values.rgb;
            return (t[0] << 16) | (t[1] << 8) | t[2];
          },
          luminosity: function() {
            for (var t = this.values.rgb, e = [], i = 0; i < t.length; i++) {
              var n = t[i] / 255;
              e[i] =
                n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
            }
            return 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
          },
          contrast: function(t) {
            var e = this.luminosity(),
              i = t.luminosity();
            return e > i ? (e + 0.05) / (i + 0.05) : (i + 0.05) / (e + 0.05);
          },
          level: function(t) {
            var e = this.contrast(t);
            return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : "";
          },
          dark: function() {
            var t = this.values.rgb;
            return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128;
          },
          light: function() {
            return !this.dark();
          },
          negate: function() {
            for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
            return this.setValues("rgb", t), this;
          },
          lighten: function(t) {
            var e = this.values.hsl;
            return (e[2] += e[2] * t), this.setValues("hsl", e), this;
          },
          darken: function(t) {
            var e = this.values.hsl;
            return (e[2] -= e[2] * t), this.setValues("hsl", e), this;
          },
          saturate: function(t) {
            var e = this.values.hsl;
            return (e[1] += e[1] * t), this.setValues("hsl", e), this;
          },
          desaturate: function(t) {
            var e = this.values.hsl;
            return (e[1] -= e[1] * t), this.setValues("hsl", e), this;
          },
          whiten: function(t) {
            var e = this.values.hwb;
            return (e[1] += e[1] * t), this.setValues("hwb", e), this;
          },
          blacken: function(t) {
            var e = this.values.hwb;
            return (e[2] += e[2] * t), this.setValues("hwb", e), this;
          },
          greyscale: function() {
            var t = this.values.rgb,
              e = 0.3 * t[0] + 0.59 * t[1] + 0.11 * t[2];
            return this.setValues("rgb", [e, e, e]), this;
          },
          clearer: function(t) {
            var e = this.values.alpha;
            return this.setValues("alpha", e - e * t), this;
          },
          opaquer: function(t) {
            var e = this.values.alpha;
            return this.setValues("alpha", e + e * t), this;
          },
          rotate: function(t) {
            var e = this.values.hsl,
              i = (e[0] + t) % 360;
            return (e[0] = i < 0 ? 360 + i : i), this.setValues("hsl", e), this;
          },
          mix: function(t, e) {
            var i = t,
              n = void 0 === e ? 0.5 : e,
              a = 2 * n - 1,
              o = this.alpha() - i.alpha(),
              r = ((a * o == -1 ? a : (a + o) / (1 + a * o)) + 1) / 2,
              s = 1 - r;
            return this.rgb(
              r * this.red() + s * i.red(),
              r * this.green() + s * i.green(),
              r * this.blue() + s * i.blue()
            ).alpha(this.alpha() * n + i.alpha() * (1 - n));
          },
          toJSON: function() {
            return this.rgb();
          },
          clone: function() {
            var t,
              e,
              i = new U(),
              n = this.values,
              a = i.values;
            for (var o in n)
              n.hasOwnProperty(o) &&
                ((t = n[o]),
                "[object Array]" === (e = {}.toString.call(t))
                  ? (a[o] = t.slice(0))
                  : "[object Number]" === e
                  ? (a[o] = t)
                  : console.error("unexpected color value:", t));
            return i;
          },
        }).spaces = {
          rgb: ["red", "green", "blue"],
          hsl: ["hue", "saturation", "lightness"],
          hsv: ["hue", "saturation", "value"],
          hwb: ["hue", "whiteness", "blackness"],
          cmyk: ["cyan", "magenta", "yellow", "black"],
        }),
          (U.prototype.maxes = {
            rgb: [255, 255, 255],
            hsl: [360, 100, 100],
            hsv: [360, 100, 100],
            hwb: [360, 100, 100],
            cmyk: [100, 100, 100, 100],
          }),
          (U.prototype.getValues = function(t) {
            for (var e = this.values, i = {}, n = 0; n < t.length; n++)
              i[t.charAt(n)] = e[t][n];
            return 1 !== e.alpha && (i.a = e.alpha), i;
          }),
          (U.prototype.setValues = function(t, e) {
            var i,
              n,
              a = this.values,
              o = this.spaces,
              r = this.maxes,
              s = 1;
            if (((this.valid = !0), "alpha" === t)) s = e;
            else if (e.length) (a[t] = e.slice(0, t.length)), (s = e[t.length]);
            else if (void 0 !== e[t.charAt(0)]) {
              for (i = 0; i < t.length; i++) a[t][i] = e[t.charAt(i)];
              s = e.a;
            } else if (void 0 !== e[o[t][0]]) {
              var l = o[t];
              for (i = 0; i < t.length; i++) a[t][i] = e[l[i]];
              s = e.alpha;
            }
            if (
              ((a.alpha = Math.max(0, Math.min(1, void 0 === s ? a.alpha : s))),
              "alpha" === t)
            )
              return !1;
            for (i = 0; i < t.length; i++)
              (n = Math.max(0, Math.min(r[t][i], a[t][i]))),
                (a[t][i] = Math.round(n));
            for (var d in o) d !== t && (a[d] = L[t][d](a[t]));
            return !0;
          }),
          (U.prototype.setSpace = function(t, e) {
            var i = e[0];
            return void 0 === i
              ? this.getValues(t)
              : ("number" == typeof i && (i = Array.prototype.slice.call(e)),
                this.setValues(t, i),
                this);
          }),
          (U.prototype.setChannel = function(t, e, i) {
            var n = this.values[t];
            return void 0 === i
              ? n[e]
              : i === n[e]
              ? this
              : ((n[e] = i), this.setValues(t, n), this);
          }),
          "undefined" != typeof window && (window.Color = U);
        var X,
          K = U,
          G = {
            noop: function() {},
            uid: ((X = 0),
            function() {
              return X++;
            }),
            isNullOrUndef: function(t) {
              return null == t;
            },
            isArray: function(t) {
              if (Array.isArray && Array.isArray(t)) return !0;
              var e = Object.prototype.toString.call(t);
              return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6);
            },
            isObject: function(t) {
              return (
                null !== t &&
                "[object Object]" === Object.prototype.toString.call(t)
              );
            },
            isFinite: (function(t) {
              function e(e) {
                return t.apply(this, arguments);
              }
              return (
                (e.toString = function() {
                  return t.toString();
                }),
                e
              );
            })(function(t) {
              return (
                ("number" == typeof t || t instanceof Number) && isFinite(t)
              );
            }),
            valueOrDefault: function(t, e) {
              return void 0 === t ? e : t;
            },
            valueAtIndexOrDefault: function(t, e, i) {
              return G.valueOrDefault(G.isArray(t) ? t[e] : t, i);
            },
            callback: function(t, e, i) {
              if (t && "function" == typeof t.call) return t.apply(i, e);
            },
            each: function(t, e, i, n) {
              var a, o, r;
              if (G.isArray(t))
                if (((o = t.length), n))
                  for (a = o - 1; a >= 0; a--) e.call(i, t[a], a);
                else for (a = 0; a < o; a++) e.call(i, t[a], a);
              else if (G.isObject(t))
                for (o = (r = Object.keys(t)).length, a = 0; a < o; a++)
                  e.call(i, t[r[a]], r[a]);
            },
            arrayEquals: function(t, e) {
              var i, n, a, o;
              if (!t || !e || t.length !== e.length) return !1;
              for (i = 0, n = t.length; i < n; ++i)
                if (
                  ((a = t[i]),
                  (o = e[i]),
                  a instanceof Array && o instanceof Array)
                ) {
                  if (!G.arrayEquals(a, o)) return !1;
                } else if (a !== o) return !1;
              return !0;
            },
            clone: function(t) {
              if (G.isArray(t)) return t.map(G.clone);
              if (G.isObject(t)) {
                for (
                  var e = {}, i = Object.keys(t), n = i.length, a = 0;
                  a < n;
                  ++a
                )
                  e[i[a]] = G.clone(t[i[a]]);
                return e;
              }
              return t;
            },
            _merger: function(t, e, i, n) {
              var a = e[t],
                o = i[t];
              G.isObject(a) && G.isObject(o)
                ? G.merge(a, o, n)
                : (e[t] = G.clone(o));
            },
            _mergerIf: function(t, e, i) {
              var n = e[t],
                a = i[t];
              G.isObject(n) && G.isObject(a)
                ? G.mergeIf(n, a)
                : e.hasOwnProperty(t) || (e[t] = G.clone(a));
            },
            merge: function(t, e, i) {
              var n,
                a,
                o,
                r,
                s,
                l = G.isArray(e) ? e : [e],
                d = l.length;
              if (!G.isObject(t)) return t;
              for (n = (i = i || {}).merger || G._merger, a = 0; a < d; ++a)
                if (((e = l[a]), G.isObject(e)))
                  for (s = 0, r = (o = Object.keys(e)).length; s < r; ++s)
                    n(o[s], t, e, i);
              return t;
            },
            mergeIf: function(t, e) {
              return G.merge(t, e, { merger: G._mergerIf });
            },
            extend: function(t) {
              for (
                var e = function(e, i) {
                    t[i] = e;
                  },
                  i = 1,
                  n = arguments.length;
                i < n;
                ++i
              )
                G.each(arguments[i], e);
              return t;
            },
            inherits: function(t) {
              var e = this,
                i =
                  t && t.hasOwnProperty("constructor")
                    ? t.constructor
                    : function() {
                        return e.apply(this, arguments);
                      },
                n = function() {
                  this.constructor = i;
                };
              return (
                (n.prototype = e.prototype),
                (i.prototype = new n()),
                (i.extend = G.inherits),
                t && G.extend(i.prototype, t),
                (i.__super__ = e.prototype),
                i
              );
            },
          },
          Z = G;
        (G.callCallback = G.callback),
          (G.indexOf = function(t, e, i) {
            return Array.prototype.indexOf.call(t, e, i);
          }),
          (G.getValueOrDefault = G.valueOrDefault),
          (G.getValueAtIndexOrDefault = G.valueAtIndexOrDefault);
        var $ = {
            linear: function(t) {
              return t;
            },
            easeInQuad: function(t) {
              return t * t;
            },
            easeOutQuad: function(t) {
              return -t * (t - 2);
            },
            easeInOutQuad: function(t) {
              return (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
            },
            easeInCubic: function(t) {
              return t * t * t;
            },
            easeOutCubic: function(t) {
              return (t -= 1) * t * t + 1;
            },
            easeInOutCubic: function(t) {
              return (t /= 0.5) < 1
                ? 0.5 * t * t * t
                : 0.5 * ((t -= 2) * t * t + 2);
            },
            easeInQuart: function(t) {
              return t * t * t * t;
            },
            easeOutQuart: function(t) {
              return -((t -= 1) * t * t * t - 1);
            },
            easeInOutQuart: function(t) {
              return (t /= 0.5) < 1
                ? 0.5 * t * t * t * t
                : -0.5 * ((t -= 2) * t * t * t - 2);
            },
            easeInQuint: function(t) {
              return t * t * t * t * t;
            },
            easeOutQuint: function(t) {
              return (t -= 1) * t * t * t * t + 1;
            },
            easeInOutQuint: function(t) {
              return (t /= 0.5) < 1
                ? 0.5 * t * t * t * t * t
                : 0.5 * ((t -= 2) * t * t * t * t + 2);
            },
            easeInSine: function(t) {
              return 1 - Math.cos(t * (Math.PI / 2));
            },
            easeOutSine: function(t) {
              return Math.sin(t * (Math.PI / 2));
            },
            easeInOutSine: function(t) {
              return -0.5 * (Math.cos(Math.PI * t) - 1);
            },
            easeInExpo: function(t) {
              return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
            },
            easeOutExpo: function(t) {
              return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
            },
            easeInOutExpo: function(t) {
              return 0 === t
                ? 0
                : 1 === t
                ? 1
                : (t /= 0.5) < 1
                ? 0.5 * Math.pow(2, 10 * (t - 1))
                : 0.5 * (2 - Math.pow(2, -10 * --t));
            },
            easeInCirc: function(t) {
              return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1);
            },
            easeOutCirc: function(t) {
              return Math.sqrt(1 - (t -= 1) * t);
            },
            easeInOutCirc: function(t) {
              return (t /= 0.5) < 1
                ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
            },
            easeInElastic: function(t) {
              var e = 1.70158,
                i = 0,
                n = 1;
              return 0 === t
                ? 0
                : 1 === t
                ? 1
                : (i || (i = 0.3),
                  n < 1
                    ? ((n = 1), (e = i / 4))
                    : (e = (i / (2 * Math.PI)) * Math.asin(1 / n)),
                  -n *
                    Math.pow(2, 10 * (t -= 1)) *
                    Math.sin(((t - e) * (2 * Math.PI)) / i));
            },
            easeOutElastic: function(t) {
              var e = 1.70158,
                i = 0,
                n = 1;
              return 0 === t
                ? 0
                : 1 === t
                ? 1
                : (i || (i = 0.3),
                  n < 1
                    ? ((n = 1), (e = i / 4))
                    : (e = (i / (2 * Math.PI)) * Math.asin(1 / n)),
                  n *
                    Math.pow(2, -10 * t) *
                    Math.sin(((t - e) * (2 * Math.PI)) / i) +
                    1);
            },
            easeInOutElastic: function(t) {
              var e = 1.70158,
                i = 0,
                n = 1;
              return 0 === t
                ? 0
                : 2 == (t /= 0.5)
                ? 1
                : (i || (i = 0.45),
                  n < 1
                    ? ((n = 1), (e = i / 4))
                    : (e = (i / (2 * Math.PI)) * Math.asin(1 / n)),
                  t < 1
                    ? n *
                      Math.pow(2, 10 * (t -= 1)) *
                      Math.sin(((t - e) * (2 * Math.PI)) / i) *
                      -0.5
                    : n *
                        Math.pow(2, -10 * (t -= 1)) *
                        Math.sin(((t - e) * (2 * Math.PI)) / i) *
                        0.5 +
                      1);
            },
            easeInBack: function(t) {
              var e = 1.70158;
              return t * t * ((e + 1) * t - e);
            },
            easeOutBack: function(t) {
              var e = 1.70158;
              return (t -= 1) * t * ((e + 1) * t + e) + 1;
            },
            easeInOutBack: function(t) {
              var e = 1.70158;
              return (t /= 0.5) < 1
                ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
                : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
            },
            easeInBounce: function(t) {
              return 1 - $.easeOutBounce(1 - t);
            },
            easeOutBounce: function(t) {
              return t < 1 / 2.75
                ? 7.5625 * t * t
                : t < 2 / 2.75
                ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                : t < 2.5 / 2.75
                ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
            },
            easeInOutBounce: function(t) {
              return t < 0.5
                ? 0.5 * $.easeInBounce(2 * t)
                : 0.5 * $.easeOutBounce(2 * t - 1) + 0.5;
            },
          },
          J = { effects: $ };
        Z.easingEffects = $;
        var Q = Math.PI,
          tt = Q / 180,
          et = 2 * Q,
          it = Q / 2,
          nt = Q / 4,
          at = (2 * Q) / 3,
          ot = {
            clear: function(t) {
              t.ctx.clearRect(0, 0, t.width, t.height);
            },
            roundedRect: function(t, e, i, n, a, o) {
              if (o) {
                var r = Math.min(o, a / 2, n / 2),
                  s = e + r,
                  l = i + r,
                  d = e + n - r,
                  u = i + a - r;
                t.moveTo(e, l),
                  s < d && l < u
                    ? (t.arc(s, l, r, -Q, -it),
                      t.arc(d, l, r, -it, 0),
                      t.arc(d, u, r, 0, it),
                      t.arc(s, u, r, it, Q))
                    : s < d
                    ? (t.moveTo(s, i),
                      t.arc(d, l, r, -it, it),
                      t.arc(s, l, r, it, Q + it))
                    : l < u
                    ? (t.arc(s, l, r, -Q, 0), t.arc(s, u, r, 0, Q))
                    : t.arc(s, l, r, -Q, Q),
                  t.closePath(),
                  t.moveTo(e, i);
              } else t.rect(e, i, n, a);
            },
            drawPoint: function(t, e, i, n, a, r) {
              var s,
                l,
                d,
                u,
                h,
                c = (r || 0) * tt;
              if (
                !e ||
                "object" !== o(e) ||
                ("[object HTMLImageElement]" !== (s = e.toString()) &&
                  "[object HTMLCanvasElement]" !== s)
              ) {
                if (!(isNaN(i) || i <= 0)) {
                  switch ((t.beginPath(), e)) {
                    default:
                      t.arc(n, a, i, 0, et), t.closePath();
                      break;
                    case "triangle":
                      t.moveTo(n + Math.sin(c) * i, a - Math.cos(c) * i),
                        (c += at),
                        t.lineTo(n + Math.sin(c) * i, a - Math.cos(c) * i),
                        (c += at),
                        t.lineTo(n + Math.sin(c) * i, a - Math.cos(c) * i),
                        t.closePath();
                      break;
                    case "rectRounded":
                      (u = i - (h = 0.516 * i)),
                        (l = Math.cos(c + nt) * u),
                        (d = Math.sin(c + nt) * u),
                        t.arc(n - l, a - d, h, c - Q, c - it),
                        t.arc(n + d, a - l, h, c - it, c),
                        t.arc(n + l, a + d, h, c, c + it),
                        t.arc(n - d, a + l, h, c + it, c + Q),
                        t.closePath();
                      break;
                    case "rect":
                      if (!r) {
                        (u = Math.SQRT1_2 * i),
                          t.rect(n - u, a - u, 2 * u, 2 * u);
                        break;
                      }
                      c += nt;
                    case "rectRot":
                      (l = Math.cos(c) * i),
                        (d = Math.sin(c) * i),
                        t.moveTo(n - l, a - d),
                        t.lineTo(n + d, a - l),
                        t.lineTo(n + l, a + d),
                        t.lineTo(n - d, a + l),
                        t.closePath();
                      break;
                    case "crossRot":
                      c += nt;
                    case "cross":
                      (l = Math.cos(c) * i),
                        (d = Math.sin(c) * i),
                        t.moveTo(n - l, a - d),
                        t.lineTo(n + l, a + d),
                        t.moveTo(n + d, a - l),
                        t.lineTo(n - d, a + l);
                      break;
                    case "star":
                      (l = Math.cos(c) * i),
                        (d = Math.sin(c) * i),
                        t.moveTo(n - l, a - d),
                        t.lineTo(n + l, a + d),
                        t.moveTo(n + d, a - l),
                        t.lineTo(n - d, a + l),
                        (c += nt),
                        (l = Math.cos(c) * i),
                        (d = Math.sin(c) * i),
                        t.moveTo(n - l, a - d),
                        t.lineTo(n + l, a + d),
                        t.moveTo(n + d, a - l),
                        t.lineTo(n - d, a + l);
                      break;
                    case "line":
                      (l = Math.cos(c) * i),
                        (d = Math.sin(c) * i),
                        t.moveTo(n - l, a - d),
                        t.lineTo(n + l, a + d);
                      break;
                    case "dash":
                      t.moveTo(n, a),
                        t.lineTo(n + Math.cos(c) * i, a + Math.sin(c) * i);
                  }
                  t.fill(), t.stroke();
                }
              } else
                t.drawImage(
                  e,
                  n - e.width / 2,
                  a - e.height / 2,
                  e.width,
                  e.height
                );
            },
            _isPointInArea: function(t, e) {
              return (
                t.x > e.left - 1e-6 &&
                t.x < e.right + 1e-6 &&
                t.y > e.top - 1e-6 &&
                t.y < e.bottom + 1e-6
              );
            },
            clipArea: function(t, e) {
              t.save(),
                t.beginPath(),
                t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
                t.clip();
            },
            unclipArea: function(t) {
              t.restore();
            },
            lineTo: function(t, e, i, n) {
              var a = i.steppedLine;
              if (a) {
                if ("middle" === a) {
                  var o = (e.x + i.x) / 2;
                  t.lineTo(o, n ? i.y : e.y), t.lineTo(o, n ? e.y : i.y);
                } else
                  ("after" === a && !n) || ("after" !== a && n)
                    ? t.lineTo(e.x, i.y)
                    : t.lineTo(i.x, e.y);
                t.lineTo(i.x, i.y);
              } else
                i.tension
                  ? t.bezierCurveTo(
                      n ? e.controlPointPreviousX : e.controlPointNextX,
                      n ? e.controlPointPreviousY : e.controlPointNextY,
                      n ? i.controlPointNextX : i.controlPointPreviousX,
                      n ? i.controlPointNextY : i.controlPointPreviousY,
                      i.x,
                      i.y
                    )
                  : t.lineTo(i.x, i.y);
            },
          },
          rt = ot;
        (Z.clear = ot.clear),
          (Z.drawRoundedRectangle = function(t) {
            t.beginPath(), ot.roundedRect.apply(ot, arguments);
          });
        var st = {
          _set: function(t, e) {
            return Z.merge(this[t] || (this[t] = {}), e);
          },
        };
        st._set("global", {
          defaultColor: "rgba(0,0,0,0.1)",
          defaultFontColor: "#666",
          defaultFontFamily:
            "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          defaultFontSize: 12,
          defaultFontStyle: "normal",
          defaultLineHeight: 1.2,
          showLines: !0,
        });
        var lt = st,
          dt = Z.valueOrDefault,
          ut = {
            toLineHeight: function(t, e) {
              var i = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
              if (!i || "normal" === i[1]) return 1.2 * e;
              switch (((t = +i[2]), i[3])) {
                case "px":
                  return t;
                case "%":
                  t /= 100;
              }
              return e * t;
            },
            toPadding: function(t) {
              var e, i, n, a;
              return (
                Z.isObject(t)
                  ? ((e = +t.top || 0),
                    (i = +t.right || 0),
                    (n = +t.bottom || 0),
                    (a = +t.left || 0))
                  : (e = i = n = a = +t || 0),
                {
                  top: e,
                  right: i,
                  bottom: n,
                  left: a,
                  height: e + n,
                  width: a + i,
                }
              );
            },
            _parseFont: function(t) {
              var e = lt.global,
                i = dt(t.fontSize, e.defaultFontSize),
                n = {
                  family: dt(t.fontFamily, e.defaultFontFamily),
                  lineHeight: Z.options.toLineHeight(
                    dt(t.lineHeight, e.defaultLineHeight),
                    i
                  ),
                  size: i,
                  style: dt(t.fontStyle, e.defaultFontStyle),
                  weight: null,
                  string: "",
                };
              return (
                (n.string = (function(t) {
                  return !t ||
                    Z.isNullOrUndef(t.size) ||
                    Z.isNullOrUndef(t.family)
                    ? null
                    : (t.style ? t.style + " " : "") +
                        (t.weight ? t.weight + " " : "") +
                        t.size +
                        "px " +
                        t.family;
                })(n)),
                n
              );
            },
            resolve: function(t, e, i) {
              var n, a, o;
              for (n = 0, a = t.length; n < a; ++n)
                if (
                  void 0 !== (o = t[n]) &&
                  (void 0 !== e && "function" == typeof o && (o = o(e)),
                  void 0 !== i && Z.isArray(o) && (o = o[i]),
                  void 0 !== o)
                )
                  return o;
            },
          },
          ht = Z,
          ct = J,
          ft = rt,
          gt = ut;
        (ht.easing = ct), (ht.canvas = ft), (ht.options = gt);
        var pt = function(t) {
          ht.extend(this, t), this.initialize.apply(this, arguments);
        };
        ht.extend(pt.prototype, {
          initialize: function() {
            this.hidden = !1;
          },
          pivot: function() {
            var t = this;
            return (
              t._view || (t._view = ht.clone(t._model)), (t._start = {}), t
            );
          },
          transition: function(t) {
            var e = this,
              i = e._model,
              n = e._start,
              a = e._view;
            return i && 1 !== t
              ? (a || (a = e._view = {}),
                n || (n = e._start = {}),
                (function(t, e, i, n) {
                  var a,
                    r,
                    s,
                    l,
                    d,
                    u,
                    h,
                    c,
                    f,
                    g = Object.keys(i);
                  for (a = 0, r = g.length; a < r; ++a)
                    if (
                      ((u = i[(s = g[a])]),
                      e.hasOwnProperty(s) || (e[s] = u),
                      (l = e[s]) !== u && "_" !== s[0])
                    ) {
                      if (
                        (t.hasOwnProperty(s) || (t[s] = l),
                        (d = t[s]),
                        (h = o(u)) === o(d))
                      )
                        if ("string" === h) {
                          if ((c = K(d)).valid && (f = K(u)).valid) {
                            e[s] = f.mix(c, n).rgbString();
                            continue;
                          }
                        } else if (ht.isFinite(d) && ht.isFinite(u)) {
                          e[s] = d + (u - d) * n;
                          continue;
                        }
                      e[s] = u;
                    }
                })(n, a, i, t),
                e)
              : ((e._view = i), (e._start = null), e);
          },
          tooltipPosition: function() {
            return { x: this._model.x, y: this._model.y };
          },
          hasValue: function() {
            return ht.isNumber(this._model.x) && ht.isNumber(this._model.y);
          },
        }),
          (pt.extend = ht.inherits);
        var mt = pt,
          vt = mt.extend({
            chart: null,
            currentStep: 0,
            numSteps: 60,
            easing: "",
            render: null,
            onAnimationProgress: null,
            onAnimationComplete: null,
          }),
          bt = vt;
        Object.defineProperty(vt.prototype, "animationObject", {
          get: function() {
            return this;
          },
        }),
          Object.defineProperty(vt.prototype, "chartInstance", {
            get: function() {
              return this.chart;
            },
            set: function(t) {
              this.chart = t;
            },
          }),
          lt._set("global", {
            animation: {
              duration: 1e3,
              easing: "easeOutQuart",
              onProgress: ht.noop,
              onComplete: ht.noop,
            },
          });
        var xt = {
            animations: [],
            request: null,
            addAnimation: function(t, e, i, n) {
              var a,
                o,
                r = this.animations;
              for (
                e.chart = t,
                  e.startTime = Date.now(),
                  e.duration = i,
                  n || (t.animating = !0),
                  a = 0,
                  o = r.length;
                a < o;
                ++a
              )
                if (r[a].chart === t) return void (r[a] = e);
              r.push(e), 1 === r.length && this.requestAnimationFrame();
            },
            cancelAnimation: function(t) {
              var e = ht.findIndex(this.animations, function(e) {
                return e.chart === t;
              });
              -1 !== e && (this.animations.splice(e, 1), (t.animating = !1));
            },
            requestAnimationFrame: function() {
              var t = this;
              null === t.request &&
                (t.request = ht.requestAnimFrame.call(window, function() {
                  (t.request = null), t.startDigest();
                }));
            },
            startDigest: function() {
              this.advance(),
                this.animations.length > 0 && this.requestAnimationFrame();
            },
            advance: function() {
              for (var t, e, i, n, a = this.animations, o = 0; o < a.length; )
                (e = (t = a[o]).chart),
                  (i = t.numSteps),
                  (n =
                    Math.floor(((Date.now() - t.startTime) / t.duration) * i) +
                    1),
                  (t.currentStep = Math.min(n, i)),
                  ht.callback(t.render, [e, t], e),
                  ht.callback(t.onAnimationProgress, [t], e),
                  t.currentStep >= i
                    ? (ht.callback(t.onAnimationComplete, [t], e),
                      (e.animating = !1),
                      a.splice(o, 1))
                    : ++o;
            },
          },
          yt = ht.options.resolve,
          kt = ["push", "pop", "shift", "splice", "unshift"];
        function wt(t, e) {
          var i = t._chartjs;
          if (i) {
            var n = i.listeners,
              a = n.indexOf(e);
            -1 !== a && n.splice(a, 1),
              n.length > 0 ||
                (kt.forEach(function(e) {
                  delete t[e];
                }),
                delete t._chartjs);
          }
        }
        var Mt = function(t, e) {
          this.initialize(t, e);
        };
        ht.extend(Mt.prototype, {
          datasetElementType: null,
          dataElementType: null,
          initialize: function(t, e) {
            (this.chart = t),
              (this.index = e),
              this.linkScales(),
              this.addElements();
          },
          updateIndex: function(t) {
            this.index = t;
          },
          linkScales: function() {
            var t = this,
              e = t.getMeta(),
              i = t.getDataset();
            (null !== e.xAxisID && e.xAxisID in t.chart.scales) ||
              (e.xAxisID = i.xAxisID || t.chart.options.scales.xAxes[0].id),
              (null !== e.yAxisID && e.yAxisID in t.chart.scales) ||
                (e.yAxisID = i.yAxisID || t.chart.options.scales.yAxes[0].id);
          },
          getDataset: function() {
            return this.chart.data.datasets[this.index];
          },
          getMeta: function() {
            return this.chart.getDatasetMeta(this.index);
          },
          getScaleForId: function(t) {
            return this.chart.scales[t];
          },
          _getValueScaleId: function() {
            return this.getMeta().yAxisID;
          },
          _getIndexScaleId: function() {
            return this.getMeta().xAxisID;
          },
          _getValueScale: function() {
            return this.getScaleForId(this._getValueScaleId());
          },
          _getIndexScale: function() {
            return this.getScaleForId(this._getIndexScaleId());
          },
          reset: function() {
            this.update(!0);
          },
          destroy: function() {
            this._data && wt(this._data, this);
          },
          createMetaDataset: function() {
            var t = this.datasetElementType;
            return (
              t && new t({ _chart: this.chart, _datasetIndex: this.index })
            );
          },
          createMetaData: function(t) {
            var e = this.dataElementType;
            return (
              e &&
              new e({
                _chart: this.chart,
                _datasetIndex: this.index,
                _index: t,
              })
            );
          },
          addElements: function() {
            var t,
              e,
              i = this.getMeta(),
              n = this.getDataset().data || [],
              a = i.data;
            for (t = 0, e = n.length; t < e; ++t)
              a[t] = a[t] || this.createMetaData(t);
            i.dataset = i.dataset || this.createMetaDataset();
          },
          addElementAndReset: function(t) {
            var e = this.createMetaData(t);
            this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0);
          },
          buildOrUpdateElements: function() {
            var t,
              e,
              i = this,
              n = i.getDataset(),
              a = n.data || (n.data = []);
            i._data !== a &&
              (i._data && wt(i._data, i),
              a &&
                Object.isExtensible(a) &&
                ((e = i),
                (t = a)._chartjs
                  ? t._chartjs.listeners.push(e)
                  : (Object.defineProperty(t, "_chartjs", {
                      configurable: !0,
                      enumerable: !1,
                      value: { listeners: [e] },
                    }),
                    kt.forEach(function(e) {
                      var i = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                        n = t[e];
                      Object.defineProperty(t, e, {
                        configurable: !0,
                        enumerable: !1,
                        value: function() {
                          var e = Array.prototype.slice.call(arguments),
                            a = n.apply(this, e);
                          return (
                            ht.each(t._chartjs.listeners, function(t) {
                              "function" == typeof t[i] && t[i].apply(t, e);
                            }),
                            a
                          );
                        },
                      });
                    }))),
              (i._data = a)),
              i.resyncElements();
          },
          update: ht.noop,
          transition: function(t) {
            for (
              var e = this.getMeta(), i = e.data || [], n = i.length, a = 0;
              a < n;
              ++a
            )
              i[a].transition(t);
            e.dataset && e.dataset.transition(t);
          },
          draw: function() {
            var t = this.getMeta(),
              e = t.data || [],
              i = e.length,
              n = 0;
            for (t.dataset && t.dataset.draw(); n < i; ++n) e[n].draw();
          },
          removeHoverStyle: function(t) {
            ht.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle;
          },
          setHoverStyle: function(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
              i = t._index,
              n = t.custom || {},
              a = t._model,
              o = ht.getHoverColor;
            (t.$previousStyle = {
              backgroundColor: a.backgroundColor,
              borderColor: a.borderColor,
              borderWidth: a.borderWidth,
            }),
              (a.backgroundColor = yt(
                [
                  n.hoverBackgroundColor,
                  e.hoverBackgroundColor,
                  o(a.backgroundColor),
                ],
                void 0,
                i
              )),
              (a.borderColor = yt(
                [n.hoverBorderColor, e.hoverBorderColor, o(a.borderColor)],
                void 0,
                i
              )),
              (a.borderWidth = yt(
                [n.hoverBorderWidth, e.hoverBorderWidth, a.borderWidth],
                void 0,
                i
              ));
          },
          resyncElements: function() {
            var t = this.getMeta(),
              e = this.getDataset().data,
              i = t.data.length,
              n = e.length;
            n < i
              ? t.data.splice(n, i - n)
              : n > i && this.insertElements(i, n - i);
          },
          insertElements: function(t, e) {
            for (var i = 0; i < e; ++i) this.addElementAndReset(t + i);
          },
          onDataPush: function() {
            var t = arguments.length;
            this.insertElements(this.getDataset().data.length - t, t);
          },
          onDataPop: function() {
            this.getMeta().data.pop();
          },
          onDataShift: function() {
            this.getMeta().data.shift();
          },
          onDataSplice: function(t, e) {
            this.getMeta().data.splice(t, e),
              this.insertElements(t, arguments.length - 2);
          },
          onDataUnshift: function() {
            this.insertElements(0, arguments.length);
          },
        }),
          (Mt.extend = ht.inherits);
        var _t = Mt;
        lt._set("global", {
          elements: {
            arc: {
              backgroundColor: lt.global.defaultColor,
              borderColor: "#fff",
              borderWidth: 2,
              borderAlign: "center",
            },
          },
        });
        var Ct = mt.extend({
            inLabelRange: function(t) {
              var e = this._view;
              return (
                !!e &&
                Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
              );
            },
            inRange: function(t, e) {
              var i = this._view;
              if (i) {
                for (
                  var n = ht.getAngleFromPoint(i, { x: t, y: e }),
                    a = n.angle,
                    o = n.distance,
                    r = i.startAngle,
                    s = i.endAngle;
                  s < r;

                )
                  s += 2 * Math.PI;
                for (; a > s; ) a -= 2 * Math.PI;
                for (; a < r; ) a += 2 * Math.PI;
                var l = a >= r && a <= s,
                  d = o >= i.innerRadius && o <= i.outerRadius;
                return l && d;
              }
              return !1;
            },
            getCenterPoint: function() {
              var t = this._view,
                e = (t.startAngle + t.endAngle) / 2,
                i = (t.innerRadius + t.outerRadius) / 2;
              return { x: t.x + Math.cos(e) * i, y: t.y + Math.sin(e) * i };
            },
            getArea: function() {
              var t = this._view;
              return (
                Math.PI *
                ((t.endAngle - t.startAngle) / (2 * Math.PI)) *
                (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
              );
            },
            tooltipPosition: function() {
              var t = this._view,
                e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                i = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
              return { x: t.x + Math.cos(e) * i, y: t.y + Math.sin(e) * i };
            },
            draw: function() {
              var t,
                e = this._chart.ctx,
                i = this._view,
                n = i.startAngle,
                a = i.endAngle,
                o = "inner" === i.borderAlign ? 0.33 : 0;
              e.save(),
                e.beginPath(),
                e.arc(i.x, i.y, Math.max(i.outerRadius - o, 0), n, a),
                e.arc(i.x, i.y, i.innerRadius, a, n, !0),
                e.closePath(),
                (e.fillStyle = i.backgroundColor),
                e.fill(),
                i.borderWidth &&
                  ("inner" === i.borderAlign
                    ? (e.beginPath(),
                      (t = o / i.outerRadius),
                      e.arc(i.x, i.y, i.outerRadius, n - t, a + t),
                      i.innerRadius > o
                        ? ((t = o / i.innerRadius),
                          e.arc(i.x, i.y, i.innerRadius - o, a + t, n - t, !0))
                        : e.arc(i.x, i.y, o, a + Math.PI / 2, n - Math.PI / 2),
                      e.closePath(),
                      e.clip(),
                      e.beginPath(),
                      e.arc(i.x, i.y, i.outerRadius, n, a),
                      e.arc(i.x, i.y, i.innerRadius, a, n, !0),
                      e.closePath(),
                      (e.lineWidth = 2 * i.borderWidth),
                      (e.lineJoin = "round"))
                    : ((e.lineWidth = i.borderWidth), (e.lineJoin = "bevel")),
                  (e.strokeStyle = i.borderColor),
                  e.stroke()),
                e.restore();
            },
          }),
          St = ht.valueOrDefault,
          Pt = lt.global.defaultColor;
        lt._set("global", {
          elements: {
            line: {
              tension: 0.4,
              backgroundColor: Pt,
              borderWidth: 3,
              borderColor: Pt,
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0,
              borderJoinStyle: "miter",
              capBezierPoints: !0,
              fill: !0,
            },
          },
        });
        var It = mt.extend({
            draw: function() {
              var t,
                e,
                i,
                n,
                a = this._view,
                o = this._chart.ctx,
                r = a.spanGaps,
                s = this._children.slice(),
                l = lt.global,
                d = l.elements.line,
                u = -1;
              for (
                this._loop && s.length && s.push(s[0]),
                  o.save(),
                  o.lineCap = a.borderCapStyle || d.borderCapStyle,
                  o.setLineDash && o.setLineDash(a.borderDash || d.borderDash),
                  o.lineDashOffset = St(a.borderDashOffset, d.borderDashOffset),
                  o.lineJoin = a.borderJoinStyle || d.borderJoinStyle,
                  o.lineWidth = St(a.borderWidth, d.borderWidth),
                  o.strokeStyle = a.borderColor || l.defaultColor,
                  o.beginPath(),
                  u = -1,
                  t = 0;
                t < s.length;
                ++t
              )
                (e = s[t]),
                  (i = ht.previousItem(s, t)),
                  (n = e._view),
                  0 === t
                    ? n.skip || (o.moveTo(n.x, n.y), (u = t))
                    : ((i = -1 === u ? i : s[u]),
                      n.skip ||
                        ((u !== t - 1 && !r) || -1 === u
                          ? o.moveTo(n.x, n.y)
                          : ht.canvas.lineTo(o, i._view, e._view),
                        (u = t)));
              o.stroke(), o.restore();
            },
          }),
          At = ht.valueOrDefault,
          Dt = lt.global.defaultColor;
        function Tt(t) {
          var e = this._view;
          return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius;
        }
        lt._set("global", {
          elements: {
            point: {
              radius: 3,
              pointStyle: "circle",
              backgroundColor: Dt,
              borderColor: Dt,
              borderWidth: 1,
              hitRadius: 1,
              hoverRadius: 4,
              hoverBorderWidth: 1,
            },
          },
        });
        var Ft = mt.extend({
            inRange: function(t, e) {
              var i = this._view;
              return (
                !!i &&
                Math.pow(t - i.x, 2) + Math.pow(e - i.y, 2) <
                  Math.pow(i.hitRadius + i.radius, 2)
              );
            },
            inLabelRange: Tt,
            inXRange: Tt,
            inYRange: function(t) {
              var e = this._view;
              return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius;
            },
            getCenterPoint: function() {
              var t = this._view;
              return { x: t.x, y: t.y };
            },
            getArea: function() {
              return Math.PI * Math.pow(this._view.radius, 2);
            },
            tooltipPosition: function() {
              var t = this._view;
              return { x: t.x, y: t.y, padding: t.radius + t.borderWidth };
            },
            draw: function(t) {
              var e = this._view,
                i = this._chart.ctx,
                n = e.pointStyle,
                a = e.rotation,
                o = e.radius,
                r = e.x,
                s = e.y,
                l = lt.global,
                d = l.defaultColor;
              e.skip ||
                ((void 0 === t || ht.canvas._isPointInArea(e, t)) &&
                  ((i.strokeStyle = e.borderColor || d),
                  (i.lineWidth = At(
                    e.borderWidth,
                    l.elements.point.borderWidth
                  )),
                  (i.fillStyle = e.backgroundColor || d),
                  ht.canvas.drawPoint(i, n, o, r, s, a)));
            },
          }),
          Lt = lt.global.defaultColor;
        function Ot(t) {
          return t && void 0 !== t.width;
        }
        function Rt(t) {
          var e, i, n, a, o;
          return (
            Ot(t)
              ? ((o = t.width / 2),
                (e = t.x - o),
                (i = t.x + o),
                (n = Math.min(t.y, t.base)),
                (a = Math.max(t.y, t.base)))
              : ((o = t.height / 2),
                (e = Math.min(t.x, t.base)),
                (i = Math.max(t.x, t.base)),
                (n = t.y - o),
                (a = t.y + o)),
            { left: e, top: n, right: i, bottom: a }
          );
        }
        function Bt(t, e, i) {
          return t === e ? i : t === i ? e : t;
        }
        function zt(t, e, i) {
          var n,
            a,
            o,
            r,
            s = t.borderWidth,
            l = (function(t) {
              var e = t.borderSkipped,
                i = {};
              return e
                ? (t.horizontal
                    ? t.base > t.x && (e = Bt(e, "left", "right"))
                    : t.base < t.y && (e = Bt(e, "bottom", "top")),
                  (i[e] = !0),
                  i)
                : i;
            })(t);
          return (
            ht.isObject(s)
              ? ((n = +s.top || 0),
                (a = +s.right || 0),
                (o = +s.bottom || 0),
                (r = +s.left || 0))
              : (n = a = o = r = +s || 0),
            {
              t: l.top || n < 0 ? 0 : n > i ? i : n,
              r: l.right || a < 0 ? 0 : a > e ? e : a,
              b: l.bottom || o < 0 ? 0 : o > i ? i : o,
              l: l.left || r < 0 ? 0 : r > e ? e : r,
            }
          );
        }
        function Wt(t, e, i) {
          var n = null === e,
            a = null === i,
            o = !(!t || (n && a)) && Rt(t);
          return (
            o &&
            (n || (e >= o.left && e <= o.right)) &&
            (a || (i >= o.top && i <= o.bottom))
          );
        }
        lt._set("global", {
          elements: {
            rectangle: {
              backgroundColor: Lt,
              borderColor: Lt,
              borderSkipped: "bottom",
              borderWidth: 0,
            },
          },
        });
        var Nt = mt.extend({
            draw: function() {
              var t = this._chart.ctx,
                e = this._view,
                i = (function(t) {
                  var e = Rt(t),
                    i = e.right - e.left,
                    n = e.bottom - e.top,
                    a = zt(t, i / 2, n / 2);
                  return {
                    outer: { x: e.left, y: e.top, w: i, h: n },
                    inner: {
                      x: e.left + a.l,
                      y: e.top + a.t,
                      w: i - a.l - a.r,
                      h: n - a.t - a.b,
                    },
                  };
                })(e),
                n = i.outer,
                a = i.inner;
              (t.fillStyle = e.backgroundColor),
                t.fillRect(n.x, n.y, n.w, n.h),
                (n.w === a.w && n.h === a.h) ||
                  (t.save(),
                  t.beginPath(),
                  t.rect(n.x, n.y, n.w, n.h),
                  t.clip(),
                  (t.fillStyle = e.borderColor),
                  t.rect(a.x, a.y, a.w, a.h),
                  t.fill("evenodd"),
                  t.restore());
            },
            height: function() {
              var t = this._view;
              return t.base - t.y;
            },
            inRange: function(t, e) {
              return Wt(this._view, t, e);
            },
            inLabelRange: function(t, e) {
              var i = this._view;
              return Ot(i) ? Wt(i, t, null) : Wt(i, null, e);
            },
            inXRange: function(t) {
              return Wt(this._view, t, null);
            },
            inYRange: function(t) {
              return Wt(this._view, null, t);
            },
            getCenterPoint: function() {
              var t,
                e,
                i = this._view;
              return (
                Ot(i)
                  ? ((t = i.x), (e = (i.y + i.base) / 2))
                  : ((t = (i.x + i.base) / 2), (e = i.y)),
                { x: t, y: e }
              );
            },
            getArea: function() {
              var t = this._view;
              return Ot(t)
                ? t.width * Math.abs(t.y - t.base)
                : t.height * Math.abs(t.x - t.base);
            },
            tooltipPosition: function() {
              var t = this._view;
              return { x: t.x, y: t.y };
            },
          }),
          Vt = {},
          Et = Ct,
          Ht = It,
          jt = Ft,
          qt = Nt;
        (Vt.Arc = Et), (Vt.Line = Ht), (Vt.Point = jt), (Vt.Rectangle = qt);
        var Yt = ht.options.resolve;
        lt._set("bar", {
          hover: { mode: "label" },
          scales: {
            xAxes: [
              {
                type: "category",
                categoryPercentage: 0.8,
                barPercentage: 0.9,
                offset: !0,
                gridLines: { offsetGridLines: !0 },
              },
            ],
            yAxes: [{ type: "linear" }],
          },
        });
        var Ut = _t.extend({
            dataElementType: Vt.Rectangle,
            initialize: function() {
              var t;
              _t.prototype.initialize.apply(this, arguments),
                ((t = this.getMeta()).stack = this.getDataset().stack),
                (t.bar = !0);
            },
            update: function(t) {
              var e,
                i,
                n = this.getMeta().data;
              for (
                this._ruler = this.getRuler(), e = 0, i = n.length;
                e < i;
                ++e
              )
                this.updateElement(n[e], e, t);
            },
            updateElement: function(t, e, i) {
              var n = this,
                a = n.getMeta(),
                o = n.getDataset(),
                r = n._resolveElementOptions(t, e);
              (t._xScale = n.getScaleForId(a.xAxisID)),
                (t._yScale = n.getScaleForId(a.yAxisID)),
                (t._datasetIndex = n.index),
                (t._index = e),
                (t._model = {
                  backgroundColor: r.backgroundColor,
                  borderColor: r.borderColor,
                  borderSkipped: r.borderSkipped,
                  borderWidth: r.borderWidth,
                  datasetLabel: o.label,
                  label: n.chart.data.labels[e],
                }),
                n._updateElementGeometry(t, e, i),
                t.pivot();
            },
            _updateElementGeometry: function(t, e, i) {
              var n = this,
                a = t._model,
                o = n._getValueScale(),
                r = o.getBasePixel(),
                s = o.isHorizontal(),
                l = n._ruler || n.getRuler(),
                d = n.calculateBarValuePixels(n.index, e),
                u = n.calculateBarIndexPixels(n.index, e, l);
              (a.horizontal = s),
                (a.base = i ? r : d.base),
                (a.x = s ? (i ? r : d.head) : u.center),
                (a.y = s ? u.center : i ? r : d.head),
                (a.height = s ? u.size : void 0),
                (a.width = s ? void 0 : u.size);
            },
            _getStacks: function(t) {
              var e,
                i,
                n = this.chart,
                a = this._getIndexScale().options.stacked,
                o = void 0 === t ? n.data.datasets.length : t + 1,
                r = [];
              for (e = 0; e < o; ++e)
                (i = n.getDatasetMeta(e)).bar &&
                  n.isDatasetVisible(e) &&
                  (!1 === a ||
                    (!0 === a && -1 === r.indexOf(i.stack)) ||
                    (void 0 === a &&
                      (void 0 === i.stack || -1 === r.indexOf(i.stack)))) &&
                  r.push(i.stack);
              return r;
            },
            getStackCount: function() {
              return this._getStacks().length;
            },
            getStackIndex: function(t, e) {
              var i = this._getStacks(t),
                n = void 0 !== e ? i.indexOf(e) : -1;
              return -1 === n ? i.length - 1 : n;
            },
            getRuler: function() {
              var t,
                e,
                i = this._getIndexScale(),
                n = this.getStackCount(),
                a = this.index,
                o = i.isHorizontal(),
                r = o ? i.left : i.top,
                s = r + (o ? i.width : i.height),
                l = [];
              for (t = 0, e = this.getMeta().data.length; t < e; ++t)
                l.push(i.getPixelForValue(null, t, a));
              return {
                min: ht.isNullOrUndef(i.options.barThickness)
                  ? (function(t, e) {
                      var i,
                        n,
                        a,
                        o,
                        r = t.isHorizontal() ? t.width : t.height,
                        s = t.getTicks();
                      for (a = 1, o = e.length; a < o; ++a)
                        r = Math.min(r, Math.abs(e[a] - e[a - 1]));
                      for (a = 0, o = s.length; a < o; ++a)
                        (n = t.getPixelForTick(a)),
                          (r = a > 0 ? Math.min(r, n - i) : r),
                          (i = n);
                      return r;
                    })(i, l)
                  : -1,
                pixels: l,
                start: r,
                end: s,
                stackCount: n,
                scale: i,
              };
            },
            calculateBarValuePixels: function(t, e) {
              var i,
                n,
                a,
                o,
                r,
                s,
                l = this.chart,
                d = this.getMeta(),
                u = this._getValueScale(),
                h = u.isHorizontal(),
                c = l.data.datasets,
                f = +u.getRightValue(c[t].data[e]),
                g = u.options.minBarLength,
                p = u.options.stacked,
                m = d.stack,
                v = 0;
              if (p || (void 0 === p && void 0 !== m))
                for (i = 0; i < t; ++i)
                  (n = l.getDatasetMeta(i)).bar &&
                    n.stack === m &&
                    n.controller._getValueScaleId() === u.id &&
                    l.isDatasetVisible(i) &&
                    ((a = +u.getRightValue(c[i].data[e])),
                    ((f < 0 && a < 0) || (f >= 0 && a > 0)) && (v += a));
              return (
                (o = u.getPixelForValue(v)),
                (s = (r = u.getPixelForValue(v + f)) - o),
                void 0 !== g &&
                  Math.abs(s) < g &&
                  ((s = g),
                  (r = (f >= 0 && !h) || (f < 0 && h) ? o - g : o + g)),
                { size: s, base: o, head: r, center: r + s / 2 }
              );
            },
            calculateBarIndexPixels: function(t, e, i) {
              var n = i.scale.options,
                a =
                  "flex" === n.barThickness
                    ? (function(t, e, i) {
                        var n,
                          a = e.pixels,
                          o = a[t],
                          r = t > 0 ? a[t - 1] : null,
                          s = t < a.length - 1 ? a[t + 1] : null,
                          l = i.categoryPercentage;
                        return (
                          null === r &&
                            (r = o - (null === s ? e.end - e.start : s - o)),
                          null === s && (s = o + o - r),
                          (n = o - ((o - Math.min(r, s)) / 2) * l),
                          {
                            chunk: ((Math.abs(s - r) / 2) * l) / e.stackCount,
                            ratio: i.barPercentage,
                            start: n,
                          }
                        );
                      })(e, i, n)
                    : (function(t, e, i) {
                        var n,
                          a,
                          o = i.barThickness,
                          r = e.stackCount,
                          s = e.pixels[t];
                        return (
                          ht.isNullOrUndef(o)
                            ? ((n = e.min * i.categoryPercentage),
                              (a = i.barPercentage))
                            : ((n = o * r), (a = 1)),
                          { chunk: n / r, ratio: a, start: s - n / 2 }
                        );
                      })(e, i, n),
                o = this.getStackIndex(t, this.getMeta().stack),
                r = a.start + a.chunk * o + a.chunk / 2,
                s = Math.min(
                  ht.valueOrDefault(n.maxBarThickness, 1 / 0),
                  a.chunk * a.ratio
                );
              return { base: r - s / 2, head: r + s / 2, center: r, size: s };
            },
            draw: function() {
              var t = this.chart,
                e = this._getValueScale(),
                i = this.getMeta().data,
                n = this.getDataset(),
                a = i.length,
                o = 0;
              for (ht.canvas.clipArea(t.ctx, t.chartArea); o < a; ++o)
                isNaN(e.getRightValue(n.data[o])) || i[o].draw();
              ht.canvas.unclipArea(t.ctx);
            },
            _resolveElementOptions: function(t, e) {
              var i,
                n,
                a,
                o = this.chart,
                r = o.data.datasets[this.index],
                s = t.custom || {},
                l = o.options.elements.rectangle,
                d = {},
                u = {
                  chart: o,
                  dataIndex: e,
                  dataset: r,
                  datasetIndex: this.index,
                },
                h = [
                  "backgroundColor",
                  "borderColor",
                  "borderSkipped",
                  "borderWidth",
                ];
              for (i = 0, n = h.length; i < n; ++i)
                d[(a = h[i])] = Yt([s[a], r[a], l[a]], u, e);
              return d;
            },
          }),
          Xt = ht.valueOrDefault,
          Kt = ht.options.resolve;
        lt._set("bubble", {
          hover: { mode: "single" },
          scales: {
            xAxes: [{ type: "linear", position: "bottom", id: "x-axis-0" }],
            yAxes: [{ type: "linear", position: "left", id: "y-axis-0" }],
          },
          tooltips: {
            callbacks: {
              title: function() {
                return "";
              },
              label: function(t, e) {
                var i = e.datasets[t.datasetIndex].label || "",
                  n = e.datasets[t.datasetIndex].data[t.index];
                return (
                  i + ": (" + t.xLabel + ", " + t.yLabel + ", " + n.r + ")"
                );
              },
            },
          },
        });
        var Gt = _t.extend({
            dataElementType: Vt.Point,
            update: function(t) {
              var e = this,
                i = e.getMeta().data;
              ht.each(i, function(i, n) {
                e.updateElement(i, n, t);
              });
            },
            updateElement: function(t, e, i) {
              var n = this,
                a = n.getMeta(),
                r = t.custom || {},
                s = n.getScaleForId(a.xAxisID),
                l = n.getScaleForId(a.yAxisID),
                d = n._resolveElementOptions(t, e),
                u = n.getDataset().data[e],
                h = n.index,
                c = i
                  ? s.getPixelForDecimal(0.5)
                  : s.getPixelForValue("object" === o(u) ? u : NaN, e, h),
                f = i ? l.getBasePixel() : l.getPixelForValue(u, e, h);
              (t._xScale = s),
                (t._yScale = l),
                (t._options = d),
                (t._datasetIndex = h),
                (t._index = e),
                (t._model = {
                  backgroundColor: d.backgroundColor,
                  borderColor: d.borderColor,
                  borderWidth: d.borderWidth,
                  hitRadius: d.hitRadius,
                  pointStyle: d.pointStyle,
                  rotation: d.rotation,
                  radius: i ? 0 : d.radius,
                  skip: r.skip || isNaN(c) || isNaN(f),
                  x: c,
                  y: f,
                }),
                t.pivot();
            },
            setHoverStyle: function(t) {
              var e = t._model,
                i = t._options,
                n = ht.getHoverColor;
              (t.$previousStyle = {
                backgroundColor: e.backgroundColor,
                borderColor: e.borderColor,
                borderWidth: e.borderWidth,
                radius: e.radius,
              }),
                (e.backgroundColor = Xt(
                  i.hoverBackgroundColor,
                  n(i.backgroundColor)
                )),
                (e.borderColor = Xt(i.hoverBorderColor, n(i.borderColor))),
                (e.borderWidth = Xt(i.hoverBorderWidth, i.borderWidth)),
                (e.radius = i.radius + i.hoverRadius);
            },
            _resolveElementOptions: function(t, e) {
              var i,
                n,
                a,
                o = this.chart,
                r = o.data.datasets[this.index],
                s = t.custom || {},
                l = o.options.elements.point,
                d = r.data[e],
                u = {},
                h = {
                  chart: o,
                  dataIndex: e,
                  dataset: r,
                  datasetIndex: this.index,
                },
                c = [
                  "backgroundColor",
                  "borderColor",
                  "borderWidth",
                  "hoverBackgroundColor",
                  "hoverBorderColor",
                  "hoverBorderWidth",
                  "hoverRadius",
                  "hitRadius",
                  "pointStyle",
                  "rotation",
                ];
              for (i = 0, n = c.length; i < n; ++i)
                u[(a = c[i])] = Kt([s[a], r[a], l[a]], h, e);
              return (
                (u.radius = Kt(
                  [s.radius, d ? d.r : void 0, r.radius, l.radius],
                  h,
                  e
                )),
                u
              );
            },
          }),
          Zt = ht.options.resolve,
          $t = ht.valueOrDefault;
        lt._set("doughnut", {
          animation: { animateRotate: !0, animateScale: !1 },
          hover: { mode: "single" },
          legendCallback: function(t) {
            var e = [];
            e.push('<ul class="' + t.id + '-legend">');
            var i = t.data,
              n = i.datasets,
              a = i.labels;
            if (n.length)
              for (var o = 0; o < n[0].data.length; ++o)
                e.push(
                  '<li><span style="background-color:' +
                    n[0].backgroundColor[o] +
                    '"></span>'
                ),
                  a[o] && e.push(a[o]),
                  e.push("</li>");
            return e.push("</ul>"), e.join("");
          },
          legend: {
            labels: {
              generateLabels: function(t) {
                var e = t.data;
                return e.labels.length && e.datasets.length
                  ? e.labels.map(function(i, n) {
                      var a = t.getDatasetMeta(0),
                        o = e.datasets[0],
                        r = a.data[n],
                        s = (r && r.custom) || {},
                        l = t.options.elements.arc;
                      return {
                        text: i,
                        fillStyle: Zt(
                          [
                            s.backgroundColor,
                            o.backgroundColor,
                            l.backgroundColor,
                          ],
                          void 0,
                          n
                        ),
                        strokeStyle: Zt(
                          [s.borderColor, o.borderColor, l.borderColor],
                          void 0,
                          n
                        ),
                        lineWidth: Zt(
                          [s.borderWidth, o.borderWidth, l.borderWidth],
                          void 0,
                          n
                        ),
                        hidden: isNaN(o.data[n]) || a.data[n].hidden,
                        index: n,
                      };
                    })
                  : [];
              },
            },
            onClick: function(t, e) {
              var i,
                n,
                a,
                o = e.index,
                r = this.chart;
              for (i = 0, n = (r.data.datasets || []).length; i < n; ++i)
                (a = r.getDatasetMeta(i)).data[o] &&
                  (a.data[o].hidden = !a.data[o].hidden);
              r.update();
            },
          },
          cutoutPercentage: 50,
          rotation: -0.5 * Math.PI,
          circumference: 2 * Math.PI,
          tooltips: {
            callbacks: {
              title: function() {
                return "";
              },
              label: function(t, e) {
                var i = e.labels[t.index],
                  n = ": " + e.datasets[t.datasetIndex].data[t.index];
                return ht.isArray(i) ? ((i = i.slice())[0] += n) : (i += n), i;
              },
            },
          },
        });
        var Jt = _t.extend({
          dataElementType: Vt.Arc,
          linkScales: ht.noop,
          getRingIndex: function(t) {
            for (var e = 0, i = 0; i < t; ++i)
              this.chart.isDatasetVisible(i) && ++e;
            return e;
          },
          update: function(t) {
            var e,
              i,
              n = this,
              a = n.chart,
              o = a.chartArea,
              r = a.options,
              s = o.right - o.left,
              l = o.bottom - o.top,
              d = Math.min(s, l),
              u = { x: 0, y: 0 },
              h = n.getMeta(),
              c = h.data,
              f = r.cutoutPercentage,
              g = r.circumference,
              p = n._getRingWeight(n.index);
            if (g < 2 * Math.PI) {
              var m = r.rotation % (2 * Math.PI),
                v =
                  (m +=
                    2 * Math.PI * (m >= Math.PI ? -1 : m < -Math.PI ? 1 : 0)) +
                  g,
                b = { x: Math.cos(m), y: Math.sin(m) },
                x = { x: Math.cos(v), y: Math.sin(v) },
                y =
                  (m <= 0 && v >= 0) || (m <= 2 * Math.PI && 2 * Math.PI <= v),
                k =
                  (m <= 0.5 * Math.PI && 0.5 * Math.PI <= v) ||
                  (m <= 2.5 * Math.PI && 2.5 * Math.PI <= v),
                w =
                  (m <= -Math.PI && -Math.PI <= v) ||
                  (m <= Math.PI && Math.PI <= v),
                M =
                  (m <= 0.5 * -Math.PI && 0.5 * -Math.PI <= v) ||
                  (m <= 1.5 * Math.PI && 1.5 * Math.PI <= v),
                _ = f / 100,
                C = {
                  x: w
                    ? -1
                    : Math.min(
                        b.x * (b.x < 0 ? 1 : _),
                        x.x * (x.x < 0 ? 1 : _)
                      ),
                  y: M
                    ? -1
                    : Math.min(
                        b.y * (b.y < 0 ? 1 : _),
                        x.y * (x.y < 0 ? 1 : _)
                      ),
                },
                S = {
                  x: y
                    ? 1
                    : Math.max(
                        b.x * (b.x > 0 ? 1 : _),
                        x.x * (x.x > 0 ? 1 : _)
                      ),
                  y: k
                    ? 1
                    : Math.max(
                        b.y * (b.y > 0 ? 1 : _),
                        x.y * (x.y > 0 ? 1 : _)
                      ),
                },
                P = { width: 0.5 * (S.x - C.x), height: 0.5 * (S.y - C.y) };
              (d = Math.min(s / P.width, l / P.height)),
                (u = { x: -0.5 * (S.x + C.x), y: -0.5 * (S.y + C.y) });
            }
            for (e = 0, i = c.length; e < i; ++e)
              c[e]._options = n._resolveElementOptions(c[e], e);
            for (
              a.borderWidth = n.getMaxBorderWidth(),
                a.outerRadius = Math.max((d - a.borderWidth) / 2, 0),
                a.innerRadius = Math.max(f ? (a.outerRadius / 100) * f : 0, 0),
                a.radiusLength =
                  (a.outerRadius - a.innerRadius) /
                  (n._getVisibleDatasetWeightTotal() || 1),
                a.offsetX = u.x * a.outerRadius,
                a.offsetY = u.y * a.outerRadius,
                h.total = n.calculateTotal(),
                n.outerRadius =
                  a.outerRadius -
                  a.radiusLength * n._getRingWeightOffset(n.index),
                n.innerRadius = Math.max(n.outerRadius - a.radiusLength * p, 0),
                e = 0,
                i = c.length;
              e < i;
              ++e
            )
              n.updateElement(c[e], e, t);
          },
          updateElement: function(t, e, i) {
            var n = this,
              a = n.chart,
              o = a.chartArea,
              r = a.options,
              s = r.animation,
              l = (o.left + o.right) / 2,
              d = (o.top + o.bottom) / 2,
              u = r.rotation,
              h = r.rotation,
              c = n.getDataset(),
              f =
                i && s.animateRotate
                  ? 0
                  : t.hidden
                  ? 0
                  : n.calculateCircumference(c.data[e]) *
                    (r.circumference / (2 * Math.PI)),
              g = i && s.animateScale ? 0 : n.innerRadius,
              p = i && s.animateScale ? 0 : n.outerRadius,
              m = t._options || {};
            ht.extend(t, {
              _datasetIndex: n.index,
              _index: e,
              _model: {
                backgroundColor: m.backgroundColor,
                borderColor: m.borderColor,
                borderWidth: m.borderWidth,
                borderAlign: m.borderAlign,
                x: l + a.offsetX,
                y: d + a.offsetY,
                startAngle: u,
                endAngle: h,
                circumference: f,
                outerRadius: p,
                innerRadius: g,
                label: ht.valueAtIndexOrDefault(c.label, e, a.data.labels[e]),
              },
            });
            var v = t._model;
            (i && s.animateRotate) ||
              ((v.startAngle =
                0 === e ? r.rotation : n.getMeta().data[e - 1]._model.endAngle),
              (v.endAngle = v.startAngle + v.circumference)),
              t.pivot();
          },
          calculateTotal: function() {
            var t,
              e = this.getDataset(),
              i = this.getMeta(),
              n = 0;
            return (
              ht.each(i.data, function(i, a) {
                (t = e.data[a]), isNaN(t) || i.hidden || (n += Math.abs(t));
              }),
              n
            );
          },
          calculateCircumference: function(t) {
            var e = this.getMeta().total;
            return e > 0 && !isNaN(t) ? 2 * Math.PI * (Math.abs(t) / e) : 0;
          },
          getMaxBorderWidth: function(t) {
            var e,
              i,
              n,
              a,
              o,
              r,
              s,
              l,
              d = 0,
              u = this.chart;
            if (!t)
              for (e = 0, i = u.data.datasets.length; e < i; ++e)
                if (u.isDatasetVisible(e)) {
                  (t = (n = u.getDatasetMeta(e)).data),
                    e !== this.index && (o = n.controller);
                  break;
                }
            if (!t) return 0;
            for (e = 0, i = t.length; e < i; ++e)
              (a = t[e]),
                "inner" !==
                  (r = o ? o._resolveElementOptions(a, e) : a._options)
                    .borderAlign &&
                  ((s = r.borderWidth),
                  (d = (l = r.hoverBorderWidth) > (d = s > d ? s : d) ? l : d));
            return d;
          },
          setHoverStyle: function(t) {
            var e = t._model,
              i = t._options,
              n = ht.getHoverColor;
            (t.$previousStyle = {
              backgroundColor: e.backgroundColor,
              borderColor: e.borderColor,
              borderWidth: e.borderWidth,
            }),
              (e.backgroundColor = $t(
                i.hoverBackgroundColor,
                n(i.backgroundColor)
              )),
              (e.borderColor = $t(i.hoverBorderColor, n(i.borderColor))),
              (e.borderWidth = $t(i.hoverBorderWidth, i.borderWidth));
          },
          _resolveElementOptions: function(t, e) {
            var i,
              n,
              a,
              o = this.chart,
              r = this.getDataset(),
              s = t.custom || {},
              l = o.options.elements.arc,
              d = {},
              u = {
                chart: o,
                dataIndex: e,
                dataset: r,
                datasetIndex: this.index,
              },
              h = [
                "backgroundColor",
                "borderColor",
                "borderWidth",
                "borderAlign",
                "hoverBackgroundColor",
                "hoverBorderColor",
                "hoverBorderWidth",
              ];
            for (i = 0, n = h.length; i < n; ++i)
              d[(a = h[i])] = Zt([s[a], r[a], l[a]], u, e);
            return d;
          },
          _getRingWeightOffset: function(t) {
            for (var e = 0, i = 0; i < t; ++i)
              this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i));
            return e;
          },
          _getRingWeight: function(t) {
            return Math.max($t(this.chart.data.datasets[t].weight, 1), 0);
          },
          _getVisibleDatasetWeightTotal: function() {
            return this._getRingWeightOffset(this.chart.data.datasets.length);
          },
        });
        lt._set("horizontalBar", {
          hover: { mode: "index", axis: "y" },
          scales: {
            xAxes: [{ type: "linear", position: "bottom" }],
            yAxes: [
              {
                type: "category",
                position: "left",
                categoryPercentage: 0.8,
                barPercentage: 0.9,
                offset: !0,
                gridLines: { offsetGridLines: !0 },
              },
            ],
          },
          elements: { rectangle: { borderSkipped: "left" } },
          tooltips: { mode: "index", axis: "y" },
        });
        var Qt = Ut.extend({
            _getValueScaleId: function() {
              return this.getMeta().xAxisID;
            },
            _getIndexScaleId: function() {
              return this.getMeta().yAxisID;
            },
          }),
          te = ht.valueOrDefault,
          ee = ht.options.resolve,
          ie = ht.canvas._isPointInArea;
        function ne(t, e) {
          return te(t.showLine, e.showLines);
        }
        lt._set("line", {
          showLines: !0,
          spanGaps: !1,
          hover: { mode: "label" },
          scales: {
            xAxes: [{ type: "category", id: "x-axis-0" }],
            yAxes: [{ type: "linear", id: "y-axis-0" }],
          },
        });
        var ae = _t.extend({
            datasetElementType: Vt.Line,
            dataElementType: Vt.Point,
            update: function(t) {
              var e,
                i,
                n = this,
                a = n.getMeta(),
                o = a.dataset,
                r = a.data || [],
                s = n.getScaleForId(a.yAxisID),
                l = n.getDataset(),
                d = ne(l, n.chart.options);
              for (
                d &&
                  (void 0 !== l.tension &&
                    void 0 === l.lineTension &&
                    (l.lineTension = l.tension),
                  (o._scale = s),
                  (o._datasetIndex = n.index),
                  (o._children = r),
                  (o._model = n._resolveLineOptions(o)),
                  o.pivot()),
                  e = 0,
                  i = r.length;
                e < i;
                ++e
              )
                n.updateElement(r[e], e, t);
              for (
                d && 0 !== o._model.tension && n.updateBezierControlPoints(),
                  e = 0,
                  i = r.length;
                e < i;
                ++e
              )
                r[e].pivot();
            },
            updateElement: function(t, e, i) {
              var n,
                a,
                r = this,
                s = r.getMeta(),
                l = t.custom || {},
                d = r.getDataset(),
                u = r.index,
                h = d.data[e],
                c = r.getScaleForId(s.yAxisID),
                f = r.getScaleForId(s.xAxisID),
                g = s.dataset._model,
                p = r._resolvePointOptions(t, e);
              (n = f.getPixelForValue("object" === o(h) ? h : NaN, e, u)),
                (a = i ? c.getBasePixel() : r.calculatePointY(h, e, u)),
                (t._xScale = f),
                (t._yScale = c),
                (t._options = p),
                (t._datasetIndex = u),
                (t._index = e),
                (t._model = {
                  x: n,
                  y: a,
                  skip: l.skip || isNaN(n) || isNaN(a),
                  radius: p.radius,
                  pointStyle: p.pointStyle,
                  rotation: p.rotation,
                  backgroundColor: p.backgroundColor,
                  borderColor: p.borderColor,
                  borderWidth: p.borderWidth,
                  tension: te(l.tension, g ? g.tension : 0),
                  steppedLine: !!g && g.steppedLine,
                  hitRadius: p.hitRadius,
                });
            },
            _resolvePointOptions: function(t, e) {
              var i,
                n,
                a,
                o = this.chart,
                r = o.data.datasets[this.index],
                s = t.custom || {},
                l = o.options.elements.point,
                d = {},
                u = {
                  chart: o,
                  dataIndex: e,
                  dataset: r,
                  datasetIndex: this.index,
                },
                h = {
                  backgroundColor: "pointBackgroundColor",
                  borderColor: "pointBorderColor",
                  borderWidth: "pointBorderWidth",
                  hitRadius: "pointHitRadius",
                  hoverBackgroundColor: "pointHoverBackgroundColor",
                  hoverBorderColor: "pointHoverBorderColor",
                  hoverBorderWidth: "pointHoverBorderWidth",
                  hoverRadius: "pointHoverRadius",
                  pointStyle: "pointStyle",
                  radius: "pointRadius",
                  rotation: "pointRotation",
                },
                c = Object.keys(h);
              for (i = 0, n = c.length; i < n; ++i)
                d[(a = c[i])] = ee([s[a], r[h[a]], r[a], l[a]], u, e);
              return d;
            },
            _resolveLineOptions: function(t) {
              var e,
                i,
                n,
                a = this.chart,
                o = a.data.datasets[this.index],
                r = t.custom || {},
                s = a.options,
                l = s.elements.line,
                d = {},
                u = [
                  "backgroundColor",
                  "borderWidth",
                  "borderColor",
                  "borderCapStyle",
                  "borderDash",
                  "borderDashOffset",
                  "borderJoinStyle",
                  "fill",
                  "cubicInterpolationMode",
                ];
              for (e = 0, i = u.length; e < i; ++e)
                d[(n = u[e])] = ee([r[n], o[n], l[n]]);
              return (
                (d.spanGaps = te(o.spanGaps, s.spanGaps)),
                (d.tension = te(o.lineTension, l.tension)),
                (d.steppedLine = ee([r.steppedLine, o.steppedLine, l.stepped])),
                d
              );
            },
            calculatePointY: function(t, e, i) {
              var n,
                a,
                o,
                r = this.chart,
                s = this.getMeta(),
                l = this.getScaleForId(s.yAxisID),
                d = 0,
                u = 0;
              if (l.options.stacked) {
                for (n = 0; n < i; n++)
                  if (
                    ((a = r.data.datasets[n]),
                    "line" === (o = r.getDatasetMeta(n)).type &&
                      o.yAxisID === l.id &&
                      r.isDatasetVisible(n))
                  ) {
                    var h = Number(l.getRightValue(a.data[e]));
                    h < 0 ? (u += h || 0) : (d += h || 0);
                  }
                var c = Number(l.getRightValue(t));
                return c < 0
                  ? l.getPixelForValue(u + c)
                  : l.getPixelForValue(d + c);
              }
              return l.getPixelForValue(t);
            },
            updateBezierControlPoints: function() {
              var t,
                e,
                i,
                n,
                a = this.chart,
                o = this.getMeta(),
                r = o.dataset._model,
                s = a.chartArea,
                l = o.data || [];
              function d(t, e, i) {
                return Math.max(Math.min(t, i), e);
              }
              if (
                (r.spanGaps &&
                  (l = l.filter(function(t) {
                    return !t._model.skip;
                  })),
                "monotone" === r.cubicInterpolationMode)
              )
                ht.splineCurveMonotone(l);
              else
                for (t = 0, e = l.length; t < e; ++t)
                  (i = l[t]._model),
                    (n = ht.splineCurve(
                      ht.previousItem(l, t)._model,
                      i,
                      ht.nextItem(l, t)._model,
                      r.tension
                    )),
                    (i.controlPointPreviousX = n.previous.x),
                    (i.controlPointPreviousY = n.previous.y),
                    (i.controlPointNextX = n.next.x),
                    (i.controlPointNextY = n.next.y);
              if (a.options.elements.line.capBezierPoints)
                for (t = 0, e = l.length; t < e; ++t)
                  (i = l[t]._model),
                    ie(i, s) &&
                      (t > 0 &&
                        ie(l[t - 1]._model, s) &&
                        ((i.controlPointPreviousX = d(
                          i.controlPointPreviousX,
                          s.left,
                          s.right
                        )),
                        (i.controlPointPreviousY = d(
                          i.controlPointPreviousY,
                          s.top,
                          s.bottom
                        ))),
                      t < l.length - 1 &&
                        ie(l[t + 1]._model, s) &&
                        ((i.controlPointNextX = d(
                          i.controlPointNextX,
                          s.left,
                          s.right
                        )),
                        (i.controlPointNextY = d(
                          i.controlPointNextY,
                          s.top,
                          s.bottom
                        ))));
            },
            draw: function() {
              var t,
                e = this.chart,
                i = this.getMeta(),
                n = i.data || [],
                a = e.chartArea,
                o = n.length,
                r = 0;
              for (
                ne(this.getDataset(), e.options) &&
                ((t = (i.dataset._model.borderWidth || 0) / 2),
                ht.canvas.clipArea(e.ctx, {
                  left: a.left,
                  right: a.right,
                  top: a.top - t,
                  bottom: a.bottom + t,
                }),
                i.dataset.draw(),
                ht.canvas.unclipArea(e.ctx));
                r < o;
                ++r
              )
                n[r].draw(a);
            },
            setHoverStyle: function(t) {
              var e = t._model,
                i = t._options,
                n = ht.getHoverColor;
              (t.$previousStyle = {
                backgroundColor: e.backgroundColor,
                borderColor: e.borderColor,
                borderWidth: e.borderWidth,
                radius: e.radius,
              }),
                (e.backgroundColor = te(
                  i.hoverBackgroundColor,
                  n(i.backgroundColor)
                )),
                (e.borderColor = te(i.hoverBorderColor, n(i.borderColor))),
                (e.borderWidth = te(i.hoverBorderWidth, i.borderWidth)),
                (e.radius = te(i.hoverRadius, i.radius));
            },
          }),
          oe = ht.options.resolve;
        lt._set("polarArea", {
          scale: {
            type: "radialLinear",
            angleLines: { display: !1 },
            gridLines: { circular: !0 },
            pointLabels: { display: !1 },
            ticks: { beginAtZero: !0 },
          },
          animation: { animateRotate: !0, animateScale: !0 },
          startAngle: -0.5 * Math.PI,
          legendCallback: function(t) {
            var e = [];
            e.push('<ul class="' + t.id + '-legend">');
            var i = t.data,
              n = i.datasets,
              a = i.labels;
            if (n.length)
              for (var o = 0; o < n[0].data.length; ++o)
                e.push(
                  '<li><span style="background-color:' +
                    n[0].backgroundColor[o] +
                    '"></span>'
                ),
                  a[o] && e.push(a[o]),
                  e.push("</li>");
            return e.push("</ul>"), e.join("");
          },
          legend: {
            labels: {
              generateLabels: function(t) {
                var e = t.data;
                return e.labels.length && e.datasets.length
                  ? e.labels.map(function(i, n) {
                      var a = t.getDatasetMeta(0),
                        o = e.datasets[0],
                        r = a.data[n].custom || {},
                        s = t.options.elements.arc;
                      return {
                        text: i,
                        fillStyle: oe(
                          [
                            r.backgroundColor,
                            o.backgroundColor,
                            s.backgroundColor,
                          ],
                          void 0,
                          n
                        ),
                        strokeStyle: oe(
                          [r.borderColor, o.borderColor, s.borderColor],
                          void 0,
                          n
                        ),
                        lineWidth: oe(
                          [r.borderWidth, o.borderWidth, s.borderWidth],
                          void 0,
                          n
                        ),
                        hidden: isNaN(o.data[n]) || a.data[n].hidden,
                        index: n,
                      };
                    })
                  : [];
              },
            },
            onClick: function(t, e) {
              var i,
                n,
                a,
                o = e.index,
                r = this.chart;
              for (i = 0, n = (r.data.datasets || []).length; i < n; ++i)
                (a = r.getDatasetMeta(i)).data[o].hidden = !a.data[o].hidden;
              r.update();
            },
          },
          tooltips: {
            callbacks: {
              title: function() {
                return "";
              },
              label: function(t, e) {
                return e.labels[t.index] + ": " + t.yLabel;
              },
            },
          },
        });
        var re = _t.extend({
          dataElementType: Vt.Arc,
          linkScales: ht.noop,
          update: function(t) {
            var e,
              i,
              n,
              a = this,
              o = a.getDataset(),
              r = a.getMeta(),
              s = a.chart.options.startAngle || 0,
              l = (a._starts = []),
              d = (a._angles = []),
              u = r.data;
            for (
              a._updateRadius(),
                r.count = a.countVisibleElements(),
                e = 0,
                i = o.data.length;
              e < i;
              e++
            )
              (l[e] = s), (n = a._computeAngle(e)), (d[e] = n), (s += n);
            for (e = 0, i = u.length; e < i; ++e)
              (u[e]._options = a._resolveElementOptions(u[e], e)),
                a.updateElement(u[e], e, t);
          },
          _updateRadius: function() {
            var t = this,
              e = t.chart,
              i = e.chartArea,
              n = e.options,
              a = Math.min(i.right - i.left, i.bottom - i.top);
            (e.outerRadius = Math.max(a / 2, 0)),
              (e.innerRadius = Math.max(
                n.cutoutPercentage
                  ? (e.outerRadius / 100) * n.cutoutPercentage
                  : 1,
                0
              )),
              (e.radiusLength =
                (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount()),
              (t.outerRadius = e.outerRadius - e.radiusLength * t.index),
              (t.innerRadius = t.outerRadius - e.radiusLength);
          },
          updateElement: function(t, e, i) {
            var n = this,
              a = n.chart,
              o = n.getDataset(),
              r = a.options,
              s = r.animation,
              l = a.scale,
              d = a.data.labels,
              u = l.xCenter,
              h = l.yCenter,
              c = r.startAngle,
              f = t.hidden ? 0 : l.getDistanceFromCenterForValue(o.data[e]),
              g = n._starts[e],
              p = g + (t.hidden ? 0 : n._angles[e]),
              m = s.animateScale
                ? 0
                : l.getDistanceFromCenterForValue(o.data[e]),
              v = t._options || {};
            ht.extend(t, {
              _datasetIndex: n.index,
              _index: e,
              _scale: l,
              _model: {
                backgroundColor: v.backgroundColor,
                borderColor: v.borderColor,
                borderWidth: v.borderWidth,
                borderAlign: v.borderAlign,
                x: u,
                y: h,
                innerRadius: 0,
                outerRadius: i ? m : f,
                startAngle: i && s.animateRotate ? c : g,
                endAngle: i && s.animateRotate ? c : p,
                label: ht.valueAtIndexOrDefault(d, e, d[e]),
              },
            }),
              t.pivot();
          },
          countVisibleElements: function() {
            var t = this.getDataset(),
              e = this.getMeta(),
              i = 0;
            return (
              ht.each(e.data, function(e, n) {
                isNaN(t.data[n]) || e.hidden || i++;
              }),
              i
            );
          },
          setHoverStyle: function(t) {
            var e = t._model,
              i = t._options,
              n = ht.getHoverColor,
              a = ht.valueOrDefault;
            (t.$previousStyle = {
              backgroundColor: e.backgroundColor,
              borderColor: e.borderColor,
              borderWidth: e.borderWidth,
            }),
              (e.backgroundColor = a(
                i.hoverBackgroundColor,
                n(i.backgroundColor)
              )),
              (e.borderColor = a(i.hoverBorderColor, n(i.borderColor))),
              (e.borderWidth = a(i.hoverBorderWidth, i.borderWidth));
          },
          _resolveElementOptions: function(t, e) {
            var i,
              n,
              a,
              o = this.chart,
              r = this.getDataset(),
              s = t.custom || {},
              l = o.options.elements.arc,
              d = {},
              u = {
                chart: o,
                dataIndex: e,
                dataset: r,
                datasetIndex: this.index,
              },
              h = [
                "backgroundColor",
                "borderColor",
                "borderWidth",
                "borderAlign",
                "hoverBackgroundColor",
                "hoverBorderColor",
                "hoverBorderWidth",
              ];
            for (i = 0, n = h.length; i < n; ++i)
              d[(a = h[i])] = oe([s[a], r[a], l[a]], u, e);
            return d;
          },
          _computeAngle: function(t) {
            var e = this,
              i = this.getMeta().count,
              n = e.getDataset(),
              a = e.getMeta();
            if (isNaN(n.data[t]) || a.data[t].hidden) return 0;
            var o = {
              chart: e.chart,
              dataIndex: t,
              dataset: n,
              datasetIndex: e.index,
            };
            return oe(
              [e.chart.options.elements.arc.angle, (2 * Math.PI) / i],
              o,
              t
            );
          },
        });
        lt._set("pie", ht.clone(lt.doughnut)),
          lt._set("pie", { cutoutPercentage: 0 });
        var se = Jt,
          le = ht.valueOrDefault,
          de = ht.options.resolve;
        lt._set("radar", {
          scale: { type: "radialLinear" },
          elements: { line: { tension: 0 } },
        });
        var ue = _t.extend({
          datasetElementType: Vt.Line,
          dataElementType: Vt.Point,
          linkScales: ht.noop,
          update: function(t) {
            var e,
              i,
              n = this,
              a = n.getMeta(),
              o = a.dataset,
              r = a.data || [],
              s = n.chart.scale,
              l = n.getDataset();
            for (
              void 0 !== l.tension &&
                void 0 === l.lineTension &&
                (l.lineTension = l.tension),
                o._scale = s,
                o._datasetIndex = n.index,
                o._children = r,
                o._loop = !0,
                o._model = n._resolveLineOptions(o),
                o.pivot(),
                e = 0,
                i = r.length;
              e < i;
              ++e
            )
              n.updateElement(r[e], e, t);
            for (n.updateBezierControlPoints(), e = 0, i = r.length; e < i; ++e)
              r[e].pivot();
          },
          updateElement: function(t, e, i) {
            var n = this,
              a = t.custom || {},
              o = n.getDataset(),
              r = n.chart.scale,
              s = r.getPointPositionForValue(e, o.data[e]),
              l = n._resolvePointOptions(t, e),
              d = n.getMeta().dataset._model,
              u = i ? r.xCenter : s.x,
              h = i ? r.yCenter : s.y;
            (t._scale = r),
              (t._options = l),
              (t._datasetIndex = n.index),
              (t._index = e),
              (t._model = {
                x: u,
                y: h,
                skip: a.skip || isNaN(u) || isNaN(h),
                radius: l.radius,
                pointStyle: l.pointStyle,
                rotation: l.rotation,
                backgroundColor: l.backgroundColor,
                borderColor: l.borderColor,
                borderWidth: l.borderWidth,
                tension: le(a.tension, d ? d.tension : 0),
                hitRadius: l.hitRadius,
              });
          },
          _resolvePointOptions: function(t, e) {
            var i,
              n,
              a,
              o = this.chart,
              r = o.data.datasets[this.index],
              s = t.custom || {},
              l = o.options.elements.point,
              d = {},
              u = {
                chart: o,
                dataIndex: e,
                dataset: r,
                datasetIndex: this.index,
              },
              h = {
                backgroundColor: "pointBackgroundColor",
                borderColor: "pointBorderColor",
                borderWidth: "pointBorderWidth",
                hitRadius: "pointHitRadius",
                hoverBackgroundColor: "pointHoverBackgroundColor",
                hoverBorderColor: "pointHoverBorderColor",
                hoverBorderWidth: "pointHoverBorderWidth",
                hoverRadius: "pointHoverRadius",
                pointStyle: "pointStyle",
                radius: "pointRadius",
                rotation: "pointRotation",
              },
              c = Object.keys(h);
            for (i = 0, n = c.length; i < n; ++i)
              d[(a = c[i])] = de([s[a], r[h[a]], r[a], l[a]], u, e);
            return d;
          },
          _resolveLineOptions: function(t) {
            var e,
              i,
              n,
              a = this.chart,
              o = a.data.datasets[this.index],
              r = t.custom || {},
              s = a.options.elements.line,
              l = {},
              d = [
                "backgroundColor",
                "borderWidth",
                "borderColor",
                "borderCapStyle",
                "borderDash",
                "borderDashOffset",
                "borderJoinStyle",
                "fill",
              ];
            for (e = 0, i = d.length; e < i; ++e)
              l[(n = d[e])] = de([r[n], o[n], s[n]]);
            return (l.tension = le(o.lineTension, s.tension)), l;
          },
          updateBezierControlPoints: function() {
            var t,
              e,
              i,
              n,
              a = this.getMeta(),
              o = this.chart.chartArea,
              r = a.data || [];
            function s(t, e, i) {
              return Math.max(Math.min(t, i), e);
            }
            for (t = 0, e = r.length; t < e; ++t)
              (i = r[t]._model),
                (n = ht.splineCurve(
                  ht.previousItem(r, t, !0)._model,
                  i,
                  ht.nextItem(r, t, !0)._model,
                  i.tension
                )),
                (i.controlPointPreviousX = s(n.previous.x, o.left, o.right)),
                (i.controlPointPreviousY = s(n.previous.y, o.top, o.bottom)),
                (i.controlPointNextX = s(n.next.x, o.left, o.right)),
                (i.controlPointNextY = s(n.next.y, o.top, o.bottom));
          },
          setHoverStyle: function(t) {
            var e = t._model,
              i = t._options,
              n = ht.getHoverColor;
            (t.$previousStyle = {
              backgroundColor: e.backgroundColor,
              borderColor: e.borderColor,
              borderWidth: e.borderWidth,
              radius: e.radius,
            }),
              (e.backgroundColor = le(
                i.hoverBackgroundColor,
                n(i.backgroundColor)
              )),
              (e.borderColor = le(i.hoverBorderColor, n(i.borderColor))),
              (e.borderWidth = le(i.hoverBorderWidth, i.borderWidth)),
              (e.radius = le(i.hoverRadius, i.radius));
          },
        });
        lt._set("scatter", {
          hover: { mode: "single" },
          scales: {
            xAxes: [{ id: "x-axis-1", type: "linear", position: "bottom" }],
            yAxes: [{ id: "y-axis-1", type: "linear", position: "left" }],
          },
          showLines: !1,
          tooltips: {
            callbacks: {
              title: function() {
                return "";
              },
              label: function(t) {
                return "(" + t.xLabel + ", " + t.yLabel + ")";
              },
            },
          },
        });
        var he = {
          bar: Ut,
          bubble: Gt,
          doughnut: Jt,
          horizontalBar: Qt,
          line: ae,
          polarArea: re,
          pie: se,
          radar: ue,
          scatter: ae,
        };
        function ce(t, e) {
          return t.native ? { x: t.x, y: t.y } : ht.getRelativePosition(t, e);
        }
        function fe(t, e) {
          var i, n, a, o, r;
          for (n = 0, o = t.data.datasets.length; n < o; ++n)
            if (t.isDatasetVisible(n))
              for (
                a = 0, r = (i = t.getDatasetMeta(n)).data.length;
                a < r;
                ++a
              ) {
                var s = i.data[a];
                s._view.skip || e(s);
              }
        }
        function ge(t, e) {
          var i = [];
          return (
            fe(t, function(t) {
              t.inRange(e.x, e.y) && i.push(t);
            }),
            i
          );
        }
        function pe(t, e, i, n) {
          var a = Number.POSITIVE_INFINITY,
            o = [];
          return (
            fe(t, function(t) {
              if (!i || t.inRange(e.x, e.y)) {
                var r = t.getCenterPoint(),
                  s = n(e, r);
                s < a ? ((o = [t]), (a = s)) : s === a && o.push(t);
              }
            }),
            o
          );
        }
        function me(t) {
          var e = -1 !== t.indexOf("x"),
            i = -1 !== t.indexOf("y");
          return function(t, n) {
            var a = e ? Math.abs(t.x - n.x) : 0,
              o = i ? Math.abs(t.y - n.y) : 0;
            return Math.sqrt(Math.pow(a, 2) + Math.pow(o, 2));
          };
        }
        function ve(t, e, i) {
          var n = ce(e, t);
          i.axis = i.axis || "x";
          var a = me(i.axis),
            o = i.intersect ? ge(t, n) : pe(t, n, !1, a),
            r = [];
          return o.length
            ? (t.data.datasets.forEach(function(e, i) {
                if (t.isDatasetVisible(i)) {
                  var n = t.getDatasetMeta(i).data[o[0]._index];
                  n && !n._view.skip && r.push(n);
                }
              }),
              r)
            : [];
        }
        var be = {
          modes: {
            single: function(t, e) {
              var i = ce(e, t),
                n = [];
              return (
                fe(t, function(t) {
                  if (t.inRange(i.x, i.y)) return n.push(t), n;
                }),
                n.slice(0, 1)
              );
            },
            label: ve,
            index: ve,
            dataset: function(t, e, i) {
              var n = ce(e, t);
              i.axis = i.axis || "xy";
              var a = me(i.axis),
                o = i.intersect ? ge(t, n) : pe(t, n, !1, a);
              return (
                o.length > 0 && (o = t.getDatasetMeta(o[0]._datasetIndex).data),
                o
              );
            },
            "x-axis": function(t, e) {
              return ve(t, e, { intersect: !1 });
            },
            point: function(t, e) {
              return ge(t, ce(e, t));
            },
            nearest: function(t, e, i) {
              var n = ce(e, t);
              i.axis = i.axis || "xy";
              var a = me(i.axis);
              return pe(t, n, i.intersect, a);
            },
            x: function(t, e, i) {
              var n = ce(e, t),
                a = [],
                o = !1;
              return (
                fe(t, function(t) {
                  t.inXRange(n.x) && a.push(t), t.inRange(n.x, n.y) && (o = !0);
                }),
                i.intersect && !o && (a = []),
                a
              );
            },
            y: function(t, e, i) {
              var n = ce(e, t),
                a = [],
                o = !1;
              return (
                fe(t, function(t) {
                  t.inYRange(n.y) && a.push(t), t.inRange(n.x, n.y) && (o = !0);
                }),
                i.intersect && !o && (a = []),
                a
              );
            },
          },
        };
        function xe(t, e) {
          return ht.where(t, function(t) {
            return t.position === e;
          });
        }
        function ye(t, e) {
          t.forEach(function(t, e) {
            return (t._tmpIndex_ = e), t;
          }),
            t.sort(function(t, i) {
              var n = e ? i : t,
                a = e ? t : i;
              return n.weight === a.weight
                ? n._tmpIndex_ - a._tmpIndex_
                : n.weight - a.weight;
            }),
            t.forEach(function(t) {
              delete t._tmpIndex_;
            });
        }
        function ke(t, e) {
          ht.each(t, function(t) {
            e[t.position] += t.isHorizontal() ? t.height : t.width;
          });
        }
        lt._set("global", {
          layout: { padding: { top: 0, right: 0, bottom: 0, left: 0 } },
        });
        var we,
          Me = {
            defaults: {},
            addBox: function(t, e) {
              t.boxes || (t.boxes = []),
                (e.fullWidth = e.fullWidth || !1),
                (e.position = e.position || "top"),
                (e.weight = e.weight || 0),
                t.boxes.push(e);
            },
            removeBox: function(t, e) {
              var i = t.boxes ? t.boxes.indexOf(e) : -1;
              -1 !== i && t.boxes.splice(i, 1);
            },
            configure: function(t, e, i) {
              for (
                var n,
                  a = ["fullWidth", "position", "weight"],
                  o = a.length,
                  r = 0;
                r < o;
                ++r
              )
                (n = a[r]), i.hasOwnProperty(n) && (e[n] = i[n]);
            },
            update: function(t, e, i) {
              if (t) {
                var n = t.options.layout || {},
                  a = ht.options.toPadding(n.padding),
                  o = a.left,
                  r = a.right,
                  s = a.top,
                  l = a.bottom,
                  d = xe(t.boxes, "left"),
                  u = xe(t.boxes, "right"),
                  h = xe(t.boxes, "top"),
                  c = xe(t.boxes, "bottom"),
                  f = xe(t.boxes, "chartArea");
                ye(d, !0), ye(u, !1), ye(h, !0), ye(c, !1);
                var g,
                  p = d.concat(u),
                  m = h.concat(c),
                  v = p.concat(m),
                  b = e - o - r,
                  x = i - s - l,
                  y = (e - b / 2) / p.length,
                  k = b,
                  w = x,
                  M = { top: s, left: o, bottom: l, right: r },
                  _ = [];
                ht.each(v, function(t) {
                  var e,
                    i = t.isHorizontal();
                  i
                    ? ((e = t.update(t.fullWidth ? b : k, x / 2)),
                      (w -= e.height))
                    : ((e = t.update(y, w)), (k -= e.width)),
                    _.push({ horizontal: i, width: e.width, box: t });
                }),
                  (g = (function(t) {
                    var e = 0,
                      i = 0,
                      n = 0,
                      a = 0;
                    return (
                      ht.each(t, function(t) {
                        if (t.getPadding) {
                          var o = t.getPadding();
                          (e = Math.max(e, o.top)),
                            (i = Math.max(i, o.left)),
                            (n = Math.max(n, o.bottom)),
                            (a = Math.max(a, o.right));
                        }
                      }),
                      { top: e, left: i, bottom: n, right: a }
                    );
                  })(v)),
                  ht.each(p, T),
                  ke(p, M),
                  ht.each(m, T),
                  ke(m, M),
                  ht.each(p, function(t) {
                    var e = ht.findNextWhere(_, function(e) {
                        return e.box === t;
                      }),
                      i = { left: 0, right: 0, top: M.top, bottom: M.bottom };
                    e && t.update(e.width, w, i);
                  }),
                  ke(v, (M = { top: s, left: o, bottom: l, right: r }));
                var C = Math.max(g.left - M.left, 0);
                (M.left += C), (M.right += Math.max(g.right - M.right, 0));
                var S = Math.max(g.top - M.top, 0);
                (M.top += S), (M.bottom += Math.max(g.bottom - M.bottom, 0));
                var P = i - M.top - M.bottom,
                  I = e - M.left - M.right;
                (I === k && P === w) ||
                  (ht.each(p, function(t) {
                    t.height = P;
                  }),
                  ht.each(m, function(t) {
                    t.fullWidth || (t.width = I);
                  }),
                  (w = P),
                  (k = I));
                var A = o + C,
                  D = s + S;
                ht.each(d.concat(h), F),
                  (A += k),
                  (D += w),
                  ht.each(u, F),
                  ht.each(c, F),
                  (t.chartArea = {
                    left: M.left,
                    top: M.top,
                    right: M.left + k,
                    bottom: M.top + w,
                  }),
                  ht.each(f, function(e) {
                    (e.left = t.chartArea.left),
                      (e.top = t.chartArea.top),
                      (e.right = t.chartArea.right),
                      (e.bottom = t.chartArea.bottom),
                      e.update(k, w);
                  });
              }
              function T(t) {
                var e = ht.findNextWhere(_, function(e) {
                  return e.box === t;
                });
                if (e)
                  if (e.horizontal) {
                    var i = {
                      left: Math.max(M.left, g.left),
                      right: Math.max(M.right, g.right),
                      top: 0,
                      bottom: 0,
                    };
                    t.update(t.fullWidth ? b : k, x / 2, i);
                  } else t.update(e.width, w);
              }
              function F(t) {
                t.isHorizontal()
                  ? ((t.left = t.fullWidth ? o : M.left),
                    (t.right = t.fullWidth ? e - r : M.left + k),
                    (t.top = D),
                    (t.bottom = D + t.height),
                    (D = t.bottom))
                  : ((t.left = A),
                    (t.right = A + t.width),
                    (t.top = M.top),
                    (t.bottom = M.top + w),
                    (A = t.right));
              }
            },
          },
          _e =
            ((we = Object.freeze({
              default:
                "/*\n * DOM element rendering detection\n * https://davidwalsh.name/detect-node-insertion\n */\n@keyframes chartjs-render-animation {\n\tfrom { opacity: 0.99; }\n\tto { opacity: 1; }\n}\n\n.chartjs-render-monitor {\n\tanimation: chartjs-render-animation 0.001s;\n}\n\n/*\n * DOM element resizing detection\n * https://github.com/marcj/css-element-queries\n */\n.chartjs-size-monitor,\n.chartjs-size-monitor-expand,\n.chartjs-size-monitor-shrink {\n\tposition: absolute;\n\tdirection: ltr;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\toverflow: hidden;\n\tpointer-events: none;\n\tvisibility: hidden;\n\tz-index: -1;\n}\n\n.chartjs-size-monitor-expand > div {\n\tposition: absolute;\n\twidth: 1000000px;\n\theight: 1000000px;\n\tleft: 0;\n\ttop: 0;\n}\n\n.chartjs-size-monitor-shrink > div {\n\tposition: absolute;\n\twidth: 200%;\n\theight: 200%;\n\tleft: 0;\n\ttop: 0;\n}\n",
            })) &&
              we.default) ||
            we,
          Ce = "$chartjs",
          Se = "chartjs-size-monitor",
          Pe = "chartjs-render-monitor",
          Ie = "chartjs-render-animation",
          Ae = ["animationstart", "webkitAnimationStart"],
          De = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup",
            pointerenter: "mouseenter",
            pointerdown: "mousedown",
            pointermove: "mousemove",
            pointerup: "mouseup",
            pointerleave: "mouseout",
            pointerout: "mouseout",
          };
        function Te(t, e) {
          var i = ht.getStyle(t, e),
            n = i && i.match(/^(\d+)(\.\d+)?px$/);
          return n ? Number(n[1]) : void 0;
        }
        var Fe = !!(function() {
          var t = !1;
          try {
            var e = Object.defineProperty({}, "passive", {
              get: function() {
                t = !0;
              },
            });
            window.addEventListener("e", null, e);
          } catch (i) {}
          return t;
        })() && { passive: !0 };
        function Le(t, e, i) {
          t.addEventListener(e, i, Fe);
        }
        function Oe(t, e, i) {
          t.removeEventListener(e, i, Fe);
        }
        function Re(t, e, i, n, a) {
          return {
            type: t,
            chart: e,
            native: a || null,
            x: void 0 !== i ? i : null,
            y: void 0 !== n ? n : null,
          };
        }
        function Be(t) {
          var e = document.createElement("div");
          return (e.className = t || ""), e;
        }
        function ze(t, e, i) {
          var n,
            a,
            o,
            r,
            s = t[Ce] || (t[Ce] = {}),
            l = (s.resizer = (function(t) {
              var e = Be(Se),
                i = Be(Se + "-expand"),
                n = Be(Se + "-shrink");
              i.appendChild(Be()),
                n.appendChild(Be()),
                e.appendChild(i),
                e.appendChild(n),
                (e._reset = function() {
                  (i.scrollLeft = 1e6),
                    (i.scrollTop = 1e6),
                    (n.scrollLeft = 1e6),
                    (n.scrollTop = 1e6);
                });
              var a = function() {
                e._reset(), t();
              };
              return (
                Le(i, "scroll", a.bind(i, "expand")),
                Le(n, "scroll", a.bind(n, "shrink")),
                e
              );
            })(
              ((n = function() {
                if (s.resizer) {
                  var n = i.options.maintainAspectRatio && t.parentNode,
                    a = n ? n.clientWidth : 0;
                  e(Re("resize", i)),
                    n && n.clientWidth < a && i.canvas && e(Re("resize", i));
                }
              }),
              (o = !1),
              (r = []),
              function() {
                (r = Array.prototype.slice.call(arguments)),
                  (a = a || this),
                  o ||
                    ((o = !0),
                    ht.requestAnimFrame.call(window, function() {
                      (o = !1), n.apply(a, r);
                    }));
              })
            ));
          !(function(t, e) {
            var i = t[Ce] || (t[Ce] = {}),
              n = (i.renderProxy = function(t) {
                t.animationName === Ie && e();
              });
            ht.each(Ae, function(e) {
              Le(t, e, n);
            }),
              (i.reflow = !!t.offsetParent),
              t.classList.add(Pe);
          })(t, function() {
            if (s.resizer) {
              var e = t.parentNode;
              e && e !== l.parentNode && e.insertBefore(l, e.firstChild),
                l._reset();
            }
          });
        }
        function We(t) {
          var e = t[Ce] || {},
            i = e.resizer;
          delete e.resizer,
            (function(t) {
              var e = t[Ce] || {},
                i = e.renderProxy;
              i &&
                (ht.each(Ae, function(e) {
                  Oe(t, e, i);
                }),
                delete e.renderProxy),
                t.classList.remove(Pe);
            })(t),
            i && i.parentNode && i.parentNode.removeChild(i);
        }
        var Ne = {
          disableCSSInjection: !1,
          _enabled:
            "undefined" != typeof window && "undefined" != typeof document,
          _ensureLoaded: function() {
            var t, e, i;
            this._loaded ||
              ((this._loaded = !0),
              this.disableCSSInjection ||
                ((e = _e),
                (i = (t = this)._style || document.createElement("style")),
                t._style ||
                  ((t._style = i),
                  (e = "/* Chart.js */\n" + e),
                  i.setAttribute("type", "text/css"),
                  document.getElementsByTagName("head")[0].appendChild(i)),
                i.appendChild(document.createTextNode(e))));
          },
          acquireContext: function(t, e) {
            "string" == typeof t
              ? (t = document.getElementById(t))
              : t.length && (t = t[0]),
              t && t.canvas && (t = t.canvas);
            var i = t && t.getContext && t.getContext("2d");
            return (
              this._ensureLoaded(),
              i && i.canvas === t
                ? ((function(t, e) {
                    var i = t.style,
                      n = t.getAttribute("height"),
                      a = t.getAttribute("width");
                    if (
                      ((t[Ce] = {
                        initial: {
                          height: n,
                          width: a,
                          style: {
                            display: i.display,
                            height: i.height,
                            width: i.width,
                          },
                        },
                      }),
                      (i.display = i.display || "block"),
                      null === a || "" === a)
                    ) {
                      var o = Te(t, "width");
                      void 0 !== o && (t.width = o);
                    }
                    if (null === n || "" === n)
                      if ("" === t.style.height)
                        t.height = t.width / (e.options.aspectRatio || 2);
                      else {
                        var r = Te(t, "height");
                        void 0 !== o && (t.height = r);
                      }
                  })(t, e),
                  i)
                : null
            );
          },
          releaseContext: function(t) {
            var e = t.canvas;
            if (e[Ce]) {
              var i = e[Ce].initial;
              ["height", "width"].forEach(function(t) {
                var n = i[t];
                ht.isNullOrUndef(n)
                  ? e.removeAttribute(t)
                  : e.setAttribute(t, n);
              }),
                ht.each(i.style || {}, function(t, i) {
                  e.style[i] = t;
                }),
                (e.width = e.width),
                delete e[Ce];
            }
          },
          addEventListener: function(t, e, i) {
            var n = t.canvas;
            if ("resize" !== e) {
              var a = i[Ce] || (i[Ce] = {});
              Le(
                n,
                e,
                ((a.proxies || (a.proxies = {}))[t.id + "_" + e] = function(e) {
                  i(
                    (function(t, e) {
                      var i = De[t.type] || t.type,
                        n = ht.getRelativePosition(t, e);
                      return Re(i, e, n.x, n.y, t);
                    })(e, t)
                  );
                })
              );
            } else ze(n, i, t);
          },
          removeEventListener: function(t, e, i) {
            var n = t.canvas;
            if ("resize" !== e) {
              var a = ((i[Ce] || {}).proxies || {})[t.id + "_" + e];
              a && Oe(n, e, a);
            } else We(n);
          },
        };
        (ht.addEvent = Le), (ht.removeEvent = Oe);
        var Ve = Ne._enabled
            ? Ne
            : {
                acquireContext: function(t) {
                  return (
                    t && t.canvas && (t = t.canvas),
                    (t && t.getContext("2d")) || null
                  );
                },
              },
          Ee = ht.extend(
            {
              initialize: function() {},
              acquireContext: function() {},
              releaseContext: function() {},
              addEventListener: function() {},
              removeEventListener: function() {},
            },
            Ve
          );
        lt._set("global", { plugins: {} });
        var He = {
            _plugins: [],
            _cacheId: 0,
            register: function(t) {
              var e = this._plugins;
              [].concat(t).forEach(function(t) {
                -1 === e.indexOf(t) && e.push(t);
              }),
                this._cacheId++;
            },
            unregister: function(t) {
              var e = this._plugins;
              [].concat(t).forEach(function(t) {
                var i = e.indexOf(t);
                -1 !== i && e.splice(i, 1);
              }),
                this._cacheId++;
            },
            clear: function() {
              (this._plugins = []), this._cacheId++;
            },
            count: function() {
              return this._plugins.length;
            },
            getAll: function() {
              return this._plugins;
            },
            notify: function(t, e, i) {
              var n,
                a,
                o,
                r,
                s,
                l = this.descriptors(t),
                d = l.length;
              for (n = 0; n < d; ++n)
                if (
                  "function" == typeof (s = (o = (a = l[n]).plugin)[e]) &&
                  ((r = [t].concat(i || [])).push(a.options),
                  !1 === s.apply(o, r))
                )
                  return !1;
              return !0;
            },
            descriptors: function(t) {
              var e = t.$plugins || (t.$plugins = {});
              if (e.id === this._cacheId) return e.descriptors;
              var i = [],
                n = [],
                a = (t && t.config) || {},
                o = (a.options && a.options.plugins) || {};
              return (
                this._plugins.concat(a.plugins || []).forEach(function(t) {
                  if (-1 === i.indexOf(t)) {
                    var e = t.id,
                      a = o[e];
                    !1 !== a &&
                      (!0 === a && (a = ht.clone(lt.global.plugins[e])),
                      i.push(t),
                      n.push({ plugin: t, options: a || {} }));
                  }
                }),
                (e.descriptors = n),
                (e.id = this._cacheId),
                n
              );
            },
            _invalidate: function(t) {
              delete t.$plugins;
            },
          },
          je = {
            constructors: {},
            defaults: {},
            registerScaleType: function(t, e, i) {
              (this.constructors[t] = e), (this.defaults[t] = ht.clone(i));
            },
            getScaleConstructor: function(t) {
              return this.constructors.hasOwnProperty(t)
                ? this.constructors[t]
                : void 0;
            },
            getScaleDefaults: function(t) {
              return this.defaults.hasOwnProperty(t)
                ? ht.merge({}, [lt.scale, this.defaults[t]])
                : {};
            },
            updateScaleDefaults: function(t, e) {
              this.defaults.hasOwnProperty(t) &&
                (this.defaults[t] = ht.extend(this.defaults[t], e));
            },
            addScalesToLayout: function(t) {
              ht.each(t.scales, function(e) {
                (e.fullWidth = e.options.fullWidth),
                  (e.position = e.options.position),
                  (e.weight = e.options.weight),
                  Me.addBox(t, e);
              });
            },
          },
          qe = ht.valueOrDefault;
        lt._set("global", {
          tooltips: {
            enabled: !0,
            custom: null,
            mode: "nearest",
            position: "average",
            intersect: !0,
            backgroundColor: "rgba(0,0,0,0.8)",
            titleFontStyle: "bold",
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleFontColor: "#fff",
            titleAlign: "left",
            bodySpacing: 2,
            bodyFontColor: "#fff",
            bodyAlign: "left",
            footerFontStyle: "bold",
            footerSpacing: 2,
            footerMarginTop: 6,
            footerFontColor: "#fff",
            footerAlign: "left",
            yPadding: 6,
            xPadding: 6,
            caretPadding: 2,
            caretSize: 5,
            cornerRadius: 6,
            multiKeyBackground: "#fff",
            displayColors: !0,
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 0,
            callbacks: {
              beforeTitle: ht.noop,
              title: function(t, e) {
                var i = "",
                  n = e.labels,
                  a = n ? n.length : 0;
                if (t.length > 0) {
                  var o = t[0];
                  o.label
                    ? (i = o.label)
                    : o.xLabel
                    ? (i = o.xLabel)
                    : a > 0 && o.index < a && (i = n[o.index]);
                }
                return i;
              },
              afterTitle: ht.noop,
              beforeBody: ht.noop,
              beforeLabel: ht.noop,
              label: function(t, e) {
                var i = e.datasets[t.datasetIndex].label || "";
                return (
                  i && (i += ": "),
                  ht.isNullOrUndef(t.value) ? (i += t.yLabel) : (i += t.value),
                  i
                );
              },
              labelColor: function(t, e) {
                var i = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
                return {
                  borderColor: i.borderColor,
                  backgroundColor: i.backgroundColor,
                };
              },
              labelTextColor: function() {
                return this._options.bodyFontColor;
              },
              afterLabel: ht.noop,
              afterBody: ht.noop,
              beforeFooter: ht.noop,
              footer: ht.noop,
              afterFooter: ht.noop,
            },
          },
        });
        var Ye = {
          average: function(t) {
            if (!t.length) return !1;
            var e,
              i,
              n = 0,
              a = 0,
              o = 0;
            for (e = 0, i = t.length; e < i; ++e) {
              var r = t[e];
              if (r && r.hasValue()) {
                var s = r.tooltipPosition();
                (n += s.x), (a += s.y), ++o;
              }
            }
            return { x: n / o, y: a / o };
          },
          nearest: function(t, e) {
            var i,
              n,
              a,
              o = e.x,
              r = e.y,
              s = Number.POSITIVE_INFINITY;
            for (i = 0, n = t.length; i < n; ++i) {
              var l = t[i];
              if (l && l.hasValue()) {
                var d = l.getCenterPoint(),
                  u = ht.distanceBetweenPoints(e, d);
                u < s && ((s = u), (a = l));
              }
            }
            if (a) {
              var h = a.tooltipPosition();
              (o = h.x), (r = h.y);
            }
            return { x: o, y: r };
          },
        };
        function Ue(t, e) {
          return (
            e && (ht.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)),
            t
          );
        }
        function Xe(t) {
          return ("string" == typeof t || t instanceof String) &&
            t.indexOf("\n") > -1
            ? t.split("\n")
            : t;
        }
        function Ke(t) {
          var e = lt.global;
          return {
            xPadding: t.xPadding,
            yPadding: t.yPadding,
            xAlign: t.xAlign,
            yAlign: t.yAlign,
            bodyFontColor: t.bodyFontColor,
            _bodyFontFamily: qe(t.bodyFontFamily, e.defaultFontFamily),
            _bodyFontStyle: qe(t.bodyFontStyle, e.defaultFontStyle),
            _bodyAlign: t.bodyAlign,
            bodyFontSize: qe(t.bodyFontSize, e.defaultFontSize),
            bodySpacing: t.bodySpacing,
            titleFontColor: t.titleFontColor,
            _titleFontFamily: qe(t.titleFontFamily, e.defaultFontFamily),
            _titleFontStyle: qe(t.titleFontStyle, e.defaultFontStyle),
            titleFontSize: qe(t.titleFontSize, e.defaultFontSize),
            _titleAlign: t.titleAlign,
            titleSpacing: t.titleSpacing,
            titleMarginBottom: t.titleMarginBottom,
            footerFontColor: t.footerFontColor,
            _footerFontFamily: qe(t.footerFontFamily, e.defaultFontFamily),
            _footerFontStyle: qe(t.footerFontStyle, e.defaultFontStyle),
            footerFontSize: qe(t.footerFontSize, e.defaultFontSize),
            _footerAlign: t.footerAlign,
            footerSpacing: t.footerSpacing,
            footerMarginTop: t.footerMarginTop,
            caretSize: t.caretSize,
            cornerRadius: t.cornerRadius,
            backgroundColor: t.backgroundColor,
            opacity: 0,
            legendColorBackground: t.multiKeyBackground,
            displayColors: t.displayColors,
            borderColor: t.borderColor,
            borderWidth: t.borderWidth,
          };
        }
        function Ge(t, e) {
          return "center" === e
            ? t.x + t.width / 2
            : "right" === e
            ? t.x + t.width - t.xPadding
            : t.x + t.xPadding;
        }
        function Ze(t) {
          return Ue([], Xe(t));
        }
        var $e = mt.extend({
            initialize: function() {
              (this._model = Ke(this._options)), (this._lastActive = []);
            },
            getTitle: function() {
              var t = this._options.callbacks,
                e = t.beforeTitle.apply(this, arguments),
                i = t.title.apply(this, arguments),
                n = t.afterTitle.apply(this, arguments),
                a = [];
              return (a = Ue(a, Xe(e))), (a = Ue(a, Xe(i))), (a = Ue(a, Xe(n)));
            },
            getBeforeBody: function() {
              return Ze(
                this._options.callbacks.beforeBody.apply(this, arguments)
              );
            },
            getBody: function(t, e) {
              var i = this,
                n = i._options.callbacks,
                a = [];
              return (
                ht.each(t, function(t) {
                  var o = { before: [], lines: [], after: [] };
                  Ue(o.before, Xe(n.beforeLabel.call(i, t, e))),
                    Ue(o.lines, n.label.call(i, t, e)),
                    Ue(o.after, Xe(n.afterLabel.call(i, t, e))),
                    a.push(o);
                }),
                a
              );
            },
            getAfterBody: function() {
              return Ze(
                this._options.callbacks.afterBody.apply(this, arguments)
              );
            },
            getFooter: function() {
              var t = this._options.callbacks,
                e = t.beforeFooter.apply(this, arguments),
                i = t.footer.apply(this, arguments),
                n = t.afterFooter.apply(this, arguments),
                a = [];
              return (a = Ue(a, Xe(e))), (a = Ue(a, Xe(i))), (a = Ue(a, Xe(n)));
            },
            update: function(t) {
              var e,
                i,
                n,
                a,
                o,
                r,
                s,
                l,
                d,
                u,
                h = this,
                c = h._options,
                f = h._model,
                g = (h._model = Ke(c)),
                p = h._active,
                m = h._data,
                v = { xAlign: f.xAlign, yAlign: f.yAlign },
                b = { x: f.x, y: f.y },
                x = { width: f.width, height: f.height },
                y = { x: f.caretX, y: f.caretY };
              if (p.length) {
                g.opacity = 1;
                var k = [],
                  w = [];
                y = Ye[c.position].call(h, p, h._eventPosition);
                var M = [];
                for (e = 0, i = p.length; e < i; ++e)
                  M.push(
                    ((n = p[e]),
                    (a = void 0),
                    (o = void 0),
                    (r = void 0),
                    (s = void 0),
                    (l = void 0),
                    (d = void 0),
                    (u = void 0),
                    (a = n._xScale),
                    (o = n._yScale || n._scale),
                    (r = n._index),
                    (s = n._datasetIndex),
                    (l = n._chart.getDatasetMeta(s).controller),
                    (d = l._getIndexScale()),
                    (u = l._getValueScale()),
                    {
                      xLabel: a ? a.getLabelForIndex(r, s) : "",
                      yLabel: o ? o.getLabelForIndex(r, s) : "",
                      label: d ? "" + d.getLabelForIndex(r, s) : "",
                      value: u ? "" + u.getLabelForIndex(r, s) : "",
                      index: r,
                      datasetIndex: s,
                      x: n._model.x,
                      y: n._model.y,
                    })
                  );
                c.filter &&
                  (M = M.filter(function(t) {
                    return c.filter(t, m);
                  })),
                  c.itemSort &&
                    (M = M.sort(function(t, e) {
                      return c.itemSort(t, e, m);
                    })),
                  ht.each(M, function(t) {
                    k.push(c.callbacks.labelColor.call(h, t, h._chart)),
                      w.push(c.callbacks.labelTextColor.call(h, t, h._chart));
                  }),
                  (g.title = h.getTitle(M, m)),
                  (g.beforeBody = h.getBeforeBody(M, m)),
                  (g.body = h.getBody(M, m)),
                  (g.afterBody = h.getAfterBody(M, m)),
                  (g.footer = h.getFooter(M, m)),
                  (g.x = y.x),
                  (g.y = y.y),
                  (g.caretPadding = c.caretPadding),
                  (g.labelColors = k),
                  (g.labelTextColors = w),
                  (g.dataPoints = M),
                  (x = (function(t, e) {
                    var i = t._chart.ctx,
                      n = 2 * e.yPadding,
                      a = 0,
                      o = e.body,
                      r = o.reduce(function(t, e) {
                        return (
                          t + e.before.length + e.lines.length + e.after.length
                        );
                      }, 0);
                    r += e.beforeBody.length + e.afterBody.length;
                    var s = e.title.length,
                      l = e.footer.length,
                      d = e.titleFontSize,
                      u = e.bodyFontSize,
                      h = e.footerFontSize;
                    (n += s * d),
                      (n += s ? (s - 1) * e.titleSpacing : 0),
                      (n += s ? e.titleMarginBottom : 0),
                      (n += r * u),
                      (n += r ? (r - 1) * e.bodySpacing : 0),
                      (n += l ? e.footerMarginTop : 0),
                      (n += l * h),
                      (n += l ? (l - 1) * e.footerSpacing : 0);
                    var c = 0,
                      f = function(t) {
                        a = Math.max(a, i.measureText(t).width + c);
                      };
                    return (
                      (i.font = ht.fontString(
                        d,
                        e._titleFontStyle,
                        e._titleFontFamily
                      )),
                      ht.each(e.title, f),
                      (i.font = ht.fontString(
                        u,
                        e._bodyFontStyle,
                        e._bodyFontFamily
                      )),
                      ht.each(e.beforeBody.concat(e.afterBody), f),
                      (c = e.displayColors ? u + 2 : 0),
                      ht.each(o, function(t) {
                        ht.each(t.before, f),
                          ht.each(t.lines, f),
                          ht.each(t.after, f);
                      }),
                      (c = 0),
                      (i.font = ht.fontString(
                        h,
                        e._footerFontStyle,
                        e._footerFontFamily
                      )),
                      ht.each(e.footer, f),
                      { width: (a += 2 * e.xPadding), height: n }
                    );
                  })(this, g)),
                  (b = (function(t, e, i, n) {
                    var a = t.x,
                      o = t.y,
                      r = t.caretSize,
                      s = t.caretPadding,
                      l = t.cornerRadius,
                      d = i.xAlign,
                      u = i.yAlign,
                      h = r + s,
                      c = l + s;
                    return (
                      "right" === d
                        ? (a -= e.width)
                        : "center" === d &&
                          ((a -= e.width / 2) + e.width > n.width &&
                            (a = n.width - e.width),
                          a < 0 && (a = 0)),
                      "top" === u
                        ? (o += h)
                        : (o -= "bottom" === u ? e.height + h : e.height / 2),
                      "center" === u
                        ? "left" === d
                          ? (a += h)
                          : "right" === d && (a -= h)
                        : "left" === d
                        ? (a -= c)
                        : "right" === d && (a += c),
                      { x: a, y: o }
                    );
                  })(
                    g,
                    x,
                    (v = (function(t, e) {
                      var i,
                        n,
                        a,
                        o,
                        r,
                        s = t._model,
                        l = t._chart,
                        d = t._chart.chartArea,
                        u = "center",
                        h = "center";
                      s.y < e.height
                        ? (h = "top")
                        : s.y > l.height - e.height && (h = "bottom");
                      var c = (d.left + d.right) / 2,
                        f = (d.top + d.bottom) / 2;
                      "center" === h
                        ? ((i = function(t) {
                            return t <= c;
                          }),
                          (n = function(t) {
                            return t > c;
                          }))
                        : ((i = function(t) {
                            return t <= e.width / 2;
                          }),
                          (n = function(t) {
                            return t >= l.width - e.width / 2;
                          })),
                        (a = function(t) {
                          return (
                            t + e.width + s.caretSize + s.caretPadding > l.width
                          );
                        }),
                        (o = function(t) {
                          return t - e.width - s.caretSize - s.caretPadding < 0;
                        }),
                        (r = function(t) {
                          return t <= f ? "top" : "bottom";
                        }),
                        i(s.x)
                          ? ((u = "left"),
                            a(s.x) && ((u = "center"), (h = r(s.y))))
                          : n(s.x) &&
                            ((u = "right"),
                            o(s.x) && ((u = "center"), (h = r(s.y))));
                      var g = t._options;
                      return {
                        xAlign: g.xAlign ? g.xAlign : u,
                        yAlign: g.yAlign ? g.yAlign : h,
                      };
                    })(this, x)),
                    h._chart
                  ));
              } else g.opacity = 0;
              return (
                (g.xAlign = v.xAlign),
                (g.yAlign = v.yAlign),
                (g.x = b.x),
                (g.y = b.y),
                (g.width = x.width),
                (g.height = x.height),
                (g.caretX = y.x),
                (g.caretY = y.y),
                (h._model = g),
                t && c.custom && c.custom.call(h, g),
                h
              );
            },
            drawCaret: function(t, e) {
              var i = this._chart.ctx,
                n = this._view,
                a = this.getCaretPosition(t, e, n);
              i.lineTo(a.x1, a.y1), i.lineTo(a.x2, a.y2), i.lineTo(a.x3, a.y3);
            },
            getCaretPosition: function(t, e, i) {
              var n,
                a,
                o,
                r,
                s,
                l,
                d = i.caretSize,
                u = i.cornerRadius,
                h = i.xAlign,
                c = i.yAlign,
                f = t.x,
                g = t.y,
                p = e.width,
                m = e.height;
              if ("center" === c)
                (s = g + m / 2),
                  "left" === h
                    ? ((a = (n = f) - d), (o = n), (r = s + d), (l = s - d))
                    : ((a = (n = f + p) + d),
                      (o = n),
                      (r = s - d),
                      (l = s + d));
              else if (
                ("left" === h
                  ? ((n = (a = f + u + d) - d), (o = a + d))
                  : "right" === h
                  ? ((n = (a = f + p - u - d) - d), (o = a + d))
                  : ((n = (a = i.caretX) - d), (o = a + d)),
                "top" === c)
              )
                (s = (r = g) - d), (l = r);
              else {
                (s = (r = g + m) + d), (l = r);
                var v = o;
                (o = n), (n = v);
              }
              return { x1: n, x2: a, x3: o, y1: r, y2: s, y3: l };
            },
            drawTitle: function(t, e, i) {
              var n = e.title;
              if (n.length) {
                (t.x = Ge(e, e._titleAlign)),
                  (i.textAlign = e._titleAlign),
                  (i.textBaseline = "top");
                var a,
                  o,
                  r = e.titleFontSize,
                  s = e.titleSpacing;
                for (
                  i.fillStyle = e.titleFontColor,
                    i.font = ht.fontString(
                      r,
                      e._titleFontStyle,
                      e._titleFontFamily
                    ),
                    a = 0,
                    o = n.length;
                  a < o;
                  ++a
                )
                  i.fillText(n[a], t.x, t.y),
                    (t.y += r + s),
                    a + 1 === n.length && (t.y += e.titleMarginBottom - s);
              }
            },
            drawBody: function(t, e, i) {
              var n,
                a = e.bodyFontSize,
                o = e.bodySpacing,
                r = e._bodyAlign,
                s = e.body,
                l = e.displayColors,
                d = e.labelColors,
                u = 0,
                h = l ? Ge(e, "left") : 0;
              (i.textAlign = r),
                (i.textBaseline = "top"),
                (i.font = ht.fontString(
                  a,
                  e._bodyFontStyle,
                  e._bodyFontFamily
                )),
                (t.x = Ge(e, r));
              var c = function(e) {
                i.fillText(e, t.x + u, t.y), (t.y += a + o);
              };
              (i.fillStyle = e.bodyFontColor),
                ht.each(e.beforeBody, c),
                (u =
                  l && "right" !== r
                    ? "center" === r
                      ? a / 2 + 1
                      : a + 2
                    : 0),
                ht.each(s, function(o, r) {
                  (n = e.labelTextColors[r]),
                    (i.fillStyle = n),
                    ht.each(o.before, c),
                    ht.each(o.lines, function(o) {
                      l &&
                        ((i.fillStyle = e.legendColorBackground),
                        i.fillRect(h, t.y, a, a),
                        (i.lineWidth = 1),
                        (i.strokeStyle = d[r].borderColor),
                        i.strokeRect(h, t.y, a, a),
                        (i.fillStyle = d[r].backgroundColor),
                        i.fillRect(h + 1, t.y + 1, a - 2, a - 2),
                        (i.fillStyle = n)),
                        c(o);
                    }),
                    ht.each(o.after, c);
                }),
                (u = 0),
                ht.each(e.afterBody, c),
                (t.y -= o);
            },
            drawFooter: function(t, e, i) {
              var n = e.footer;
              n.length &&
                ((t.x = Ge(e, e._footerAlign)),
                (t.y += e.footerMarginTop),
                (i.textAlign = e._footerAlign),
                (i.textBaseline = "top"),
                (i.fillStyle = e.footerFontColor),
                (i.font = ht.fontString(
                  e.footerFontSize,
                  e._footerFontStyle,
                  e._footerFontFamily
                )),
                ht.each(n, function(n) {
                  i.fillText(n, t.x, t.y),
                    (t.y += e.footerFontSize + e.footerSpacing);
                }));
            },
            drawBackground: function(t, e, i, n) {
              (i.fillStyle = e.backgroundColor),
                (i.strokeStyle = e.borderColor),
                (i.lineWidth = e.borderWidth);
              var a = e.xAlign,
                o = e.yAlign,
                r = t.x,
                s = t.y,
                l = n.width,
                d = n.height,
                u = e.cornerRadius;
              i.beginPath(),
                i.moveTo(r + u, s),
                "top" === o && this.drawCaret(t, n),
                i.lineTo(r + l - u, s),
                i.quadraticCurveTo(r + l, s, r + l, s + u),
                "center" === o && "right" === a && this.drawCaret(t, n),
                i.lineTo(r + l, s + d - u),
                i.quadraticCurveTo(r + l, s + d, r + l - u, s + d),
                "bottom" === o && this.drawCaret(t, n),
                i.lineTo(r + u, s + d),
                i.quadraticCurveTo(r, s + d, r, s + d - u),
                "center" === o && "left" === a && this.drawCaret(t, n),
                i.lineTo(r, s + u),
                i.quadraticCurveTo(r, s, r + u, s),
                i.closePath(),
                i.fill(),
                e.borderWidth > 0 && i.stroke();
            },
            draw: function() {
              var t = this._chart.ctx,
                e = this._view;
              if (0 !== e.opacity) {
                var i = { width: e.width, height: e.height },
                  n = { x: e.x, y: e.y },
                  a = Math.abs(e.opacity < 0.001) ? 0 : e.opacity,
                  o =
                    e.title.length ||
                    e.beforeBody.length ||
                    e.body.length ||
                    e.afterBody.length ||
                    e.footer.length;
                this._options.enabled &&
                  o &&
                  (t.save(),
                  (t.globalAlpha = a),
                  this.drawBackground(n, e, t, i),
                  (n.y += e.yPadding),
                  this.drawTitle(n, e, t),
                  this.drawBody(n, e, t),
                  this.drawFooter(n, e, t),
                  t.restore());
              }
            },
            handleEvent: function(t) {
              var e,
                i = this,
                n = i._options;
              return (
                (i._lastActive = i._lastActive || []),
                "mouseout" === t.type
                  ? (i._active = [])
                  : (i._active = i._chart.getElementsAtEventForMode(
                      t,
                      n.mode,
                      n
                    )),
                (e = !ht.arrayEquals(i._active, i._lastActive)) &&
                  ((i._lastActive = i._active),
                  (n.enabled || n.custom) &&
                    ((i._eventPosition = { x: t.x, y: t.y }),
                    i.update(!0),
                    i.pivot())),
                e
              );
            },
          }),
          Je = Ye,
          Qe = $e;
        Qe.positioners = Je;
        var ti = ht.valueOrDefault;
        function ei() {
          return ht.merge({}, [].slice.call(arguments), {
            merger: function(t, e, i, n) {
              if ("xAxes" === t || "yAxes" === t) {
                var a,
                  o,
                  r,
                  s = i[t].length;
                for (e[t] || (e[t] = []), a = 0; a < s; ++a)
                  (r = i[t][a]),
                    (o = ti(r.type, "xAxes" === t ? "category" : "linear")),
                    a >= e[t].length && e[t].push({}),
                    !e[t][a].type || (r.type && r.type !== e[t][a].type)
                      ? ht.merge(e[t][a], [je.getScaleDefaults(o), r])
                      : ht.merge(e[t][a], r);
              } else ht._merger(t, e, i, n);
            },
          });
        }
        function ii() {
          return ht.merge({}, [].slice.call(arguments), {
            merger: function(t, e, i, n) {
              var a = e[t] || {},
                o = i[t];
              "scales" === t
                ? (e[t] = ei(a, o))
                : "scale" === t
                ? (e[t] = ht.merge(a, [je.getScaleDefaults(o.type), o]))
                : ht._merger(t, e, i, n);
            },
          });
        }
        function ni(t) {
          return "top" === t || "bottom" === t;
        }
        lt._set("global", {
          elements: {},
          events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
          hover: {
            onHover: null,
            mode: "nearest",
            intersect: !0,
            animationDuration: 400,
          },
          onClick: null,
          maintainAspectRatio: !0,
          responsive: !0,
          responsiveAnimationDuration: 0,
        });
        var ai = function(t, e) {
          return this.construct(t, e), this;
        };
        ht.extend(ai.prototype, {
          construct: function(t, e) {
            var i = this;
            e = (function(t) {
              var e = ((t = t || {}).data = t.data || {});
              return (
                (e.datasets = e.datasets || []),
                (e.labels = e.labels || []),
                (t.options = ii(lt.global, lt[t.type], t.options || {})),
                t
              );
            })(e);
            var n = Ee.acquireContext(t, e),
              a = n && n.canvas,
              o = a && a.height,
              r = a && a.width;
            (i.id = ht.uid()),
              (i.ctx = n),
              (i.canvas = a),
              (i.config = e),
              (i.width = r),
              (i.height = o),
              (i.aspectRatio = o ? r / o : null),
              (i.options = e.options),
              (i._bufferedRender = !1),
              (i.chart = i),
              (i.controller = i),
              (ai.instances[i.id] = i),
              Object.defineProperty(i, "data", {
                get: function() {
                  return i.config.data;
                },
                set: function(t) {
                  i.config.data = t;
                },
              }),
              n && a
                ? (i.initialize(), i.update())
                : console.error(
                    "Failed to create chart: can't acquire context from the given item"
                  );
          },
          initialize: function() {
            var t = this;
            return (
              He.notify(t, "beforeInit"),
              ht.retinaScale(t, t.options.devicePixelRatio),
              t.bindEvents(),
              t.options.responsive && t.resize(!0),
              t.ensureScalesHaveIDs(),
              t.buildOrUpdateScales(),
              t.initToolTip(),
              He.notify(t, "afterInit"),
              t
            );
          },
          clear: function() {
            return ht.canvas.clear(this), this;
          },
          stop: function() {
            return xt.cancelAnimation(this), this;
          },
          resize: function(t) {
            var e = this,
              i = e.options,
              n = e.canvas,
              a = (i.maintainAspectRatio && e.aspectRatio) || null,
              o = Math.max(0, Math.floor(ht.getMaximumWidth(n))),
              r = Math.max(0, Math.floor(a ? o / a : ht.getMaximumHeight(n)));
            if (
              (e.width !== o || e.height !== r) &&
              ((n.width = e.width = o),
              (n.height = e.height = r),
              (n.style.width = o + "px"),
              (n.style.height = r + "px"),
              ht.retinaScale(e, i.devicePixelRatio),
              !t)
            ) {
              var s = { width: o, height: r };
              He.notify(e, "resize", [s]),
                i.onResize && i.onResize(e, s),
                e.stop(),
                e.update({ duration: i.responsiveAnimationDuration });
            }
          },
          ensureScalesHaveIDs: function() {
            var t = this.options,
              e = t.scales || {},
              i = t.scale;
            ht.each(e.xAxes, function(t, e) {
              t.id = t.id || "x-axis-" + e;
            }),
              ht.each(e.yAxes, function(t, e) {
                t.id = t.id || "y-axis-" + e;
              }),
              i && (i.id = i.id || "scale");
          },
          buildOrUpdateScales: function() {
            var t = this,
              e = t.options,
              i = t.scales || {},
              n = [],
              a = Object.keys(i).reduce(function(t, e) {
                return (t[e] = !1), t;
              }, {});
            e.scales &&
              (n = n.concat(
                (e.scales.xAxes || []).map(function(t) {
                  return { options: t, dtype: "category", dposition: "bottom" };
                }),
                (e.scales.yAxes || []).map(function(t) {
                  return { options: t, dtype: "linear", dposition: "left" };
                })
              )),
              e.scale &&
                n.push({
                  options: e.scale,
                  dtype: "radialLinear",
                  isDefault: !0,
                  dposition: "chartArea",
                }),
              ht.each(n, function(e) {
                var n = e.options,
                  o = n.id,
                  r = ti(n.type, e.dtype);
                ni(n.position) !== ni(e.dposition) &&
                  (n.position = e.dposition),
                  (a[o] = !0);
                var s = null;
                if (o in i && i[o].type === r)
                  ((s = i[o]).options = n), (s.ctx = t.ctx), (s.chart = t);
                else {
                  var l = je.getScaleConstructor(r);
                  if (!l) return;
                  (s = new l({
                    id: o,
                    type: r,
                    options: n,
                    ctx: t.ctx,
                    chart: t,
                  })),
                    (i[s.id] = s);
                }
                s.mergeTicksOptions(), e.isDefault && (t.scale = s);
              }),
              ht.each(a, function(t, e) {
                t || delete i[e];
              }),
              (t.scales = i),
              je.addScalesToLayout(this);
          },
          buildOrUpdateControllers: function() {
            var t = this,
              e = [];
            return (
              ht.each(
                t.data.datasets,
                function(i, n) {
                  var a = t.getDatasetMeta(n),
                    o = i.type || t.config.type;
                  if (
                    (a.type &&
                      a.type !== o &&
                      (t.destroyDatasetMeta(n), (a = t.getDatasetMeta(n))),
                    (a.type = o),
                    a.controller)
                  )
                    a.controller.updateIndex(n), a.controller.linkScales();
                  else {
                    var r = he[a.type];
                    if (void 0 === r)
                      throw new Error('"' + a.type + '" is not a chart type.');
                    (a.controller = new r(t, n)), e.push(a.controller);
                  }
                },
                t
              ),
              e
            );
          },
          resetElements: function() {
            var t = this;
            ht.each(
              t.data.datasets,
              function(e, i) {
                t.getDatasetMeta(i).controller.reset();
              },
              t
            );
          },
          reset: function() {
            this.resetElements(), this.tooltip.initialize();
          },
          update: function(t) {
            var e,
              i,
              n = this;
            if (
              ((t && "object" === o(t)) ||
                (t = { duration: t, lazy: arguments[1] }),
              (i = (e = n).options),
              ht.each(e.scales, function(t) {
                Me.removeBox(e, t);
              }),
              (i = ii(lt.global, lt[e.config.type], i)),
              (e.options = e.config.options = i),
              e.ensureScalesHaveIDs(),
              e.buildOrUpdateScales(),
              (e.tooltip._options = i.tooltips),
              e.tooltip.initialize(),
              He._invalidate(n),
              !1 !== He.notify(n, "beforeUpdate"))
            ) {
              n.tooltip._data = n.data;
              var a = n.buildOrUpdateControllers();
              ht.each(
                n.data.datasets,
                function(t, e) {
                  n.getDatasetMeta(e).controller.buildOrUpdateElements();
                },
                n
              ),
                n.updateLayout(),
                n.options.animation &&
                  n.options.animation.duration &&
                  ht.each(a, function(t) {
                    t.reset();
                  }),
                n.updateDatasets(),
                n.tooltip.initialize(),
                (n.lastActive = []),
                He.notify(n, "afterUpdate"),
                n._bufferedRender
                  ? (n._bufferedRequest = {
                      duration: t.duration,
                      easing: t.easing,
                      lazy: t.lazy,
                    })
                  : n.render(t);
            }
          },
          updateLayout: function() {
            !1 !== He.notify(this, "beforeLayout") &&
              (Me.update(this, this.width, this.height),
              He.notify(this, "afterScaleUpdate"),
              He.notify(this, "afterLayout"));
          },
          updateDatasets: function() {
            if (!1 !== He.notify(this, "beforeDatasetsUpdate")) {
              for (var t = 0, e = this.data.datasets.length; t < e; ++t)
                this.updateDataset(t);
              He.notify(this, "afterDatasetsUpdate");
            }
          },
          updateDataset: function(t) {
            var e = this.getDatasetMeta(t),
              i = { meta: e, index: t };
            !1 !== He.notify(this, "beforeDatasetUpdate", [i]) &&
              (e.controller.update(),
              He.notify(this, "afterDatasetUpdate", [i]));
          },
          render: function(t) {
            var e = this;
            (t && "object" === o(t)) ||
              (t = { duration: t, lazy: arguments[1] });
            var i = e.options.animation,
              n = ti(t.duration, i && i.duration),
              a = t.lazy;
            if (!1 !== He.notify(e, "beforeRender")) {
              var r = function(t) {
                He.notify(e, "afterRender"),
                  ht.callback(i && i.onComplete, [t], e);
              };
              if (i && n) {
                var s = new bt({
                  numSteps: n / 16.66,
                  easing: t.easing || i.easing,
                  render: function(t, e) {
                    var i = ht.easing.effects[e.easing],
                      n = e.currentStep,
                      a = n / e.numSteps;
                    t.draw(i(a), a, n);
                  },
                  onAnimationProgress: i.onProgress,
                  onAnimationComplete: r,
                });
                xt.addAnimation(e, s, n, a);
              } else e.draw(), r(new bt({ numSteps: 0, chart: e }));
              return e;
            }
          },
          draw: function(t) {
            var e = this;
            e.clear(),
              ht.isNullOrUndef(t) && (t = 1),
              e.transition(t),
              e.width <= 0 ||
                e.height <= 0 ||
                (!1 !== He.notify(e, "beforeDraw", [t]) &&
                  (ht.each(
                    e.boxes,
                    function(t) {
                      t.draw(e.chartArea);
                    },
                    e
                  ),
                  e.drawDatasets(t),
                  e._drawTooltip(t),
                  He.notify(e, "afterDraw", [t])));
          },
          transition: function(t) {
            for (var e = 0, i = (this.data.datasets || []).length; e < i; ++e)
              this.isDatasetVisible(e) &&
                this.getDatasetMeta(e).controller.transition(t);
            this.tooltip.transition(t);
          },
          drawDatasets: function(t) {
            var e = this;
            if (!1 !== He.notify(e, "beforeDatasetsDraw", [t])) {
              for (var i = (e.data.datasets || []).length - 1; i >= 0; --i)
                e.isDatasetVisible(i) && e.drawDataset(i, t);
              He.notify(e, "afterDatasetsDraw", [t]);
            }
          },
          drawDataset: function(t, e) {
            var i = this.getDatasetMeta(t),
              n = { meta: i, index: t, easingValue: e };
            !1 !== He.notify(this, "beforeDatasetDraw", [n]) &&
              (i.controller.draw(e), He.notify(this, "afterDatasetDraw", [n]));
          },
          _drawTooltip: function(t) {
            var e = this.tooltip,
              i = { tooltip: e, easingValue: t };
            !1 !== He.notify(this, "beforeTooltipDraw", [i]) &&
              (e.draw(), He.notify(this, "afterTooltipDraw", [i]));
          },
          getElementAtEvent: function(t) {
            return be.modes.single(this, t);
          },
          getElementsAtEvent: function(t) {
            return be.modes.label(this, t, { intersect: !0 });
          },
          getElementsAtXAxis: function(t) {
            return be.modes["x-axis"](this, t, { intersect: !0 });
          },
          getElementsAtEventForMode: function(t, e, i) {
            var n = be.modes[e];
            return "function" == typeof n ? n(this, t, i) : [];
          },
          getDatasetAtEvent: function(t) {
            return be.modes.dataset(this, t, { intersect: !0 });
          },
          getDatasetMeta: function(t) {
            var e = this.data.datasets[t];
            e._meta || (e._meta = {});
            var i = e._meta[this.id];
            return (
              i ||
                (i = e._meta[this.id] = {
                  type: null,
                  data: [],
                  dataset: null,
                  controller: null,
                  hidden: null,
                  xAxisID: null,
                  yAxisID: null,
                }),
              i
            );
          },
          getVisibleDatasetCount: function() {
            for (var t = 0, e = 0, i = this.data.datasets.length; e < i; ++e)
              this.isDatasetVisible(e) && t++;
            return t;
          },
          isDatasetVisible: function(t) {
            var e = this.getDatasetMeta(t);
            return "boolean" == typeof e.hidden
              ? !e.hidden
              : !this.data.datasets[t].hidden;
          },
          generateLegend: function() {
            return this.options.legendCallback(this);
          },
          destroyDatasetMeta: function(t) {
            var e = this.id,
              i = this.data.datasets[t],
              n = i._meta && i._meta[e];
            n && (n.controller.destroy(), delete i._meta[e]);
          },
          destroy: function() {
            var t,
              e,
              i = this,
              n = i.canvas;
            for (i.stop(), t = 0, e = i.data.datasets.length; t < e; ++t)
              i.destroyDatasetMeta(t);
            n &&
              (i.unbindEvents(),
              ht.canvas.clear(i),
              Ee.releaseContext(i.ctx),
              (i.canvas = null),
              (i.ctx = null)),
              He.notify(i, "destroy"),
              delete ai.instances[i.id];
          },
          toBase64Image: function() {
            return this.canvas.toDataURL.apply(this.canvas, arguments);
          },
          initToolTip: function() {
            var t = this;
            t.tooltip = new Qe(
              {
                _chart: t,
                _chartInstance: t,
                _data: t.data,
                _options: t.options.tooltips,
              },
              t
            );
          },
          bindEvents: function() {
            var t = this,
              e = (t._listeners = {}),
              i = function() {
                t.eventHandler.apply(t, arguments);
              };
            ht.each(t.options.events, function(n) {
              Ee.addEventListener(t, n, i), (e[n] = i);
            }),
              t.options.responsive &&
                ((i = function() {
                  t.resize();
                }),
                Ee.addEventListener(t, "resize", i),
                (e.resize = i));
          },
          unbindEvents: function() {
            var t = this,
              e = t._listeners;
            e &&
              (delete t._listeners,
              ht.each(e, function(e, i) {
                Ee.removeEventListener(t, i, e);
              }));
          },
          updateHoverStyle: function(t, e, i) {
            var n,
              a,
              o,
              r = i ? "setHoverStyle" : "removeHoverStyle";
            for (a = 0, o = t.length; a < o; ++a)
              (n = t[a]) &&
                this.getDatasetMeta(n._datasetIndex).controller[r](n);
          },
          eventHandler: function(t) {
            var e = this,
              i = e.tooltip;
            if (!1 !== He.notify(e, "beforeEvent", [t])) {
              (e._bufferedRender = !0), (e._bufferedRequest = null);
              var n = e.handleEvent(t);
              i && (n = i._start ? i.handleEvent(t) : n | i.handleEvent(t)),
                He.notify(e, "afterEvent", [t]);
              var a = e._bufferedRequest;
              return (
                a
                  ? e.render(a)
                  : n &&
                    !e.animating &&
                    (e.stop(),
                    e.render({
                      duration: e.options.hover.animationDuration,
                      lazy: !0,
                    })),
                (e._bufferedRender = !1),
                (e._bufferedRequest = null),
                e
              );
            }
          },
          handleEvent: function(t) {
            var e,
              i = this,
              n = i.options || {},
              a = n.hover;
            return (
              (i.lastActive = i.lastActive || []),
              "mouseout" === t.type
                ? (i.active = [])
                : (i.active = i.getElementsAtEventForMode(t, a.mode, a)),
              ht.callback(
                n.onHover || n.hover.onHover,
                [t.native, i.active],
                i
              ),
              ("mouseup" !== t.type && "click" !== t.type) ||
                (n.onClick && n.onClick.call(i, t.native, i.active)),
              i.lastActive.length &&
                i.updateHoverStyle(i.lastActive, a.mode, !1),
              i.active.length &&
                a.mode &&
                i.updateHoverStyle(i.active, a.mode, !0),
              (e = !ht.arrayEquals(i.active, i.lastActive)),
              (i.lastActive = i.active),
              e
            );
          },
        }),
          (ai.instances = {});
        var oi = ai;
        function ri() {
          throw new Error(
            "This method is not implemented: either no adapter can be found or an incomplete integration was provided."
          );
        }
        function si(t) {
          this.options = t || {};
        }
        (ai.Controller = ai),
          (ai.types = {}),
          (ht.configMerge = ii),
          (ht.scaleMerge = ei),
          ht.extend(si.prototype, {
            formats: ri,
            parse: ri,
            format: ri,
            add: ri,
            diff: ri,
            startOf: ri,
            endOf: ri,
            _create: function(t) {
              return t;
            },
          }),
          (si.override = function(t) {
            ht.extend(si.prototype, t);
          });
        var li = { _date: si },
          di = {
            formatters: {
              values: function(t) {
                return ht.isArray(t) ? t : "" + t;
              },
              linear: function(t, e, i) {
                var n = i.length > 3 ? i[2] - i[1] : i[1] - i[0];
                Math.abs(n) > 1 &&
                  t !== Math.floor(t) &&
                  (n = t - Math.floor(t));
                var a = ht.log10(Math.abs(n)),
                  o = "";
                if (0 !== t)
                  if (
                    Math.max(Math.abs(i[0]), Math.abs(i[i.length - 1])) < 1e-4
                  ) {
                    var r = ht.log10(Math.abs(t));
                    o = t.toExponential(Math.floor(r) - Math.floor(a));
                  } else {
                    var s = -1 * Math.floor(a);
                    (s = Math.max(Math.min(s, 20), 0)), (o = t.toFixed(s));
                  }
                else o = "0";
                return o;
              },
              logarithmic: function(t, e, i) {
                var n = t / Math.pow(10, Math.floor(ht.log10(t)));
                return 0 === t
                  ? "0"
                  : 1 === n ||
                    2 === n ||
                    5 === n ||
                    0 === e ||
                    e === i.length - 1
                  ? t.toExponential()
                  : "";
              },
            },
          },
          ui = ht.valueOrDefault,
          hi = ht.valueAtIndexOrDefault;
        function ci(t) {
          var e,
            i,
            n = [];
          for (e = 0, i = t.length; e < i; ++e) n.push(t[e].label);
          return n;
        }
        function fi(t, e, i) {
          return ht.isArray(e)
            ? ht.longestText(t, i, e)
            : t.measureText(e).width;
        }
        lt._set("scale", {
          display: !0,
          position: "left",
          offset: !1,
          gridLines: {
            display: !0,
            color: "rgba(0, 0, 0, 0.1)",
            lineWidth: 1,
            drawBorder: !0,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickMarkLength: 10,
            zeroLineWidth: 1,
            zeroLineColor: "rgba(0,0,0,0.25)",
            zeroLineBorderDash: [],
            zeroLineBorderDashOffset: 0,
            offsetGridLines: !1,
            borderDash: [],
            borderDashOffset: 0,
          },
          scaleLabel: {
            display: !1,
            labelString: "",
            padding: { top: 4, bottom: 4 },
          },
          ticks: {
            beginAtZero: !1,
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            padding: 0,
            reverse: !1,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 0,
            labelOffset: 0,
            callback: di.formatters.values,
            minor: {},
            major: {},
          },
        });
        var gi = mt.extend({
            getPadding: function() {
              return {
                left: this.paddingLeft || 0,
                top: this.paddingTop || 0,
                right: this.paddingRight || 0,
                bottom: this.paddingBottom || 0,
              };
            },
            getTicks: function() {
              return this._ticks;
            },
            mergeTicksOptions: function() {
              var t = this.options.ticks;
              for (var e in (!1 === t.minor && (t.minor = { display: !1 }),
              !1 === t.major && (t.major = { display: !1 }),
              t))
                "major" !== e &&
                  "minor" !== e &&
                  (void 0 === t.minor[e] && (t.minor[e] = t[e]),
                  void 0 === t.major[e] && (t.major[e] = t[e]));
            },
            beforeUpdate: function() {
              ht.callback(this.options.beforeUpdate, [this]);
            },
            update: function(t, e, i) {
              var n,
                a,
                o,
                r,
                s,
                l,
                d = this;
              for (
                d.beforeUpdate(),
                  d.maxWidth = t,
                  d.maxHeight = e,
                  d.margins = ht.extend(
                    { left: 0, right: 0, top: 0, bottom: 0 },
                    i
                  ),
                  d._maxLabelLines = 0,
                  d.longestLabelWidth = 0,
                  d.longestTextCache = d.longestTextCache || {},
                  d.beforeSetDimensions(),
                  d.setDimensions(),
                  d.afterSetDimensions(),
                  d.beforeDataLimits(),
                  d.determineDataLimits(),
                  d.afterDataLimits(),
                  d.beforeBuildTicks(),
                  s = d.buildTicks() || [],
                  s = d.afterBuildTicks(s) || s,
                  d.beforeTickToLabelConversion(),
                  o = d.convertTicksToLabels(s) || d.ticks,
                  d.afterTickToLabelConversion(),
                  d.ticks = o,
                  n = 0,
                  a = o.length;
                n < a;
                ++n
              )
                (r = o[n]),
                  (l = s[n])
                    ? (l.label = r)
                    : s.push((l = { label: r, major: !1 }));
              return (
                (d._ticks = s),
                d.beforeCalculateTickRotation(),
                d.calculateTickRotation(),
                d.afterCalculateTickRotation(),
                d.beforeFit(),
                d.fit(),
                d.afterFit(),
                d.afterUpdate(),
                d.minSize
              );
            },
            afterUpdate: function() {
              ht.callback(this.options.afterUpdate, [this]);
            },
            beforeSetDimensions: function() {
              ht.callback(this.options.beforeSetDimensions, [this]);
            },
            setDimensions: function() {
              var t = this;
              t.isHorizontal()
                ? ((t.width = t.maxWidth), (t.left = 0), (t.right = t.width))
                : ((t.height = t.maxHeight),
                  (t.top = 0),
                  (t.bottom = t.height)),
                (t.paddingLeft = 0),
                (t.paddingTop = 0),
                (t.paddingRight = 0),
                (t.paddingBottom = 0);
            },
            afterSetDimensions: function() {
              ht.callback(this.options.afterSetDimensions, [this]);
            },
            beforeDataLimits: function() {
              ht.callback(this.options.beforeDataLimits, [this]);
            },
            determineDataLimits: ht.noop,
            afterDataLimits: function() {
              ht.callback(this.options.afterDataLimits, [this]);
            },
            beforeBuildTicks: function() {
              ht.callback(this.options.beforeBuildTicks, [this]);
            },
            buildTicks: ht.noop,
            afterBuildTicks: function(t) {
              var e = this;
              return ht.isArray(t) && t.length
                ? ht.callback(e.options.afterBuildTicks, [e, t])
                : ((e.ticks =
                    ht.callback(e.options.afterBuildTicks, [e, e.ticks]) ||
                    e.ticks),
                  t);
            },
            beforeTickToLabelConversion: function() {
              ht.callback(this.options.beforeTickToLabelConversion, [this]);
            },
            convertTicksToLabels: function() {
              var t = this.options.ticks;
              this.ticks = this.ticks.map(t.userCallback || t.callback, this);
            },
            afterTickToLabelConversion: function() {
              ht.callback(this.options.afterTickToLabelConversion, [this]);
            },
            beforeCalculateTickRotation: function() {
              ht.callback(this.options.beforeCalculateTickRotation, [this]);
            },
            calculateTickRotation: function() {
              var t = this,
                e = t.ctx,
                i = t.options.ticks,
                n = ci(t._ticks),
                a = ht.options._parseFont(i);
              e.font = a.string;
              var o = i.minRotation || 0;
              if (n.length && t.options.display && t.isHorizontal())
                for (
                  var r,
                    s = ht.longestText(e, a.string, n, t.longestTextCache),
                    l = s,
                    d = t.getPixelForTick(1) - t.getPixelForTick(0) - 6;
                  l > d && o < i.maxRotation;

                ) {
                  var u = ht.toRadians(o);
                  if (((r = Math.cos(u)), Math.sin(u) * s > t.maxHeight)) {
                    o--;
                    break;
                  }
                  o++, (l = r * s);
                }
              t.labelRotation = o;
            },
            afterCalculateTickRotation: function() {
              ht.callback(this.options.afterCalculateTickRotation, [this]);
            },
            beforeFit: function() {
              ht.callback(this.options.beforeFit, [this]);
            },
            fit: function() {
              var t = this,
                e = (t.minSize = { width: 0, height: 0 }),
                i = ci(t._ticks),
                n = t.options,
                a = n.ticks,
                o = n.scaleLabel,
                r = n.gridLines,
                s = t._isVisible(),
                l = n.position,
                d = t.isHorizontal(),
                u = ht.options._parseFont,
                h = u(a),
                c = n.gridLines.tickMarkLength;
              if (
                ((e.width = d
                  ? t.isFullWidth()
                    ? t.maxWidth - t.margins.left - t.margins.right
                    : t.maxWidth
                  : s && r.drawTicks
                  ? c
                  : 0),
                (e.height = d ? (s && r.drawTicks ? c : 0) : t.maxHeight),
                o.display && s)
              ) {
                var f = u(o),
                  g = ht.options.toPadding(o.padding),
                  p = f.lineHeight + g.height;
                d ? (e.height += p) : (e.width += p);
              }
              if (a.display && s) {
                var m = ht.longestText(t.ctx, h.string, i, t.longestTextCache),
                  v = ht.numberOfLabelLines(i),
                  b = 0.5 * h.size,
                  x = t.options.ticks.padding;
                if (((t._maxLabelLines = v), (t.longestLabelWidth = m), d)) {
                  var y = ht.toRadians(t.labelRotation),
                    k = Math.cos(y),
                    w = Math.sin(y) * m + h.lineHeight * v + b;
                  (e.height = Math.min(t.maxHeight, e.height + w + x)),
                    (t.ctx.font = h.string);
                  var M,
                    _,
                    C = fi(t.ctx, i[0], h.string),
                    S = fi(t.ctx, i[i.length - 1], h.string),
                    P = t.getPixelForTick(0) - t.left,
                    I = t.right - t.getPixelForTick(i.length - 1);
                  0 !== t.labelRotation
                    ? ((M = "bottom" === l ? k * C : k * b),
                      (_ = "bottom" === l ? k * b : k * S))
                    : ((M = C / 2), (_ = S / 2)),
                    (t.paddingLeft = Math.max(M - P, 0) + 3),
                    (t.paddingRight = Math.max(_ - I, 0) + 3);
                } else
                  a.mirror ? (m = 0) : (m += x + b),
                    (e.width = Math.min(t.maxWidth, e.width + m)),
                    (t.paddingTop = h.size / 2),
                    (t.paddingBottom = h.size / 2);
              }
              t.handleMargins(), (t.width = e.width), (t.height = e.height);
            },
            handleMargins: function() {
              var t = this;
              t.margins &&
                ((t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0)),
                (t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0)),
                (t.paddingRight = Math.max(
                  t.paddingRight - t.margins.right,
                  0
                )),
                (t.paddingBottom = Math.max(
                  t.paddingBottom - t.margins.bottom,
                  0
                )));
            },
            afterFit: function() {
              ht.callback(this.options.afterFit, [this]);
            },
            isHorizontal: function() {
              return (
                "top" === this.options.position ||
                "bottom" === this.options.position
              );
            },
            isFullWidth: function() {
              return this.options.fullWidth;
            },
            getRightValue: function(t) {
              if (ht.isNullOrUndef(t)) return NaN;
              if (("number" == typeof t || t instanceof Number) && !isFinite(t))
                return NaN;
              if (t)
                if (this.isHorizontal()) {
                  if (void 0 !== t.x) return this.getRightValue(t.x);
                } else if (void 0 !== t.y) return this.getRightValue(t.y);
              return t;
            },
            getLabelForIndex: ht.noop,
            getPixelForValue: ht.noop,
            getValueForPixel: ht.noop,
            getPixelForTick: function(t) {
              var e = this,
                i = e.options.offset;
              if (e.isHorizontal()) {
                var n =
                    (e.width - (e.paddingLeft + e.paddingRight)) /
                    Math.max(e._ticks.length - (i ? 0 : 1), 1),
                  a = n * t + e.paddingLeft;
                i && (a += n / 2);
                var o = e.left + a;
                return (o += e.isFullWidth() ? e.margins.left : 0);
              }
              var r = e.height - (e.paddingTop + e.paddingBottom);
              return e.top + t * (r / (e._ticks.length - 1));
            },
            getPixelForDecimal: function(t) {
              var e = this;
              if (e.isHorizontal()) {
                var i =
                    (e.width - (e.paddingLeft + e.paddingRight)) * t +
                    e.paddingLeft,
                  n = e.left + i;
                return (n += e.isFullWidth() ? e.margins.left : 0);
              }
              return e.top + t * e.height;
            },
            getBasePixel: function() {
              return this.getPixelForValue(this.getBaseValue());
            },
            getBaseValue: function() {
              var t = this.min,
                e = this.max;
              return this.beginAtZero
                ? 0
                : t < 0 && e < 0
                ? e
                : t > 0 && e > 0
                ? t
                : 0;
            },
            _autoSkip: function(t) {
              var e,
                i,
                n = this,
                a = n.isHorizontal(),
                o = n.options.ticks.minor,
                r = t.length,
                s = !1,
                l = o.maxTicksLimit,
                d = n._tickSize() * (r - 1),
                u = a
                  ? n.width - (n.paddingLeft + n.paddingRight)
                  : n.height - (n.paddingTop + n.PaddingBottom),
                h = [];
              for (
                d > u && (s = 1 + Math.floor(d / u)),
                  r > l && (s = Math.max(s, 1 + Math.floor(r / l))),
                  e = 0;
                e < r;
                e++
              )
                (i = t[e]), s > 1 && e % s > 0 && delete i.label, h.push(i);
              return h;
            },
            _tickSize: function() {
              var t = this,
                e = t.isHorizontal(),
                i = t.options.ticks.minor,
                n = ht.toRadians(t.labelRotation),
                a = Math.abs(Math.cos(n)),
                o = Math.abs(Math.sin(n)),
                r = i.autoSkipPadding || 0,
                s = t.longestLabelWidth + r || 0,
                l = ht.options._parseFont(i),
                d = t._maxLabelLines * l.lineHeight + r || 0;
              return e
                ? d * a > s * o
                  ? s / a
                  : d / o
                : d * o < s * a
                ? d / a
                : s / o;
            },
            _isVisible: function() {
              var t,
                e,
                i,
                n = this.chart,
                a = this.options.display;
              if ("auto" !== a) return !!a;
              for (t = 0, e = n.data.datasets.length; t < e; ++t)
                if (
                  n.isDatasetVisible(t) &&
                  ((i = n.getDatasetMeta(t)).xAxisID === this.id ||
                    i.yAxisID === this.id)
                )
                  return !0;
              return !1;
            },
            draw: function(t) {
              var e = this,
                i = e.options;
              if (e._isVisible()) {
                var n,
                  a,
                  o,
                  r = e.chart,
                  s = e.ctx,
                  l = lt.global.defaultFontColor,
                  d = i.ticks.minor,
                  u = i.ticks.major || d,
                  h = i.gridLines,
                  c = i.scaleLabel,
                  f = i.position,
                  g = 0 !== e.labelRotation,
                  p = d.mirror,
                  m = e.isHorizontal(),
                  v = ht.options._parseFont,
                  b =
                    d.display && d.autoSkip
                      ? e._autoSkip(e.getTicks())
                      : e.getTicks(),
                  x = ui(d.fontColor, l),
                  y = v(d),
                  k = y.lineHeight,
                  w = ui(u.fontColor, l),
                  M = v(u),
                  _ = d.padding,
                  C = d.labelOffset,
                  S = h.drawTicks ? h.tickMarkLength : 0,
                  P = ui(c.fontColor, l),
                  I = v(c),
                  A = ht.options.toPadding(c.padding),
                  D = ht.toRadians(e.labelRotation),
                  T = [],
                  F = h.drawBorder ? hi(h.lineWidth, 0, 0) : 0,
                  L = ht._alignPixel;
                "top" === f
                  ? ((n = L(r, e.bottom, F)),
                    (a = e.bottom - S),
                    (o = n - F / 2))
                  : "bottom" === f
                  ? ((n = L(r, e.top, F)), (a = n + F / 2), (o = e.top + S))
                  : "left" === f
                  ? ((n = L(r, e.right, F)), (a = e.right - S), (o = n - F / 2))
                  : ((n = L(r, e.left, F)), (a = n + F / 2), (o = e.left + S));
                if (
                  (ht.each(b, function(n, s) {
                    if (!ht.isNullOrUndef(n.label)) {
                      var l,
                        d,
                        u,
                        c,
                        v,
                        b,
                        x,
                        y,
                        w,
                        M,
                        P,
                        I,
                        A,
                        O,
                        R,
                        B,
                        z = n.label;
                      s === e.zeroLineIndex && i.offset === h.offsetGridLines
                        ? ((l = h.zeroLineWidth),
                          (d = h.zeroLineColor),
                          (u = h.zeroLineBorderDash || []),
                          (c = h.zeroLineBorderDashOffset || 0))
                        : ((l = hi(h.lineWidth, s)),
                          (d = hi(h.color, s)),
                          (u = h.borderDash || []),
                          (c = h.borderDashOffset || 0));
                      var W = ht.isArray(z) ? z.length : 1,
                        N = (function(t, e, i) {
                          var n = t.getPixelForTick(e);
                          return (
                            i &&
                              (1 === t.getTicks().length
                                ? (n -= t.isHorizontal()
                                    ? Math.max(n - t.left, t.right - n)
                                    : Math.max(n - t.top, t.bottom - n))
                                : (n -=
                                    0 === e
                                      ? (t.getPixelForTick(1) - n) / 2
                                      : (n - t.getPixelForTick(e - 1)) / 2)),
                            n
                          );
                        })(e, s, h.offsetGridLines);
                      if (m) {
                        var V = S + _;
                        N < e.left - 1e-7 && (d = "rgba(0,0,0,0)"),
                          (v = x = w = P = L(r, N, l)),
                          (b = a),
                          (y = o),
                          (A = e.getPixelForTick(s) + C),
                          "top" === f
                            ? ((M = L(r, t.top, F) + F / 2),
                              (I = t.bottom),
                              (R = ((g ? 1 : 0.5) - W) * k),
                              (B = g ? "left" : "center"),
                              (O = e.bottom - V))
                            : ((M = t.top),
                              (I = L(r, t.bottom, F) - F / 2),
                              (R = (g ? 0 : 0.5) * k),
                              (B = g ? "right" : "center"),
                              (O = e.top + V));
                      } else {
                        var E = (p ? 0 : S) + _;
                        N < e.top - 1e-7 && (d = "rgba(0,0,0,0)"),
                          (v = a),
                          (x = o),
                          (b = y = M = I = L(r, N, l)),
                          (O = e.getPixelForTick(s) + C),
                          (R = ((1 - W) * k) / 2),
                          "left" === f
                            ? ((w = L(r, t.left, F) + F / 2),
                              (P = t.right),
                              (B = p ? "left" : "right"),
                              (A = e.right - E))
                            : ((w = t.left),
                              (P = L(r, t.right, F) - F / 2),
                              (B = p ? "right" : "left"),
                              (A = e.left + E));
                      }
                      T.push({
                        tx1: v,
                        ty1: b,
                        tx2: x,
                        ty2: y,
                        x1: w,
                        y1: M,
                        x2: P,
                        y2: I,
                        labelX: A,
                        labelY: O,
                        glWidth: l,
                        glColor: d,
                        glBorderDash: u,
                        glBorderDashOffset: c,
                        rotation: -1 * D,
                        label: z,
                        major: n.major,
                        textOffset: R,
                        textAlign: B,
                      });
                    }
                  }),
                  ht.each(T, function(t) {
                    var e = t.glWidth,
                      i = t.glColor;
                    if (
                      (h.display &&
                        e &&
                        i &&
                        (s.save(),
                        (s.lineWidth = e),
                        (s.strokeStyle = i),
                        s.setLineDash &&
                          (s.setLineDash(t.glBorderDash),
                          (s.lineDashOffset = t.glBorderDashOffset)),
                        s.beginPath(),
                        h.drawTicks &&
                          (s.moveTo(t.tx1, t.ty1), s.lineTo(t.tx2, t.ty2)),
                        h.drawOnChartArea &&
                          (s.moveTo(t.x1, t.y1), s.lineTo(t.x2, t.y2)),
                        s.stroke(),
                        s.restore()),
                      d.display)
                    ) {
                      s.save(),
                        s.translate(t.labelX, t.labelY),
                        s.rotate(t.rotation),
                        (s.font = t.major ? M.string : y.string),
                        (s.fillStyle = t.major ? w : x),
                        (s.textBaseline = "middle"),
                        (s.textAlign = t.textAlign);
                      var n = t.label,
                        a = t.textOffset;
                      if (ht.isArray(n))
                        for (var o = 0; o < n.length; ++o)
                          s.fillText("" + n[o], 0, a), (a += k);
                      else s.fillText(n, 0, a);
                      s.restore();
                    }
                  }),
                  c.display)
                ) {
                  var O,
                    R,
                    B = 0,
                    z = I.lineHeight / 2;
                  if (m)
                    (O = e.left + (e.right - e.left) / 2),
                      (R =
                        "bottom" === f
                          ? e.bottom - z - A.bottom
                          : e.top + z + A.top);
                  else {
                    var W = "left" === f;
                    (O = W ? e.left + z + A.top : e.right - z - A.top),
                      (R = e.top + (e.bottom - e.top) / 2),
                      (B = W ? -0.5 * Math.PI : 0.5 * Math.PI);
                  }
                  s.save(),
                    s.translate(O, R),
                    s.rotate(B),
                    (s.textAlign = "center"),
                    (s.textBaseline = "middle"),
                    (s.fillStyle = P),
                    (s.font = I.string),
                    s.fillText(c.labelString, 0, 0),
                    s.restore();
                }
                if (F) {
                  var N,
                    V,
                    E,
                    H,
                    j = F,
                    q = hi(h.lineWidth, b.length - 1, 0);
                  m
                    ? ((N = L(r, e.left, j) - j / 2),
                      (V = L(r, e.right, q) + q / 2),
                      (E = H = n))
                    : ((E = L(r, e.top, j) - j / 2),
                      (H = L(r, e.bottom, q) + q / 2),
                      (N = V = n)),
                    (s.lineWidth = F),
                    (s.strokeStyle = hi(h.color, 0)),
                    s.beginPath(),
                    s.moveTo(N, E),
                    s.lineTo(V, H),
                    s.stroke();
                }
              }
            },
          }),
          pi = gi.extend({
            getLabels: function() {
              var t = this.chart.data;
              return (
                this.options.labels ||
                (this.isHorizontal() ? t.xLabels : t.yLabels) ||
                t.labels
              );
            },
            determineDataLimits: function() {
              var t,
                e = this,
                i = e.getLabels();
              (e.minIndex = 0),
                (e.maxIndex = i.length - 1),
                void 0 !== e.options.ticks.min &&
                  ((t = i.indexOf(e.options.ticks.min)),
                  (e.minIndex = -1 !== t ? t : e.minIndex)),
                void 0 !== e.options.ticks.max &&
                  ((t = i.indexOf(e.options.ticks.max)),
                  (e.maxIndex = -1 !== t ? t : e.maxIndex)),
                (e.min = i[e.minIndex]),
                (e.max = i[e.maxIndex]);
            },
            buildTicks: function() {
              var t = this,
                e = t.getLabels();
              t.ticks =
                0 === t.minIndex && t.maxIndex === e.length - 1
                  ? e
                  : e.slice(t.minIndex, t.maxIndex + 1);
            },
            getLabelForIndex: function(t, e) {
              var i = this,
                n = i.chart;
              return n.getDatasetMeta(e).controller._getValueScaleId() === i.id
                ? i.getRightValue(n.data.datasets[e].data[t])
                : i.ticks[t - i.minIndex];
            },
            getPixelForValue: function(t, e) {
              var i,
                n = this,
                a = n.options.offset,
                o = Math.max(n.maxIndex + 1 - n.minIndex - (a ? 0 : 1), 1);
              if (
                (null != t && (i = n.isHorizontal() ? t.x : t.y),
                void 0 !== i || (void 0 !== t && isNaN(e)))
              ) {
                t = i || t;
                var r = n.getLabels().indexOf(t);
                e = -1 !== r ? r : e;
              }
              if (n.isHorizontal()) {
                var s = n.width / o,
                  l = s * (e - n.minIndex);
                return a && (l += s / 2), n.left + l;
              }
              var d = n.height / o,
                u = d * (e - n.minIndex);
              return a && (u += d / 2), n.top + u;
            },
            getPixelForTick: function(t) {
              return this.getPixelForValue(
                this.ticks[t],
                t + this.minIndex,
                null
              );
            },
            getValueForPixel: function(t) {
              var e = this,
                i = e.options.offset,
                n = Math.max(e._ticks.length - (i ? 0 : 1), 1),
                a = e.isHorizontal(),
                o = (a ? e.width : e.height) / n;
              return (
                (t -= a ? e.left : e.top),
                i && (t -= o / 2),
                (t <= 0 ? 0 : Math.round(t / o)) + e.minIndex
              );
            },
            getBasePixel: function() {
              return this.bottom;
            },
          }),
          mi = { position: "bottom" };
        pi._defaults = mi;
        var vi = ht.noop,
          bi = ht.isNullOrUndef,
          xi = gi.extend({
            getRightValue: function(t) {
              return "string" == typeof t
                ? +t
                : gi.prototype.getRightValue.call(this, t);
            },
            handleTickRangeOptions: function() {
              var t = this,
                e = t.options.ticks;
              if (e.beginAtZero) {
                var i = ht.sign(t.min),
                  n = ht.sign(t.max);
                i < 0 && n < 0 ? (t.max = 0) : i > 0 && n > 0 && (t.min = 0);
              }
              var a = void 0 !== e.min || void 0 !== e.suggestedMin,
                o = void 0 !== e.max || void 0 !== e.suggestedMax;
              void 0 !== e.min
                ? (t.min = e.min)
                : void 0 !== e.suggestedMin &&
                  (null === t.min
                    ? (t.min = e.suggestedMin)
                    : (t.min = Math.min(t.min, e.suggestedMin))),
                void 0 !== e.max
                  ? (t.max = e.max)
                  : void 0 !== e.suggestedMax &&
                    (null === t.max
                      ? (t.max = e.suggestedMax)
                      : (t.max = Math.max(t.max, e.suggestedMax))),
                a !== o &&
                  t.min >= t.max &&
                  (a ? (t.max = t.min + 1) : (t.min = t.max - 1)),
                t.min === t.max && (t.max++, e.beginAtZero || t.min--);
            },
            getTickLimit: function() {
              var t,
                e = this.options.ticks,
                i = e.stepSize,
                n = e.maxTicksLimit;
              return (
                i
                  ? (t = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1)
                  : ((t = this._computeTickLimit()), (n = n || 11)),
                n && (t = Math.min(n, t)),
                t
              );
            },
            _computeTickLimit: function() {
              return Number.POSITIVE_INFINITY;
            },
            handleDirectionalChanges: vi,
            buildTicks: function() {
              var t = this,
                e = t.options.ticks,
                i = t.getTickLimit(),
                n = {
                  maxTicks: (i = Math.max(2, i)),
                  min: e.min,
                  max: e.max,
                  precision: e.precision,
                  stepSize: ht.valueOrDefault(e.fixedStepSize, e.stepSize),
                },
                a = (t.ticks = (function(t, e) {
                  var i,
                    n,
                    a,
                    o,
                    r = [],
                    s = t.stepSize,
                    l = s || 1,
                    d = t.maxTicks - 1,
                    u = t.min,
                    h = t.max,
                    c = t.precision,
                    f = e.min,
                    g = e.max,
                    p = ht.niceNum((g - f) / d / l) * l;
                  if (p < 1e-14 && bi(u) && bi(h)) return [f, g];
                  (o = Math.ceil(g / p) - Math.floor(f / p)) > d &&
                    (p = ht.niceNum((o * p) / d / l) * l),
                    s || bi(c)
                      ? (i = Math.pow(10, ht._decimalPlaces(p)))
                      : ((i = Math.pow(10, c)), (p = Math.ceil(p * i) / i)),
                    (n = Math.floor(f / p) * p),
                    (a = Math.ceil(g / p) * p),
                    s &&
                      (!bi(u) && ht.almostWhole(u / p, p / 1e3) && (n = u),
                      !bi(h) && ht.almostWhole(h / p, p / 1e3) && (a = h)),
                    (o = (a - n) / p),
                    (o = ht.almostEquals(o, Math.round(o), p / 1e3)
                      ? Math.round(o)
                      : Math.ceil(o)),
                    (n = Math.round(n * i) / i),
                    (a = Math.round(a * i) / i),
                    r.push(bi(u) ? n : u);
                  for (var m = 1; m < o; ++m)
                    r.push(Math.round((n + m * p) * i) / i);
                  return r.push(bi(h) ? a : h), r;
                })(n, t));
              t.handleDirectionalChanges(),
                (t.max = ht.max(a)),
                (t.min = ht.min(a)),
                e.reverse
                  ? (a.reverse(), (t.start = t.max), (t.end = t.min))
                  : ((t.start = t.min), (t.end = t.max));
            },
            convertTicksToLabels: function() {
              var t = this;
              (t.ticksAsNumbers = t.ticks.slice()),
                (t.zeroLineIndex = t.ticks.indexOf(0)),
                gi.prototype.convertTicksToLabels.call(t);
            },
          }),
          yi = { position: "left", ticks: { callback: di.formatters.linear } },
          ki = xi.extend({
            determineDataLimits: function() {
              var t = this,
                e = t.options,
                i = t.chart,
                n = i.data.datasets,
                a = t.isHorizontal();
              function o(e) {
                return a ? e.xAxisID === t.id : e.yAxisID === t.id;
              }
              (t.min = null), (t.max = null);
              var r = e.stacked;
              if (
                (void 0 === r &&
                  ht.each(n, function(t, e) {
                    if (!r) {
                      var n = i.getDatasetMeta(e);
                      i.isDatasetVisible(e) &&
                        o(n) &&
                        void 0 !== n.stack &&
                        (r = !0);
                    }
                  }),
                e.stacked || r)
              ) {
                var s = {};
                ht.each(n, function(n, a) {
                  var r = i.getDatasetMeta(a),
                    l = [
                      r.type,
                      void 0 === e.stacked && void 0 === r.stack ? a : "",
                      r.stack,
                    ].join(".");
                  void 0 === s[l] &&
                    (s[l] = { positiveValues: [], negativeValues: [] });
                  var d = s[l].positiveValues,
                    u = s[l].negativeValues;
                  i.isDatasetVisible(a) &&
                    o(r) &&
                    ht.each(n.data, function(i, n) {
                      var a = +t.getRightValue(i);
                      isNaN(a) ||
                        r.data[n].hidden ||
                        ((d[n] = d[n] || 0),
                        (u[n] = u[n] || 0),
                        e.relativePoints
                          ? (d[n] = 100)
                          : a < 0
                          ? (u[n] += a)
                          : (d[n] += a));
                    });
                }),
                  ht.each(s, function(e) {
                    var i = e.positiveValues.concat(e.negativeValues),
                      n = ht.min(i),
                      a = ht.max(i);
                    (t.min = null === t.min ? n : Math.min(t.min, n)),
                      (t.max = null === t.max ? a : Math.max(t.max, a));
                  });
              } else
                ht.each(n, function(e, n) {
                  var a = i.getDatasetMeta(n);
                  i.isDatasetVisible(n) &&
                    o(a) &&
                    ht.each(e.data, function(e, i) {
                      var n = +t.getRightValue(e);
                      isNaN(n) ||
                        a.data[i].hidden ||
                        (null === t.min
                          ? (t.min = n)
                          : n < t.min && (t.min = n),
                        null === t.max
                          ? (t.max = n)
                          : n > t.max && (t.max = n));
                    });
                });
              (t.min = isFinite(t.min) && !isNaN(t.min) ? t.min : 0),
                (t.max = isFinite(t.max) && !isNaN(t.max) ? t.max : 1),
                this.handleTickRangeOptions();
            },
            _computeTickLimit: function() {
              var t;
              return this.isHorizontal()
                ? Math.ceil(this.width / 40)
                : ((t = ht.options._parseFont(this.options.ticks)),
                  Math.ceil(this.height / t.lineHeight));
            },
            handleDirectionalChanges: function() {
              this.isHorizontal() || this.ticks.reverse();
            },
            getLabelForIndex: function(t, e) {
              return +this.getRightValue(this.chart.data.datasets[e].data[t]);
            },
            getPixelForValue: function(t) {
              var e = this,
                i = e.start,
                n = +e.getRightValue(t),
                a = e.end - i;
              return e.isHorizontal()
                ? e.left + (e.width / a) * (n - i)
                : e.bottom - (e.height / a) * (n - i);
            },
            getValueForPixel: function(t) {
              var e = this,
                i = e.isHorizontal(),
                n = i ? e.width : e.height,
                a = (i ? t - e.left : e.bottom - t) / n;
              return e.start + (e.end - e.start) * a;
            },
            getPixelForTick: function(t) {
              return this.getPixelForValue(this.ticksAsNumbers[t]);
            },
          }),
          wi = yi;
        ki._defaults = wi;
        var Mi = ht.valueOrDefault,
          _i = {
            position: "left",
            ticks: { callback: di.formatters.logarithmic },
          };
        function Ci(t, e) {
          return ht.isFinite(t) && t >= 0 ? t : e;
        }
        var Si = gi.extend({
            determineDataLimits: function() {
              var t = this,
                e = t.options,
                i = t.chart,
                n = i.data.datasets,
                a = t.isHorizontal();
              function o(e) {
                return a ? e.xAxisID === t.id : e.yAxisID === t.id;
              }
              (t.min = null), (t.max = null), (t.minNotZero = null);
              var r = e.stacked;
              if (
                (void 0 === r &&
                  ht.each(n, function(t, e) {
                    if (!r) {
                      var n = i.getDatasetMeta(e);
                      i.isDatasetVisible(e) &&
                        o(n) &&
                        void 0 !== n.stack &&
                        (r = !0);
                    }
                  }),
                e.stacked || r)
              ) {
                var s = {};
                ht.each(n, function(n, a) {
                  var r = i.getDatasetMeta(a),
                    l = [
                      r.type,
                      void 0 === e.stacked && void 0 === r.stack ? a : "",
                      r.stack,
                    ].join(".");
                  i.isDatasetVisible(a) &&
                    o(r) &&
                    (void 0 === s[l] && (s[l] = []),
                    ht.each(n.data, function(e, i) {
                      var n = s[l],
                        a = +t.getRightValue(e);
                      isNaN(a) ||
                        r.data[i].hidden ||
                        a < 0 ||
                        ((n[i] = n[i] || 0), (n[i] += a));
                    }));
                }),
                  ht.each(s, function(e) {
                    if (e.length > 0) {
                      var i = ht.min(e),
                        n = ht.max(e);
                      (t.min = null === t.min ? i : Math.min(t.min, i)),
                        (t.max = null === t.max ? n : Math.max(t.max, n));
                    }
                  });
              } else
                ht.each(n, function(e, n) {
                  var a = i.getDatasetMeta(n);
                  i.isDatasetVisible(n) &&
                    o(a) &&
                    ht.each(e.data, function(e, i) {
                      var n = +t.getRightValue(e);
                      isNaN(n) ||
                        a.data[i].hidden ||
                        n < 0 ||
                        (null === t.min
                          ? (t.min = n)
                          : n < t.min && (t.min = n),
                        null === t.max ? (t.max = n) : n > t.max && (t.max = n),
                        0 !== n &&
                          (null === t.minNotZero || n < t.minNotZero) &&
                          (t.minNotZero = n));
                    });
                });
              this.handleTickRangeOptions();
            },
            handleTickRangeOptions: function() {
              var t = this,
                e = t.options.ticks;
              (t.min = Ci(e.min, t.min)),
                (t.max = Ci(e.max, t.max)),
                t.min === t.max &&
                  (0 !== t.min && null !== t.min
                    ? ((t.min = Math.pow(10, Math.floor(ht.log10(t.min)) - 1)),
                      (t.max = Math.pow(10, Math.floor(ht.log10(t.max)) + 1)))
                    : ((t.min = 1), (t.max = 10))),
                null === t.min &&
                  (t.min = Math.pow(10, Math.floor(ht.log10(t.max)) - 1)),
                null === t.max &&
                  (t.max =
                    0 !== t.min
                      ? Math.pow(10, Math.floor(ht.log10(t.min)) + 1)
                      : 10),
                null === t.minNotZero &&
                  (t.min > 0
                    ? (t.minNotZero = t.min)
                    : t.max < 1
                    ? (t.minNotZero = Math.pow(10, Math.floor(ht.log10(t.max))))
                    : (t.minNotZero = 1));
            },
            buildTicks: function() {
              var t = this,
                e = t.options.ticks,
                i = !t.isHorizontal(),
                n = { min: Ci(e.min), max: Ci(e.max) },
                a = (t.ticks = (function(t, e) {
                  var i,
                    n,
                    a = [],
                    o = Mi(t.min, Math.pow(10, Math.floor(ht.log10(e.min)))),
                    r = Math.floor(ht.log10(e.max)),
                    s = Math.ceil(e.max / Math.pow(10, r));
                  0 === o
                    ? ((i = Math.floor(ht.log10(e.minNotZero))),
                      (n = Math.floor(e.minNotZero / Math.pow(10, i))),
                      a.push(o),
                      (o = n * Math.pow(10, i)))
                    : ((i = Math.floor(ht.log10(o))),
                      (n = Math.floor(o / Math.pow(10, i))));
                  var l = i < 0 ? Math.pow(10, Math.abs(i)) : 1;
                  do {
                    a.push(o),
                      10 == ++n && ((n = 1), (l = ++i >= 0 ? 1 : l)),
                      (o = Math.round(n * Math.pow(10, i) * l) / l);
                  } while (i < r || (i === r && n < s));
                  var d = Mi(t.max, o);
                  return a.push(d), a;
                })(n, t));
              (t.max = ht.max(a)),
                (t.min = ht.min(a)),
                e.reverse
                  ? ((i = !i), (t.start = t.max), (t.end = t.min))
                  : ((t.start = t.min), (t.end = t.max)),
                i && a.reverse();
            },
            convertTicksToLabels: function() {
              (this.tickValues = this.ticks.slice()),
                gi.prototype.convertTicksToLabels.call(this);
            },
            getLabelForIndex: function(t, e) {
              return +this.getRightValue(this.chart.data.datasets[e].data[t]);
            },
            getPixelForTick: function(t) {
              return this.getPixelForValue(this.tickValues[t]);
            },
            _getFirstTickValue: function(t) {
              var e = Math.floor(ht.log10(t));
              return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e);
            },
            getPixelForValue: function(t) {
              var e,
                i,
                n,
                a,
                o,
                r = this,
                s = r.options.ticks,
                l = s.reverse,
                d = ht.log10,
                u = r._getFirstTickValue(r.minNotZero),
                h = 0;
              return (
                (t = +r.getRightValue(t)),
                l
                  ? ((n = r.end), (a = r.start), (o = -1))
                  : ((n = r.start), (a = r.end), (o = 1)),
                r.isHorizontal()
                  ? ((e = r.width), (i = l ? r.right : r.left))
                  : ((e = r.height), (o *= -1), (i = l ? r.top : r.bottom)),
                t !== n &&
                  (0 === n &&
                    ((e -= h = Mi(s.fontSize, lt.global.defaultFontSize)),
                    (n = u)),
                  0 !== t && (h += (e / (d(a) - d(n))) * (d(t) - d(n))),
                  (i += o * h)),
                i
              );
            },
            getValueForPixel: function(t) {
              var e,
                i,
                n,
                a,
                o = this,
                r = o.options.ticks,
                s = r.reverse,
                l = ht.log10,
                d = o._getFirstTickValue(o.minNotZero);
              if (
                (s
                  ? ((i = o.end), (n = o.start))
                  : ((i = o.start), (n = o.end)),
                o.isHorizontal()
                  ? ((e = o.width), (a = s ? o.right - t : t - o.left))
                  : ((e = o.height), (a = s ? t - o.top : o.bottom - t)),
                a !== i)
              ) {
                if (0 === i) {
                  var u = Mi(r.fontSize, lt.global.defaultFontSize);
                  (a -= u), (e -= u), (i = d);
                }
                (a *= l(n) - l(i)), (a /= e), (a = Math.pow(10, l(i) + a));
              }
              return a;
            },
          }),
          Pi = _i;
        Si._defaults = Pi;
        var Ii = ht.valueOrDefault,
          Ai = ht.valueAtIndexOrDefault,
          Di = ht.options.resolve,
          Ti = {
            display: !0,
            animate: !0,
            position: "chartArea",
            angleLines: {
              display: !0,
              color: "rgba(0, 0, 0, 0.1)",
              lineWidth: 1,
              borderDash: [],
              borderDashOffset: 0,
            },
            gridLines: { circular: !1 },
            ticks: {
              showLabelBackdrop: !0,
              backdropColor: "rgba(255,255,255,0.75)",
              backdropPaddingY: 2,
              backdropPaddingX: 2,
              callback: di.formatters.linear,
            },
            pointLabels: {
              display: !0,
              fontSize: 10,
              callback: function(t) {
                return t;
              },
            },
          };
        function Fi(t) {
          var e = t.options;
          return e.angleLines.display || e.pointLabels.display
            ? t.chart.data.labels.length
            : 0;
        }
        function Li(t) {
          var e = t.ticks;
          return e.display && t.display
            ? Ii(e.fontSize, lt.global.defaultFontSize) + 2 * e.backdropPaddingY
            : 0;
        }
        function Oi(t, e, i, n, a) {
          return t === n || t === a
            ? { start: e - i / 2, end: e + i / 2 }
            : t < n || t > a
            ? { start: e - i, end: e }
            : { start: e, end: e + i };
        }
        function Ri(t) {
          return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right";
        }
        function Bi(t, e, i, n) {
          var a,
            o,
            r = i.y + n / 2;
          if (ht.isArray(e))
            for (a = 0, o = e.length; a < o; ++a)
              t.fillText(e[a], i.x, r), (r += n);
          else t.fillText(e, i.x, r);
        }
        function zi(t, e, i) {
          90 === t || 270 === t
            ? (i.y -= e.h / 2)
            : (t > 270 || t < 90) && (i.y -= e.h);
        }
        function Wi(t) {
          return ht.isNumber(t) ? t : 0;
        }
        var Ni = xi.extend({
            setDimensions: function() {
              var t = this;
              (t.width = t.maxWidth),
                (t.height = t.maxHeight),
                (t.paddingTop = Li(t.options) / 2),
                (t.xCenter = Math.floor(t.width / 2)),
                (t.yCenter = Math.floor((t.height - t.paddingTop) / 2)),
                (t.drawingArea =
                  Math.min(t.height - t.paddingTop, t.width) / 2);
            },
            determineDataLimits: function() {
              var t = this,
                e = t.chart,
                i = Number.POSITIVE_INFINITY,
                n = Number.NEGATIVE_INFINITY;
              ht.each(e.data.datasets, function(a, o) {
                if (e.isDatasetVisible(o)) {
                  var r = e.getDatasetMeta(o);
                  ht.each(a.data, function(e, a) {
                    var o = +t.getRightValue(e);
                    isNaN(o) ||
                      r.data[a].hidden ||
                      ((i = Math.min(o, i)), (n = Math.max(o, n)));
                  });
                }
              }),
                (t.min = i === Number.POSITIVE_INFINITY ? 0 : i),
                (t.max = n === Number.NEGATIVE_INFINITY ? 0 : n),
                t.handleTickRangeOptions();
            },
            _computeTickLimit: function() {
              return Math.ceil(this.drawingArea / Li(this.options));
            },
            convertTicksToLabels: function() {
              var t = this;
              xi.prototype.convertTicksToLabels.call(t),
                (t.pointLabels = t.chart.data.labels.map(
                  t.options.pointLabels.callback,
                  t
                ));
            },
            getLabelForIndex: function(t, e) {
              return +this.getRightValue(this.chart.data.datasets[e].data[t]);
            },
            fit: function() {
              var t = this.options;
              t.display && t.pointLabels.display
                ? (function(t) {
                    var e,
                      i,
                      n,
                      a = ht.options._parseFont(t.options.pointLabels),
                      o = {
                        l: 0,
                        r: t.width,
                        t: 0,
                        b: t.height - t.paddingTop,
                      },
                      r = {};
                    (t.ctx.font = a.string), (t._pointLabelSizes = []);
                    var s,
                      l,
                      d,
                      u = Fi(t);
                    for (e = 0; e < u; e++) {
                      (n = t.getPointPosition(e, t.drawingArea + 5)),
                        (s = t.ctx),
                        (l = a.lineHeight),
                        (d = t.pointLabels[e] || ""),
                        (i = ht.isArray(d)
                          ? { w: ht.longestText(s, s.font, d), h: d.length * l }
                          : { w: s.measureText(d).width, h: l }),
                        (t._pointLabelSizes[e] = i);
                      var h = t.getIndexAngle(e),
                        c = ht.toDegrees(h) % 360,
                        f = Oi(c, n.x, i.w, 0, 180),
                        g = Oi(c, n.y, i.h, 90, 270);
                      f.start < o.l && ((o.l = f.start), (r.l = h)),
                        f.end > o.r && ((o.r = f.end), (r.r = h)),
                        g.start < o.t && ((o.t = g.start), (r.t = h)),
                        g.end > o.b && ((o.b = g.end), (r.b = h));
                    }
                    t.setReductions(t.drawingArea, o, r);
                  })(this)
                : this.setCenterPoint(0, 0, 0, 0);
            },
            setReductions: function(t, e, i) {
              var n = this,
                a = e.l / Math.sin(i.l),
                o = Math.max(e.r - n.width, 0) / Math.sin(i.r),
                r = -e.t / Math.cos(i.t),
                s =
                  -Math.max(e.b - (n.height - n.paddingTop), 0) / Math.cos(i.b);
              (a = Wi(a)),
                (o = Wi(o)),
                (r = Wi(r)),
                (s = Wi(s)),
                (n.drawingArea = Math.min(
                  Math.floor(t - (a + o) / 2),
                  Math.floor(t - (r + s) / 2)
                )),
                n.setCenterPoint(a, o, r, s);
            },
            setCenterPoint: function(t, e, i, n) {
              var a = this,
                o = a.width - e - a.drawingArea,
                r = t + a.drawingArea,
                s = i + a.drawingArea,
                l = a.height - a.paddingTop - n - a.drawingArea;
              (a.xCenter = Math.floor((r + o) / 2 + a.left)),
                (a.yCenter = Math.floor((s + l) / 2 + a.top + a.paddingTop));
            },
            getIndexAngle: function(t) {
              return (
                t * ((2 * Math.PI) / Fi(this)) +
                ((this.chart.options && this.chart.options.startAngle
                  ? this.chart.options.startAngle
                  : 0) *
                  Math.PI *
                  2) /
                  360
              );
            },
            getDistanceFromCenterForValue: function(t) {
              var e = this;
              if (null === t) return 0;
              var i = e.drawingArea / (e.max - e.min);
              return e.options.ticks.reverse
                ? (e.max - t) * i
                : (t - e.min) * i;
            },
            getPointPosition: function(t, e) {
              var i = this.getIndexAngle(t) - Math.PI / 2;
              return {
                x: Math.cos(i) * e + this.xCenter,
                y: Math.sin(i) * e + this.yCenter,
              };
            },
            getPointPositionForValue: function(t, e) {
              return this.getPointPosition(
                t,
                this.getDistanceFromCenterForValue(e)
              );
            },
            getBasePosition: function() {
              var t = this.min,
                e = this.max;
              return this.getPointPositionForValue(
                0,
                this.beginAtZero
                  ? 0
                  : t < 0 && e < 0
                  ? e
                  : t > 0 && e > 0
                  ? t
                  : 0
              );
            },
            draw: function() {
              var t = this,
                e = t.options,
                i = e.gridLines,
                n = e.ticks;
              if (e.display) {
                var a = t.ctx,
                  o = this.getIndexAngle(0),
                  r = ht.options._parseFont(n);
                (e.angleLines.display || e.pointLabels.display) &&
                  (function(t) {
                    var e = t.ctx,
                      i = t.options,
                      n = i.angleLines,
                      a = i.gridLines,
                      o = i.pointLabels,
                      r = Ii(n.lineWidth, a.lineWidth),
                      s = Ii(n.color, a.color),
                      l = Li(i);
                    e.save(),
                      (e.lineWidth = r),
                      (e.strokeStyle = s),
                      e.setLineDash &&
                        (e.setLineDash(Di([n.borderDash, a.borderDash, []])),
                        (e.lineDashOffset = Di([
                          n.borderDashOffset,
                          a.borderDashOffset,
                          0,
                        ])));
                    var d = t.getDistanceFromCenterForValue(
                        i.ticks.reverse ? t.min : t.max
                      ),
                      u = ht.options._parseFont(o);
                    (e.font = u.string), (e.textBaseline = "middle");
                    for (var h = Fi(t) - 1; h >= 0; h--) {
                      if (n.display && r && s) {
                        var c = t.getPointPosition(h, d);
                        e.beginPath(),
                          e.moveTo(t.xCenter, t.yCenter),
                          e.lineTo(c.x, c.y),
                          e.stroke();
                      }
                      if (o.display) {
                        var f = 0 === h ? l / 2 : 0,
                          g = t.getPointPosition(h, d + f + 5),
                          p = Ai(o.fontColor, h, lt.global.defaultFontColor);
                        e.fillStyle = p;
                        var m = t.getIndexAngle(h),
                          v = ht.toDegrees(m);
                        (e.textAlign = Ri(v)),
                          zi(v, t._pointLabelSizes[h], g),
                          Bi(e, t.pointLabels[h] || "", g, u.lineHeight);
                      }
                    }
                    e.restore();
                  })(t),
                  ht.each(t.ticks, function(e, s) {
                    if (s > 0 || n.reverse) {
                      var l = t.getDistanceFromCenterForValue(
                        t.ticksAsNumbers[s]
                      );
                      if (
                        (i.display &&
                          0 !== s &&
                          (function(t, e, i, n) {
                            var a,
                              o = t.ctx,
                              r = e.circular,
                              s = Fi(t),
                              l = Ai(e.color, n - 1),
                              d = Ai(e.lineWidth, n - 1);
                            if ((r || s) && l && d) {
                              if (
                                (o.save(),
                                (o.strokeStyle = l),
                                (o.lineWidth = d),
                                o.setLineDash &&
                                  (o.setLineDash(e.borderDash || []),
                                  (o.lineDashOffset = e.borderDashOffset || 0)),
                                o.beginPath(),
                                r)
                              )
                                o.arc(t.xCenter, t.yCenter, i, 0, 2 * Math.PI);
                              else {
                                (a = t.getPointPosition(0, i)),
                                  o.moveTo(a.x, a.y);
                                for (var u = 1; u < s; u++)
                                  (a = t.getPointPosition(u, i)),
                                    o.lineTo(a.x, a.y);
                              }
                              o.closePath(), o.stroke(), o.restore();
                            }
                          })(t, i, l, s),
                        n.display)
                      ) {
                        var d = Ii(n.fontColor, lt.global.defaultFontColor);
                        if (
                          ((a.font = r.string),
                          a.save(),
                          a.translate(t.xCenter, t.yCenter),
                          a.rotate(o),
                          n.showLabelBackdrop)
                        ) {
                          var u = a.measureText(e).width;
                          (a.fillStyle = n.backdropColor),
                            a.fillRect(
                              -u / 2 - n.backdropPaddingX,
                              -l - r.size / 2 - n.backdropPaddingY,
                              u + 2 * n.backdropPaddingX,
                              r.size + 2 * n.backdropPaddingY
                            );
                        }
                        (a.textAlign = "center"),
                          (a.textBaseline = "middle"),
                          (a.fillStyle = d),
                          a.fillText(e, 0, -l),
                          a.restore();
                      }
                    }
                  });
              }
            },
          }),
          Vi = Ti;
        Ni._defaults = Vi;
        var Ei = ht.valueOrDefault,
          Hi = Number.MIN_SAFE_INTEGER || -9007199254740991,
          ji = Number.MAX_SAFE_INTEGER || 9007199254740991,
          qi = {
            millisecond: {
              common: !0,
              size: 1,
              steps: [1, 2, 5, 10, 20, 50, 100, 250, 500],
            },
            second: { common: !0, size: 1e3, steps: [1, 2, 5, 10, 15, 30] },
            minute: { common: !0, size: 6e4, steps: [1, 2, 5, 10, 15, 30] },
            hour: { common: !0, size: 36e5, steps: [1, 2, 3, 6, 12] },
            day: { common: !0, size: 864e5, steps: [1, 2, 5] },
            week: { common: !1, size: 6048e5, steps: [1, 2, 3, 4] },
            month: { common: !0, size: 2628e6, steps: [1, 2, 3] },
            quarter: { common: !1, size: 7884e6, steps: [1, 2, 3, 4] },
            year: { common: !0, size: 3154e7 },
          },
          Yi = Object.keys(qi);
        function Ui(t, e) {
          return t - e;
        }
        function Xi(t) {
          var e,
            i,
            n,
            a = {},
            o = [];
          for (e = 0, i = t.length; e < i; ++e)
            a[(n = t[e])] || ((a[n] = !0), o.push(n));
          return o;
        }
        function Ki(t, e, i, n) {
          var a = (function(t, e, i) {
              for (var n, a, o, r = 0, s = t.length - 1; r >= 0 && r <= s; ) {
                if (((a = t[(n = (r + s) >> 1) - 1] || null), (o = t[n]), !a))
                  return { lo: null, hi: o };
                if (o[e] < i) r = n + 1;
                else {
                  if (!(a[e] > i)) return { lo: a, hi: o };
                  s = n - 1;
                }
              }
              return { lo: o, hi: null };
            })(t, e, i),
            o = a.lo ? (a.hi ? a.lo : t[t.length - 2]) : t[0],
            r = a.lo ? (a.hi ? a.hi : t[t.length - 1]) : t[1],
            s = r[e] - o[e],
            l = s ? (i - o[e]) / s : 0,
            d = (r[n] - o[n]) * l;
          return o[n] + d;
        }
        function Gi(t, e) {
          var i = t._adapter,
            n = t.options.time,
            a = n.parser,
            o = a || n.format,
            r = e;
          return (
            "function" == typeof a && (r = a(r)),
            ht.isFinite(r) ||
              (r = "string" == typeof o ? i.parse(r, o) : i.parse(r)),
            null !== r
              ? +r
              : (a ||
                  "function" != typeof o ||
                  ((r = o(e)), ht.isFinite(r) || (r = i.parse(r))),
                r)
          );
        }
        function Zi(t, e) {
          if (ht.isNullOrUndef(e)) return null;
          var i = t.options.time,
            n = Gi(t, t.getRightValue(e));
          return null === n
            ? n
            : (i.round && (n = +t._adapter.startOf(n, i.round)), n);
        }
        function $i(t) {
          for (var e = Yi.indexOf(t) + 1, i = Yi.length; e < i; ++e)
            if (qi[Yi[e]].common) return Yi[e];
        }
        function Ji(t, e, i, n) {
          var a,
            o = t._adapter,
            r = t.options,
            s = r.time,
            l =
              s.unit ||
              (function(t, e, i, n) {
                var a,
                  o,
                  r,
                  s = Yi.length;
                for (a = Yi.indexOf(t); a < s - 1; ++a)
                  if (
                    ((r = (o = qi[Yi[a]]).steps
                      ? o.steps[o.steps.length - 1]
                      : ji),
                    o.common && Math.ceil((i - e) / (r * o.size)) <= n)
                  )
                    return Yi[a];
                return Yi[s - 1];
              })(s.minUnit, e, i, n),
            d = $i(l),
            u = Ei(s.stepSize, s.unitStepSize),
            h = "week" === l && s.isoWeekday,
            c = r.ticks.major.enabled,
            f = qi[l],
            g = e,
            p = i,
            m = [];
          for (
            u ||
              (u = (function(t, e, i, n) {
                var a,
                  o,
                  r,
                  s = e - t,
                  l = qi[i],
                  d = l.size,
                  u = l.steps;
                if (!u) return Math.ceil(s / (n * d));
                for (
                  a = 0, o = u.length;
                  a < o && ((r = u[a]), !(Math.ceil(s / (d * r)) <= n));
                  ++a
                );
                return r;
              })(e, i, l, n)),
              h &&
                ((g = +o.startOf(g, "isoWeek", h)),
                (p = +o.startOf(p, "isoWeek", h))),
              g = +o.startOf(g, h ? "day" : l),
              (p = +o.startOf(p, h ? "day" : l)) < i && (p = +o.add(p, 1, l)),
              a = g,
              c &&
                d &&
                !h &&
                !s.round &&
                ((a = +o.startOf(a, d)),
                (a = +o.add(a, ~~((g - a) / (f.size * u)) * u, l)));
            a < p;
            a = +o.add(a, u, l)
          )
            m.push(+a);
          return m.push(+a), m;
        }
        var Qi = gi.extend({
            initialize: function() {
              this.mergeTicksOptions(), gi.prototype.initialize.call(this);
            },
            update: function() {
              var t = this.options,
                e = t.time || (t.time = {}),
                i = (this._adapter = new li._date(t.adapters.date));
              return (
                e.format &&
                  console.warn(
                    "options.time.format is deprecated and replaced by options.time.parser."
                  ),
                ht.mergeIf(e.displayFormats, i.formats()),
                gi.prototype.update.apply(this, arguments)
              );
            },
            getRightValue: function(t) {
              return (
                t && void 0 !== t.t && (t = t.t),
                gi.prototype.getRightValue.call(this, t)
              );
            },
            determineDataLimits: function() {
              var t,
                e,
                i,
                n,
                a,
                o,
                r = this,
                s = r.chart,
                l = r._adapter,
                d = r.options.time,
                u = d.unit || "day",
                h = ji,
                c = Hi,
                f = [],
                g = [],
                p = [],
                m = s.data.labels || [];
              for (t = 0, i = m.length; t < i; ++t) p.push(Zi(r, m[t]));
              for (t = 0, i = (s.data.datasets || []).length; t < i; ++t)
                if (s.isDatasetVisible(t))
                  if (((a = s.data.datasets[t].data), ht.isObject(a[0])))
                    for (g[t] = [], e = 0, n = a.length; e < n; ++e)
                      (o = Zi(r, a[e])), f.push(o), (g[t][e] = o);
                  else {
                    for (e = 0, n = p.length; e < n; ++e) f.push(p[e]);
                    g[t] = p.slice(0);
                  }
                else g[t] = [];
              p.length &&
                ((p = Xi(p).sort(Ui)),
                (h = Math.min(h, p[0])),
                (c = Math.max(c, p[p.length - 1]))),
                f.length &&
                  ((f = Xi(f).sort(Ui)),
                  (h = Math.min(h, f[0])),
                  (c = Math.max(c, f[f.length - 1]))),
                (h = Zi(r, d.min) || h),
                (c = Zi(r, d.max) || c),
                (h = h === ji ? +l.startOf(Date.now(), u) : h),
                (c = c === Hi ? +l.endOf(Date.now(), u) + 1 : c),
                (r.min = Math.min(h, c)),
                (r.max = Math.max(h + 1, c)),
                (r._horizontal = r.isHorizontal()),
                (r._table = []),
                (r._timestamps = { data: f, datasets: g, labels: p });
            },
            buildTicks: function() {
              var t,
                e,
                i,
                n = this,
                a = n.min,
                o = n.max,
                r = n.options,
                s = r.time,
                l = [],
                d = [];
              switch (r.ticks.source) {
                case "data":
                  l = n._timestamps.data;
                  break;
                case "labels":
                  l = n._timestamps.labels;
                  break;
                case "auto":
                default:
                  l = Ji(n, a, o, n.getLabelCapacity(a));
              }
              for (
                "ticks" === r.bounds &&
                  l.length &&
                  ((a = l[0]), (o = l[l.length - 1])),
                  a = Zi(n, s.min) || a,
                  o = Zi(n, s.max) || o,
                  t = 0,
                  e = l.length;
                t < e;
                ++t
              )
                (i = l[t]) >= a && i <= o && d.push(i);
              return (
                (n.min = a),
                (n.max = o),
                (n._unit =
                  s.unit ||
                  (function(t, e, i, n, a) {
                    var o, r;
                    for (o = Yi.length - 1; o >= Yi.indexOf(i); o--)
                      if (
                        ((r = Yi[o]),
                        qi[r].common && t._adapter.diff(a, n, r) >= e.length)
                      )
                        return r;
                    return Yi[i ? Yi.indexOf(i) : 0];
                  })(n, d, s.minUnit, n.min, n.max)),
                (n._majorUnit = $i(n._unit)),
                (n._table = (function(t, e, i, n) {
                  if ("linear" === n || !t.length)
                    return [{ time: e, pos: 0 }, { time: i, pos: 1 }];
                  var a,
                    o,
                    r,
                    s,
                    l,
                    d = [],
                    u = [e];
                  for (a = 0, o = t.length; a < o; ++a)
                    (s = t[a]) > e && s < i && u.push(s);
                  for (u.push(i), a = 0, o = u.length; a < o; ++a)
                    (l = u[a + 1]),
                      (r = u[a - 1]),
                      (s = u[a]),
                      (void 0 !== r &&
                        void 0 !== l &&
                        Math.round((l + r) / 2) === s) ||
                        d.push({ time: s, pos: a / (o - 1) });
                  return d;
                })(n._timestamps.data, a, o, r.distribution)),
                (n._offsets = (function(t, e, i, n, a) {
                  var o,
                    r,
                    s = 0,
                    l = 0;
                  return (
                    a.offset &&
                      e.length &&
                      (a.time.min ||
                        ((o = Ki(t, "time", e[0], "pos")),
                        (s =
                          1 === e.length
                            ? 1 - o
                            : (Ki(t, "time", e[1], "pos") - o) / 2)),
                      a.time.max ||
                        ((r = Ki(t, "time", e[e.length - 1], "pos")),
                        (l =
                          1 === e.length
                            ? r
                            : (r - Ki(t, "time", e[e.length - 2], "pos")) /
                              2))),
                    { start: s, end: l }
                  );
                })(n._table, d, 0, 0, r)),
                r.ticks.reverse && d.reverse(),
                (function(t, e, i) {
                  var n,
                    a,
                    o,
                    r,
                    s = [];
                  for (n = 0, a = e.length; n < a; ++n)
                    (o = e[n]),
                      (r = !!i && o === +t._adapter.startOf(o, i)),
                      s.push({ value: o, major: r });
                  return s;
                })(n, d, n._majorUnit)
              );
            },
            getLabelForIndex: function(t, e) {
              var i = this,
                n = i._adapter,
                a = i.chart.data,
                o = i.options.time,
                r = a.labels && t < a.labels.length ? a.labels[t] : "",
                s = a.datasets[e].data[t];
              return (
                ht.isObject(s) && (r = i.getRightValue(s)),
                o.tooltipFormat
                  ? n.format(Gi(i, r), o.tooltipFormat)
                  : "string" == typeof r
                  ? r
                  : n.format(Gi(i, r), o.displayFormats.datetime)
              );
            },
            tickFormatFunction: function(t, e, i, n) {
              var a = this._adapter,
                o = this.options,
                r = o.time.displayFormats,
                s = r[this._unit],
                l = this._majorUnit,
                d = r[l],
                u = +a.startOf(t, l),
                h = o.ticks.major,
                c = h.enabled && l && d && t === u,
                f = a.format(t, n || (c ? d : s)),
                g = c ? h : o.ticks.minor,
                p = Ei(g.callback, g.userCallback);
              return p ? p(f, e, i) : f;
            },
            convertTicksToLabels: function(t) {
              var e,
                i,
                n = [];
              for (e = 0, i = t.length; e < i; ++e)
                n.push(this.tickFormatFunction(t[e].value, e, t));
              return n;
            },
            getPixelForOffset: function(t) {
              var e = this,
                i = e.options.ticks.reverse,
                n = e._horizontal ? e.width : e.height,
                a = e._horizontal
                  ? i
                    ? e.right
                    : e.left
                  : i
                  ? e.bottom
                  : e.top,
                o = Ki(e._table, "time", t, "pos"),
                r =
                  (n * (e._offsets.start + o)) /
                  (e._offsets.start + 1 + e._offsets.end);
              return i ? a - r : a + r;
            },
            getPixelForValue: function(t, e, i) {
              var n = null;
              if (
                (void 0 !== e &&
                  void 0 !== i &&
                  (n = this._timestamps.datasets[i][e]),
                null === n && (n = Zi(this, t)),
                null !== n)
              )
                return this.getPixelForOffset(n);
            },
            getPixelForTick: function(t) {
              var e = this.getTicks();
              return t >= 0 && t < e.length
                ? this.getPixelForOffset(e[t].value)
                : null;
            },
            getValueForPixel: function(t) {
              var e = this,
                i = e._horizontal ? e.width : e.height,
                n = e._horizontal ? e.left : e.top,
                a =
                  (i ? (t - n) / i : 0) *
                    (e._offsets.start + 1 + e._offsets.start) -
                  e._offsets.end,
                o = Ki(e._table, "pos", a, "time");
              return e._adapter._create(o);
            },
            getLabelWidth: function(t) {
              var e = this.options.ticks,
                i = this.ctx.measureText(t).width,
                n = ht.toRadians(e.maxRotation),
                a = Math.cos(n),
                o = Math.sin(n);
              return i * a + Ei(e.fontSize, lt.global.defaultFontSize) * o;
            },
            getLabelCapacity: function(t) {
              var e = this,
                i = e.options.time.displayFormats.millisecond,
                n = e.tickFormatFunction(t, 0, [], i),
                a = e.getLabelWidth(n),
                o = e.isHorizontal() ? e.width : e.height,
                r = Math.floor(o / a);
              return r > 0 ? r : 1;
            },
          }),
          tn = {
            position: "bottom",
            distribution: "linear",
            bounds: "data",
            adapters: {},
            time: {
              parser: !1,
              format: !1,
              unit: !1,
              round: !1,
              displayFormat: !1,
              isoWeekday: !1,
              minUnit: "millisecond",
              displayFormats: {},
            },
            ticks: { autoSkip: !1, source: "auto", major: { enabled: !1 } },
          };
        Qi._defaults = tn;
        var en = {
            category: pi,
            linear: ki,
            logarithmic: Si,
            radialLinear: Ni,
            time: Qi,
          },
          nn = {
            datetime: "MMM D, YYYY, h:mm:ss a",
            millisecond: "h:mm:ss.SSS a",
            second: "h:mm:ss a",
            minute: "h:mm a",
            hour: "hA",
            day: "MMM D",
            week: "ll",
            month: "MMM YYYY",
            quarter: "[Q]Q - YYYY",
            year: "YYYY",
          };
        li._date.override(
          "function" == typeof t
            ? {
                _id: "moment",
                formats: function() {
                  return nn;
                },
                parse: function(e, i) {
                  return (
                    "string" == typeof e && "string" == typeof i
                      ? (e = t(e, i))
                      : e instanceof t || (e = t(e)),
                    e.isValid() ? e.valueOf() : null
                  );
                },
                format: function(e, i) {
                  return t(e).format(i);
                },
                add: function(e, i, n) {
                  return t(e)
                    .add(i, n)
                    .valueOf();
                },
                diff: function(e, i, n) {
                  return t.duration(t(e).diff(t(i))).as(n);
                },
                startOf: function(e, i, n) {
                  return (
                    (e = t(e)),
                    "isoWeek" === i
                      ? e.isoWeekday(n).valueOf()
                      : e.startOf(i).valueOf()
                  );
                },
                endOf: function(e, i) {
                  return t(e)
                    .endOf(i)
                    .valueOf();
                },
                _create: function(e) {
                  return t(e);
                },
              }
            : {}
        ),
          lt._set("global", { plugins: { filler: { propagate: !0 } } });
        var an = {
          dataset: function(t) {
            var e = t.fill,
              i = t.chart,
              n = i.getDatasetMeta(e),
              a = (n && i.isDatasetVisible(e) && n.dataset._children) || [],
              o = a.length || 0;
            return o
              ? function(t, e) {
                  return (e < o && a[e]._view) || null;
                }
              : null;
          },
          boundary: function(t) {
            var e = t.boundary,
              i = e ? e.x : null,
              n = e ? e.y : null;
            return function(t) {
              return { x: null === i ? t.x : i, y: null === n ? t.y : n };
            };
          },
        };
        function on(t, e, i) {
          var n,
            a = t._model || {},
            o = a.fill;
          if (
            (void 0 === o && (o = !!a.backgroundColor), !1 === o || null === o)
          )
            return !1;
          if (!0 === o) return "origin";
          if (((n = parseFloat(o, 10)), isFinite(n) && Math.floor(n) === n))
            return (
              ("-" !== o[0] && "+" !== o[0]) || (n = e + n),
              !(n === e || n < 0 || n >= i) && n
            );
          switch (o) {
            case "bottom":
              return "start";
            case "top":
              return "end";
            case "zero":
              return "origin";
            case "origin":
            case "start":
            case "end":
              return o;
            default:
              return !1;
          }
        }
        function rn(t) {
          var e,
            i = t.el._model || {},
            n = t.el._scale || {},
            a = t.fill,
            o = null;
          if (isFinite(a)) return null;
          if (
            ("start" === a
              ? (o = void 0 === i.scaleBottom ? n.bottom : i.scaleBottom)
              : "end" === a
              ? (o = void 0 === i.scaleTop ? n.top : i.scaleTop)
              : void 0 !== i.scaleZero
              ? (o = i.scaleZero)
              : n.getBasePosition
              ? (o = n.getBasePosition())
              : n.getBasePixel && (o = n.getBasePixel()),
            null != o)
          ) {
            if (void 0 !== o.x && void 0 !== o.y) return o;
            if (ht.isFinite(o))
              return { x: (e = n.isHorizontal()) ? o : null, y: e ? null : o };
          }
          return null;
        }
        function sn(t, e, i) {
          var n,
            a = t[e].fill,
            o = [e];
          if (!i) return a;
          for (; !1 !== a && -1 === o.indexOf(a); ) {
            if (!isFinite(a)) return a;
            if (!(n = t[a])) return !1;
            if (n.visible) return a;
            o.push(a), (a = n.fill);
          }
          return !1;
        }
        function ln(t) {
          var e = t.fill,
            i = "dataset";
          return !1 === e ? null : (isFinite(e) || (i = "boundary"), an[i](t));
        }
        function dn(t) {
          return t && !t.skip;
        }
        function un(t, e, i, n, a) {
          var o;
          if (n && a) {
            for (t.moveTo(e[0].x, e[0].y), o = 1; o < n; ++o)
              ht.canvas.lineTo(t, e[o - 1], e[o]);
            for (t.lineTo(i[a - 1].x, i[a - 1].y), o = a - 1; o > 0; --o)
              ht.canvas.lineTo(t, i[o], i[o - 1], !0);
          }
        }
        var hn = {
            id: "filler",
            afterDatasetsUpdate: function(t, e) {
              var i,
                n,
                a,
                o,
                r = (t.data.datasets || []).length,
                s = e.propagate,
                l = [];
              for (n = 0; n < r; ++n)
                (o = null),
                  (a = (i = t.getDatasetMeta(n)).dataset) &&
                    a._model &&
                    a instanceof Vt.Line &&
                    (o = {
                      visible: t.isDatasetVisible(n),
                      fill: on(a, n, r),
                      chart: t,
                      el: a,
                    }),
                  (i.$filler = o),
                  l.push(o);
              for (n = 0; n < r; ++n)
                (o = l[n]) &&
                  ((o.fill = sn(l, n, s)),
                  (o.boundary = rn(o)),
                  (o.mapper = ln(o)));
            },
            beforeDatasetDraw: function(t, e) {
              var i = e.meta.$filler;
              if (i) {
                var n = t.ctx,
                  a = i.el,
                  o = a._view,
                  r = a._children || [],
                  s = i.mapper,
                  l = o.backgroundColor || lt.global.defaultColor;
                s &&
                  l &&
                  r.length &&
                  (ht.canvas.clipArea(n, t.chartArea),
                  (function(t, e, i, n, a, o) {
                    var r,
                      s,
                      l,
                      d,
                      u,
                      h,
                      c,
                      f = e.length,
                      g = n.spanGaps,
                      p = [],
                      m = [],
                      v = 0,
                      b = 0;
                    for (t.beginPath(), r = 0, s = f + !!o; r < s; ++r)
                      (u = i((d = e[(l = r % f)]._view), l, n)),
                        (h = dn(d)),
                        (c = dn(u)),
                        h && c
                          ? ((v = p.push(d)), (b = m.push(u)))
                          : v &&
                            b &&
                            (g
                              ? (h && p.push(d), c && m.push(u))
                              : (un(t, p, m, v, b),
                                (v = b = 0),
                                (p = []),
                                (m = [])));
                    un(t, p, m, v, b),
                      t.closePath(),
                      (t.fillStyle = a),
                      t.fill();
                  })(n, r, s, o, l, a._loop),
                  ht.canvas.unclipArea(n));
              }
            },
          },
          cn = ht.noop,
          fn = ht.valueOrDefault;
        function gn(t, e) {
          return t.usePointStyle && t.boxWidth > e ? e : t.boxWidth;
        }
        lt._set("global", {
          legend: {
            display: !0,
            position: "top",
            fullWidth: !0,
            reverse: !1,
            weight: 1e3,
            onClick: function(t, e) {
              var i = e.datasetIndex,
                n = this.chart,
                a = n.getDatasetMeta(i);
              (a.hidden =
                null === a.hidden ? !n.data.datasets[i].hidden : null),
                n.update();
            },
            onHover: null,
            onLeave: null,
            labels: {
              boxWidth: 40,
              padding: 10,
              generateLabels: function(t) {
                var e = t.data;
                return ht.isArray(e.datasets)
                  ? e.datasets.map(function(e, i) {
                      return {
                        text: e.label,
                        fillStyle: ht.isArray(e.backgroundColor)
                          ? e.backgroundColor[0]
                          : e.backgroundColor,
                        hidden: !t.isDatasetVisible(i),
                        lineCap: e.borderCapStyle,
                        lineDash: e.borderDash,
                        lineDashOffset: e.borderDashOffset,
                        lineJoin: e.borderJoinStyle,
                        lineWidth: e.borderWidth,
                        strokeStyle: e.borderColor,
                        pointStyle: e.pointStyle,
                        datasetIndex: i,
                      };
                    }, this)
                  : [];
              },
            },
          },
          legendCallback: function(t) {
            var e = [];
            e.push('<ul class="' + t.id + '-legend">');
            for (var i = 0; i < t.data.datasets.length; i++)
              e.push(
                '<li><span style="background-color:' +
                  t.data.datasets[i].backgroundColor +
                  '"></span>'
              ),
                t.data.datasets[i].label && e.push(t.data.datasets[i].label),
                e.push("</li>");
            return e.push("</ul>"), e.join("");
          },
        });
        var pn = mt.extend({
          initialize: function(t) {
            ht.extend(this, t),
              (this.legendHitBoxes = []),
              (this._hoveredItem = null),
              (this.doughnutMode = !1);
          },
          beforeUpdate: cn,
          update: function(t, e, i) {
            var n = this;
            return (
              n.beforeUpdate(),
              (n.maxWidth = t),
              (n.maxHeight = e),
              (n.margins = i),
              n.beforeSetDimensions(),
              n.setDimensions(),
              n.afterSetDimensions(),
              n.beforeBuildLabels(),
              n.buildLabels(),
              n.afterBuildLabels(),
              n.beforeFit(),
              n.fit(),
              n.afterFit(),
              n.afterUpdate(),
              n.minSize
            );
          },
          afterUpdate: cn,
          beforeSetDimensions: cn,
          setDimensions: function() {
            var t = this;
            t.isHorizontal()
              ? ((t.width = t.maxWidth), (t.left = 0), (t.right = t.width))
              : ((t.height = t.maxHeight), (t.top = 0), (t.bottom = t.height)),
              (t.paddingLeft = 0),
              (t.paddingTop = 0),
              (t.paddingRight = 0),
              (t.paddingBottom = 0),
              (t.minSize = { width: 0, height: 0 });
          },
          afterSetDimensions: cn,
          beforeBuildLabels: cn,
          buildLabels: function() {
            var t = this,
              e = t.options.labels || {},
              i = ht.callback(e.generateLabels, [t.chart], t) || [];
            e.filter &&
              (i = i.filter(function(i) {
                return e.filter(i, t.chart.data);
              })),
              t.options.reverse && i.reverse(),
              (t.legendItems = i);
          },
          afterBuildLabels: cn,
          beforeFit: cn,
          fit: function() {
            var t = this,
              e = t.options,
              i = e.labels,
              n = e.display,
              a = t.ctx,
              o = ht.options._parseFont(i),
              r = o.size,
              s = (t.legendHitBoxes = []),
              l = t.minSize,
              d = t.isHorizontal();
            if (
              (d
                ? ((l.width = t.maxWidth), (l.height = n ? 10 : 0))
                : ((l.width = n ? 10 : 0), (l.height = t.maxHeight)),
              n)
            )
              if (((a.font = o.string), d)) {
                var u = (t.lineWidths = [0]),
                  h = 0;
                (a.textAlign = "left"),
                  (a.textBaseline = "top"),
                  ht.each(t.legendItems, function(t, e) {
                    var n = gn(i, r) + r / 2 + a.measureText(t.text).width;
                    (0 === e || u[u.length - 1] + n + i.padding > l.width) &&
                      ((h += r + i.padding),
                      (u[u.length - (e > 0 ? 0 : 1)] = i.padding)),
                      (s[e] = { left: 0, top: 0, width: n, height: r }),
                      (u[u.length - 1] += n + i.padding);
                  }),
                  (l.height += h);
              } else {
                var c = i.padding,
                  f = (t.columnWidths = []),
                  g = i.padding,
                  p = 0,
                  m = 0,
                  v = r + c;
                ht.each(t.legendItems, function(t, e) {
                  var n = gn(i, r) + r / 2 + a.measureText(t.text).width;
                  e > 0 &&
                    m + v > l.height - c &&
                    ((g += p + i.padding), f.push(p), (p = 0), (m = 0)),
                    (p = Math.max(p, n)),
                    (m += v),
                    (s[e] = { left: 0, top: 0, width: n, height: r });
                }),
                  (g += p),
                  f.push(p),
                  (l.width += g);
              }
            (t.width = l.width), (t.height = l.height);
          },
          afterFit: cn,
          isHorizontal: function() {
            return (
              "top" === this.options.position ||
              "bottom" === this.options.position
            );
          },
          draw: function() {
            var t = this,
              e = t.options,
              i = e.labels,
              n = lt.global,
              a = n.defaultColor,
              o = n.elements.line,
              r = t.width,
              s = t.lineWidths;
            if (e.display) {
              var l,
                d = t.ctx,
                u = fn(i.fontColor, n.defaultFontColor),
                h = ht.options._parseFont(i),
                c = h.size;
              (d.textAlign = "left"),
                (d.textBaseline = "middle"),
                (d.lineWidth = 0.5),
                (d.strokeStyle = u),
                (d.fillStyle = u),
                (d.font = h.string);
              var f = gn(i, c),
                g = t.legendHitBoxes,
                p = t.isHorizontal();
              l = p
                ? {
                    x: t.left + (r - s[0]) / 2 + i.padding,
                    y: t.top + i.padding,
                    line: 0,
                  }
                : { x: t.left + i.padding, y: t.top + i.padding, line: 0 };
              var m = c + i.padding;
              ht.each(t.legendItems, function(n, u) {
                var h = d.measureText(n.text).width,
                  v = f + c / 2 + h,
                  b = l.x,
                  x = l.y;
                p
                  ? u > 0 &&
                    b + v + i.padding > t.left + t.minSize.width &&
                    ((x = l.y += m),
                    l.line++,
                    (b = l.x = t.left + (r - s[l.line]) / 2 + i.padding))
                  : u > 0 &&
                    x + m > t.top + t.minSize.height &&
                    ((b = l.x = b + t.columnWidths[l.line] + i.padding),
                    (x = l.y = t.top + i.padding),
                    l.line++),
                  (function(t, i, n) {
                    if (!(isNaN(f) || f <= 0)) {
                      d.save();
                      var r = fn(n.lineWidth, o.borderWidth);
                      if (
                        ((d.fillStyle = fn(n.fillStyle, a)),
                        (d.lineCap = fn(n.lineCap, o.borderCapStyle)),
                        (d.lineDashOffset = fn(
                          n.lineDashOffset,
                          o.borderDashOffset
                        )),
                        (d.lineJoin = fn(n.lineJoin, o.borderJoinStyle)),
                        (d.lineWidth = r),
                        (d.strokeStyle = fn(n.strokeStyle, a)),
                        d.setLineDash &&
                          d.setLineDash(fn(n.lineDash, o.borderDash)),
                        e.labels && e.labels.usePointStyle)
                      ) {
                        var s = (f * Math.SQRT2) / 2,
                          l = t + f / 2,
                          u = i + c / 2;
                        ht.canvas.drawPoint(d, n.pointStyle, s, l, u);
                      } else
                        0 !== r && d.strokeRect(t, i, f, c),
                          d.fillRect(t, i, f, c);
                      d.restore();
                    }
                  })(b, x, n),
                  (g[u].left = b),
                  (g[u].top = x),
                  (function(t, e, i, n) {
                    var a = c / 2,
                      o = f + a + t,
                      r = e + a;
                    d.fillText(i.text, o, r),
                      i.hidden &&
                        (d.beginPath(),
                        (d.lineWidth = 2),
                        d.moveTo(o, r),
                        d.lineTo(o + n, r),
                        d.stroke());
                  })(b, x, n, h),
                  p ? (l.x += v + i.padding) : (l.y += m);
              });
            }
          },
          _getLegendItemAt: function(t, e) {
            var i,
              n,
              a,
              o = this;
            if (t >= o.left && t <= o.right && e >= o.top && e <= o.bottom)
              for (a = o.legendHitBoxes, i = 0; i < a.length; ++i)
                if (
                  t >= (n = a[i]).left &&
                  t <= n.left + n.width &&
                  e >= n.top &&
                  e <= n.top + n.height
                )
                  return o.legendItems[i];
            return null;
          },
          handleEvent: function(t) {
            var e,
              i = this,
              n = i.options,
              a = "mouseup" === t.type ? "click" : t.type;
            if ("mousemove" === a) {
              if (!n.onHover && !n.onLeave) return;
            } else {
              if ("click" !== a) return;
              if (!n.onClick) return;
            }
            (e = i._getLegendItemAt(t.x, t.y)),
              "click" === a
                ? e && n.onClick && n.onClick.call(i, t.native, e)
                : (n.onLeave &&
                    e !== i._hoveredItem &&
                    (i._hoveredItem &&
                      n.onLeave.call(i, t.native, i._hoveredItem),
                    (i._hoveredItem = e)),
                  n.onHover && e && n.onHover.call(i, t.native, e));
          },
        });
        function mn(t, e) {
          var i = new pn({ ctx: t.ctx, options: e, chart: t });
          Me.configure(t, i, e), Me.addBox(t, i), (t.legend = i);
        }
        var vn = {
            id: "legend",
            _element: pn,
            beforeInit: function(t) {
              var e = t.options.legend;
              e && mn(t, e);
            },
            beforeUpdate: function(t) {
              var e = t.options.legend,
                i = t.legend;
              e
                ? (ht.mergeIf(e, lt.global.legend),
                  i ? (Me.configure(t, i, e), (i.options = e)) : mn(t, e))
                : i && (Me.removeBox(t, i), delete t.legend);
            },
            afterEvent: function(t, e) {
              var i = t.legend;
              i && i.handleEvent(e);
            },
          },
          bn = ht.noop;
        lt._set("global", {
          title: {
            display: !1,
            fontStyle: "bold",
            fullWidth: !0,
            padding: 10,
            position: "top",
            text: "",
            weight: 2e3,
          },
        });
        var xn = mt.extend({
          initialize: function(t) {
            ht.extend(this, t), (this.legendHitBoxes = []);
          },
          beforeUpdate: bn,
          update: function(t, e, i) {
            var n = this;
            return (
              n.beforeUpdate(),
              (n.maxWidth = t),
              (n.maxHeight = e),
              (n.margins = i),
              n.beforeSetDimensions(),
              n.setDimensions(),
              n.afterSetDimensions(),
              n.beforeBuildLabels(),
              n.buildLabels(),
              n.afterBuildLabels(),
              n.beforeFit(),
              n.fit(),
              n.afterFit(),
              n.afterUpdate(),
              n.minSize
            );
          },
          afterUpdate: bn,
          beforeSetDimensions: bn,
          setDimensions: function() {
            var t = this;
            t.isHorizontal()
              ? ((t.width = t.maxWidth), (t.left = 0), (t.right = t.width))
              : ((t.height = t.maxHeight), (t.top = 0), (t.bottom = t.height)),
              (t.paddingLeft = 0),
              (t.paddingTop = 0),
              (t.paddingRight = 0),
              (t.paddingBottom = 0),
              (t.minSize = { width: 0, height: 0 });
          },
          afterSetDimensions: bn,
          beforeBuildLabels: bn,
          buildLabels: bn,
          afterBuildLabels: bn,
          beforeFit: bn,
          fit: function() {
            var t = this,
              e = t.options,
              i = e.display,
              n = t.minSize,
              a = ht.isArray(e.text) ? e.text.length : 1,
              o = ht.options._parseFont(e),
              r = i ? a * o.lineHeight + 2 * e.padding : 0;
            t.isHorizontal()
              ? ((n.width = t.maxWidth), (n.height = r))
              : ((n.width = r), (n.height = t.maxHeight)),
              (t.width = n.width),
              (t.height = n.height);
          },
          afterFit: bn,
          isHorizontal: function() {
            var t = this.options.position;
            return "top" === t || "bottom" === t;
          },
          draw: function() {
            var t = this,
              e = t.ctx,
              i = t.options;
            if (i.display) {
              var n,
                a,
                o,
                r = ht.options._parseFont(i),
                s = r.lineHeight,
                l = s / 2 + i.padding,
                d = 0,
                u = t.top,
                h = t.left,
                c = t.bottom,
                f = t.right;
              (e.fillStyle = ht.valueOrDefault(
                i.fontColor,
                lt.global.defaultFontColor
              )),
                (e.font = r.string),
                t.isHorizontal()
                  ? ((a = h + (f - h) / 2), (o = u + l), (n = f - h))
                  : ((a = "left" === i.position ? h + l : f - l),
                    (o = u + (c - u) / 2),
                    (n = c - u),
                    (d = Math.PI * ("left" === i.position ? -0.5 : 0.5))),
                e.save(),
                e.translate(a, o),
                e.rotate(d),
                (e.textAlign = "center"),
                (e.textBaseline = "middle");
              var g = i.text;
              if (ht.isArray(g))
                for (var p = 0, m = 0; m < g.length; ++m)
                  e.fillText(g[m], 0, p, n), (p += s);
              else e.fillText(g, 0, 0, n);
              e.restore();
            }
          },
        });
        function yn(t, e) {
          var i = new xn({ ctx: t.ctx, options: e, chart: t });
          Me.configure(t, i, e), Me.addBox(t, i), (t.titleBlock = i);
        }
        var kn = {},
          wn = hn,
          Mn = vn,
          _n = {
            id: "title",
            _element: xn,
            beforeInit: function(t) {
              var e = t.options.title;
              e && yn(t, e);
            },
            beforeUpdate: function(t) {
              var e = t.options.title,
                i = t.titleBlock;
              e
                ? (ht.mergeIf(e, lt.global.title),
                  i ? (Me.configure(t, i, e), (i.options = e)) : yn(t, e))
                : i && (Me.removeBox(t, i), delete t.titleBlock);
            },
          };
        for (var Cn in ((kn.filler = wn),
        (kn.legend = Mn),
        (kn.title = _n),
        (oi.helpers = ht),
        (function() {
          function t(t, e, i) {
            var n;
            return (
              "string" == typeof t
                ? ((n = parseInt(t, 10)),
                  -1 !== t.indexOf("%") && (n = (n / 100) * e.parentNode[i]))
                : (n = t),
              n
            );
          }
          function e(t) {
            return null != t && "none" !== t;
          }
          function i(i, n, a) {
            var o = document.defaultView,
              r = ht._getParentNode(i),
              s = o.getComputedStyle(i)[n],
              l = o.getComputedStyle(r)[n],
              d = e(s),
              u = e(l),
              h = Number.POSITIVE_INFINITY;
            return d || u
              ? Math.min(d ? t(s, i, a) : h, u ? t(l, r, a) : h)
              : "none";
          }
          (ht.where = function(t, e) {
            if (ht.isArray(t) && Array.prototype.filter) return t.filter(e);
            var i = [];
            return (
              ht.each(t, function(t) {
                e(t) && i.push(t);
              }),
              i
            );
          }),
            (ht.findIndex = Array.prototype.findIndex
              ? function(t, e, i) {
                  return t.findIndex(e, i);
                }
              : function(t, e, i) {
                  i = void 0 === i ? t : i;
                  for (var n = 0, a = t.length; n < a; ++n)
                    if (e.call(i, t[n], n, t)) return n;
                  return -1;
                }),
            (ht.findNextWhere = function(t, e, i) {
              ht.isNullOrUndef(i) && (i = -1);
              for (var n = i + 1; n < t.length; n++) {
                var a = t[n];
                if (e(a)) return a;
              }
            }),
            (ht.findPreviousWhere = function(t, e, i) {
              ht.isNullOrUndef(i) && (i = t.length);
              for (var n = i - 1; n >= 0; n--) {
                var a = t[n];
                if (e(a)) return a;
              }
            }),
            (ht.isNumber = function(t) {
              return !isNaN(parseFloat(t)) && isFinite(t);
            }),
            (ht.almostEquals = function(t, e, i) {
              return Math.abs(t - e) < i;
            }),
            (ht.almostWhole = function(t, e) {
              var i = Math.round(t);
              return i - e < t && i + e > t;
            }),
            (ht.max = function(t) {
              return t.reduce(function(t, e) {
                return isNaN(e) ? t : Math.max(t, e);
              }, Number.NEGATIVE_INFINITY);
            }),
            (ht.min = function(t) {
              return t.reduce(function(t, e) {
                return isNaN(e) ? t : Math.min(t, e);
              }, Number.POSITIVE_INFINITY);
            }),
            (ht.sign = Math.sign
              ? function(t) {
                  return Math.sign(t);
                }
              : function(t) {
                  return 0 == (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1;
                }),
            (ht.log10 = Math.log10
              ? function(t) {
                  return Math.log10(t);
                }
              : function(t) {
                  var e = Math.log(t) * Math.LOG10E,
                    i = Math.round(e);
                  return t === Math.pow(10, i) ? i : e;
                }),
            (ht.toRadians = function(t) {
              return t * (Math.PI / 180);
            }),
            (ht.toDegrees = function(t) {
              return t * (180 / Math.PI);
            }),
            (ht._decimalPlaces = function(t) {
              if (ht.isFinite(t)) {
                for (var e = 1, i = 0; Math.round(t * e) / e !== t; )
                  (e *= 10), i++;
                return i;
              }
            }),
            (ht.getAngleFromPoint = function(t, e) {
              var i = e.x - t.x,
                n = e.y - t.y,
                a = Math.sqrt(i * i + n * n),
                o = Math.atan2(n, i);
              return (
                o < -0.5 * Math.PI && (o += 2 * Math.PI),
                { angle: o, distance: a }
              );
            }),
            (ht.distanceBetweenPoints = function(t, e) {
              return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
            }),
            (ht.aliasPixel = function(t) {
              return t % 2 == 0 ? 0 : 0.5;
            }),
            (ht._alignPixel = function(t, e, i) {
              var n = t.currentDevicePixelRatio,
                a = i / 2;
              return Math.round((e - a) * n) / n + a;
            }),
            (ht.splineCurve = function(t, e, i, n) {
              var a = t.skip ? e : t,
                o = e,
                r = i.skip ? e : i,
                s = Math.sqrt(Math.pow(o.x - a.x, 2) + Math.pow(o.y - a.y, 2)),
                l = Math.sqrt(Math.pow(r.x - o.x, 2) + Math.pow(r.y - o.y, 2)),
                d = s / (s + l),
                u = l / (s + l),
                h = n * (d = isNaN(d) ? 0 : d),
                c = n * (u = isNaN(u) ? 0 : u);
              return {
                previous: {
                  x: o.x - h * (r.x - a.x),
                  y: o.y - h * (r.y - a.y),
                },
                next: { x: o.x + c * (r.x - a.x), y: o.y + c * (r.y - a.y) },
              };
            }),
            (ht.EPSILON = Number.EPSILON || 1e-14),
            (ht.splineCurveMonotone = function(t) {
              var e,
                i,
                n,
                a,
                o,
                r,
                s,
                l,
                d,
                u = (t || []).map(function(t) {
                  return { model: t._model, deltaK: 0, mK: 0 };
                }),
                h = u.length;
              for (e = 0; e < h; ++e)
                if (!(n = u[e]).model.skip) {
                  if (
                    ((i = e > 0 ? u[e - 1] : null),
                    (a = e < h - 1 ? u[e + 1] : null) && !a.model.skip)
                  ) {
                    var c = a.model.x - n.model.x;
                    n.deltaK = 0 !== c ? (a.model.y - n.model.y) / c : 0;
                  }
                  !i || i.model.skip
                    ? (n.mK = n.deltaK)
                    : !a || a.model.skip
                    ? (n.mK = i.deltaK)
                    : this.sign(i.deltaK) !== this.sign(n.deltaK)
                    ? (n.mK = 0)
                    : (n.mK = (i.deltaK + n.deltaK) / 2);
                }
              for (e = 0; e < h - 1; ++e)
                (n = u[e]),
                  (a = u[e + 1]),
                  n.model.skip ||
                    a.model.skip ||
                    (ht.almostEquals(n.deltaK, 0, this.EPSILON)
                      ? (n.mK = a.mK = 0)
                      : ((o = n.mK / n.deltaK),
                        (r = a.mK / n.deltaK),
                        (l = Math.pow(o, 2) + Math.pow(r, 2)) <= 9 ||
                          ((s = 3 / Math.sqrt(l)),
                          (n.mK = o * s * n.deltaK),
                          (a.mK = r * s * n.deltaK))));
              for (e = 0; e < h; ++e)
                (n = u[e]).model.skip ||
                  ((i = e > 0 ? u[e - 1] : null),
                  (a = e < h - 1 ? u[e + 1] : null),
                  i &&
                    !i.model.skip &&
                    ((d = (n.model.x - i.model.x) / 3),
                    (n.model.controlPointPreviousX = n.model.x - d),
                    (n.model.controlPointPreviousY = n.model.y - d * n.mK)),
                  a &&
                    !a.model.skip &&
                    ((d = (a.model.x - n.model.x) / 3),
                    (n.model.controlPointNextX = n.model.x + d),
                    (n.model.controlPointNextY = n.model.y + d * n.mK)));
            }),
            (ht.nextItem = function(t, e, i) {
              return i
                ? e >= t.length - 1
                  ? t[0]
                  : t[e + 1]
                : e >= t.length - 1
                ? t[t.length - 1]
                : t[e + 1];
            }),
            (ht.previousItem = function(t, e, i) {
              return i
                ? e <= 0
                  ? t[t.length - 1]
                  : t[e - 1]
                : e <= 0
                ? t[0]
                : t[e - 1];
            }),
            (ht.niceNum = function(t, e) {
              var i = Math.floor(ht.log10(t)),
                n = t / Math.pow(10, i);
              return (
                (e
                  ? n < 1.5
                    ? 1
                    : n < 3
                    ? 2
                    : n < 7
                    ? 5
                    : 10
                  : n <= 1
                  ? 1
                  : n <= 2
                  ? 2
                  : n <= 5
                  ? 5
                  : 10) * Math.pow(10, i)
              );
            }),
            (ht.requestAnimFrame =
              "undefined" == typeof window
                ? function(t) {
                    t();
                  }
                : window.requestAnimationFrame ||
                  window.webkitRequestAnimationFrame ||
                  window.mozRequestAnimationFrame ||
                  window.oRequestAnimationFrame ||
                  window.msRequestAnimationFrame ||
                  function(t) {
                    return window.setTimeout(t, 1e3 / 60);
                  }),
            (ht.getRelativePosition = function(t, e) {
              var i,
                n,
                a = t.originalEvent || t,
                o = t.target || t.srcElement,
                r = o.getBoundingClientRect(),
                s = a.touches;
              s && s.length > 0
                ? ((i = s[0].clientX), (n = s[0].clientY))
                : ((i = a.clientX), (n = a.clientY));
              var l = parseFloat(ht.getStyle(o, "padding-left")),
                d = parseFloat(ht.getStyle(o, "padding-top")),
                u = parseFloat(ht.getStyle(o, "padding-right")),
                h = parseFloat(ht.getStyle(o, "padding-bottom")),
                c = r.right - r.left - l - u,
                f = r.bottom - r.top - d - h;
              return {
                x: (i = Math.round(
                  (((i - r.left - l) / c) * o.width) / e.currentDevicePixelRatio
                )),
                y: (n = Math.round(
                  (((n - r.top - d) / f) * o.height) / e.currentDevicePixelRatio
                )),
              };
            }),
            (ht.getConstraintWidth = function(t) {
              return i(t, "max-width", "clientWidth");
            }),
            (ht.getConstraintHeight = function(t) {
              return i(t, "max-height", "clientHeight");
            }),
            (ht._calculatePadding = function(t, e, i) {
              return (e = ht.getStyle(t, e)).indexOf("%") > -1
                ? (i * parseInt(e, 10)) / 100
                : parseInt(e, 10);
            }),
            (ht._getParentNode = function(t) {
              var e = t.parentNode;
              return (
                e && "[object ShadowRoot]" === e.toString() && (e = e.host), e
              );
            }),
            (ht.getMaximumWidth = function(t) {
              var e = ht._getParentNode(t);
              if (!e) return t.clientWidth;
              var i = e.clientWidth,
                n =
                  i -
                  ht._calculatePadding(e, "padding-left", i) -
                  ht._calculatePadding(e, "padding-right", i),
                a = ht.getConstraintWidth(t);
              return isNaN(a) ? n : Math.min(n, a);
            }),
            (ht.getMaximumHeight = function(t) {
              var e = ht._getParentNode(t);
              if (!e) return t.clientHeight;
              var i = e.clientHeight,
                n =
                  i -
                  ht._calculatePadding(e, "padding-top", i) -
                  ht._calculatePadding(e, "padding-bottom", i),
                a = ht.getConstraintHeight(t);
              return isNaN(a) ? n : Math.min(n, a);
            }),
            (ht.getStyle = function(t, e) {
              return t.currentStyle
                ? t.currentStyle[e]
                : document.defaultView
                    .getComputedStyle(t, null)
                    .getPropertyValue(e);
            }),
            (ht.retinaScale = function(t, e) {
              var i = (t.currentDevicePixelRatio =
                e ||
                ("undefined" != typeof window && window.devicePixelRatio) ||
                1);
              if (1 !== i) {
                var n = t.canvas,
                  a = t.height,
                  o = t.width;
                (n.height = a * i),
                  (n.width = o * i),
                  t.ctx.scale(i, i),
                  n.style.height ||
                    n.style.width ||
                    ((n.style.height = a + "px"), (n.style.width = o + "px"));
              }
            }),
            (ht.fontString = function(t, e, i) {
              return e + " " + t + "px " + i;
            }),
            (ht.longestText = function(t, e, i, n) {
              var a = ((n = n || {}).data = n.data || {}),
                o = (n.garbageCollect = n.garbageCollect || []);
              n.font !== e &&
                ((a = n.data = {}), (o = n.garbageCollect = []), (n.font = e)),
                (t.font = e);
              var r = 0;
              ht.each(i, function(e) {
                null != e && !0 !== ht.isArray(e)
                  ? (r = ht.measureText(t, a, o, r, e))
                  : ht.isArray(e) &&
                    ht.each(e, function(e) {
                      null == e ||
                        ht.isArray(e) ||
                        (r = ht.measureText(t, a, o, r, e));
                    });
              });
              var s = o.length / 2;
              if (s > i.length) {
                for (var l = 0; l < s; l++) delete a[o[l]];
                o.splice(0, s);
              }
              return r;
            }),
            (ht.measureText = function(t, e, i, n, a) {
              var o = e[a];
              return (
                o || ((o = e[a] = t.measureText(a).width), i.push(a)),
                o > n && (n = o),
                n
              );
            }),
            (ht.numberOfLabelLines = function(t) {
              var e = 1;
              return (
                ht.each(t, function(t) {
                  ht.isArray(t) && t.length > e && (e = t.length);
                }),
                e
              );
            }),
            (ht.color = K
              ? function(t) {
                  return (
                    t instanceof CanvasGradient && (t = lt.global.defaultColor),
                    K(t)
                  );
                }
              : function(t) {
                  return console.error("Color.js not found!"), t;
                }),
            (ht.getHoverColor = function(t) {
              return t instanceof CanvasPattern || t instanceof CanvasGradient
                ? t
                : ht
                    .color(t)
                    .saturate(0.5)
                    .darken(0.1)
                    .rgbString();
            });
        })(),
        (oi._adapters = li),
        (oi.Animation = bt),
        (oi.animationService = xt),
        (oi.controllers = he),
        (oi.DatasetController = _t),
        (oi.defaults = lt),
        (oi.Element = mt),
        (oi.elements = Vt),
        (oi.Interaction = be),
        (oi.layouts = Me),
        (oi.platform = Ee),
        (oi.plugins = He),
        (oi.Scale = gi),
        (oi.scaleService = je),
        (oi.Ticks = di),
        (oi.Tooltip = Qe),
        oi.helpers.each(en, function(t, e) {
          oi.scaleService.registerScaleType(e, t, t._defaults);
        }),
        kn))
          kn.hasOwnProperty(Cn) && oi.plugins.register(kn[Cn]);
        oi.platform.initialize();
        var Sn = oi;
        return (
          "undefined" != typeof window && (window.Chart = oi),
          (oi.Chart = oi),
          (oi.Legend = kn.legend._element),
          (oi.Title = kn.title._element),
          (oi.pluginService = oi.plugins),
          (oi.PluginBase = oi.Element.extend({})),
          (oi.canvasHelpers = oi.helpers.canvas),
          (oi.layoutService = oi.layouts),
          (oi.LinearScaleBase = xi),
          oi.helpers.each(
            [
              "Bar",
              "Bubble",
              "Doughnut",
              "Line",
              "PolarArea",
              "Radar",
              "Scatter",
            ],
            function(t) {
              oi[t] = function(e, i) {
                return new oi(
                  e,
                  oi.helpers.merge(i || {}, {
                    type: t.charAt(0).toLowerCase() + t.slice(1),
                  })
                );
              };
            }
          ),
          Sn
        );
      }),
        "object" === o(e) && void 0 !== t
          ? (t.exports = a(
              (function() {
                try {
                  return i(306);
                } catch (t) {}
              })()
            ))
          : void 0 ===
              (n = function(t) {
                return a(
                  (function() {
                    try {
                      return i(306);
                    } catch (t) {}
                  })()
                );
              }.apply(e, [i])) || (t.exports = n);
    },
    649: function(t, e, i) {
      "use strict";
      var n = i(457),
        a = i.n(n),
        o = i(306),
        r = i.n(o),
        s = a.a.helpers;
      s.isArray;
      function l(t, e) {
        if (s.isNullOrUndef(t)) return null;
        var i = e.options.time,
          n = (function(t, e) {
            var i = e.parser,
              n = e.parser || e.format;
            return "function" == typeof i
              ? i(t)
              : "string" == typeof t && "string" == typeof n
              ? r()(t, n)
              : (t instanceof r.a || (t = r()(t)),
                t.isValid() ? t : "function" == typeof n ? n(t) : t);
          })(e.getRightValue(t), i);
        return n.isValid()
          ? (i.round && n.startOf(i.round), n.valueOf())
          : null;
      }
      var d = Number.MIN_SAFE_INTEGER || -9007199254740991,
        u = Number.MAX_SAFE_INTEGER || 9007199254740991,
        h = a.a.scaleService.getScaleConstructor("time").extend({
          determineDataLimits: function() {
            var t,
              e,
              i,
              n,
              a,
              o,
              s,
              h = this,
              c = h.chart,
              f = h.options.time,
              g = u,
              p = d,
              m = [],
              v = {},
              b = [];
            for (t = 0, i = (c.data.datasets || []).length; t < i; ++t)
              if (c.isDatasetVisible(t))
                for (
                  a = c.data.datasets[t].data, b[t] = [], e = 0, n = a.length;
                  e < n;
                  ++e
                ) {
                  if ((o = l(a[e][0], h)) > (s = l(a[e][1], h))) {
                    var x = [s, o];
                    (o = x[0]), (s = x[1]);
                  }
                  g > o && o && (g = o),
                    p < s && s && (p = s),
                    (b[t][e] = [o, s, a[e][2]]),
                    v.hasOwnProperty(o) && ((v[o] = !0), m.push(o)),
                    v.hasOwnProperty(s) && ((v[s] = !0), m.push(s));
                }
              else b[t] = [];
            m.size &&
              m.sort(function(t, e) {
                return t - e;
              }),
              (g = l(f.min, h) || g),
              (p = l(f.max, h) || p),
              (g = g === u ? +r()().startOf("day") : g),
              (p = p === d ? +r()().endOf("day") + 1 : p),
              (h.min = Math.min(g, p)),
              (h.max = Math.max(g + 1, p)),
              (h._horizontal = h.isHorizontal()),
              (h._table = []),
              (h._timestamps = { data: m, datasets: b, labels: [] });
          },
        });
      a.a.scaleService.registerScaleType("timeline", h, {
        position: "bottom",
        tooltips: { mode: "nearest" },
        adapters: {},
        time: {
          parser: !1,
          format: !1,
          unit: !1,
          round: !1,
          displayFormat: !1,
          isoWeekday: !1,
          minUnit: "millisecond",
          distribution: "linear",
          bounds: "data",
          displayFormats: {
            millisecond: "h:mm:ss.SSS a",
            second: "h:mm:ss a",
            minute: "h:mm a",
            hour: "hA",
            day: "MMM D",
            week: "ll",
            month: "MMM YYYY",
            quarter: "[Q]Q - YYYY",
            year: "YYYY",
          },
        },
        ticks: { autoSkip: !1 },
      }),
        (a.a.controllers.timeline = a.a.controllers.bar.extend({
          getBarBounds: function(t) {
            var e,
              i,
              n = t._view;
            return (
              (e = n.x),
              (i = n.x + n.width),
              { left: e, top: n.y, right: i, bottom: n.y + n.height }
            );
          },
          update: function(t) {
            var e = this,
              i = e.getMeta(),
              n = e.chart.options;
            if (
              n.textPadding ||
              n.minBarWidth ||
              n.showText ||
              n.colorFunction
            ) {
              var o = e.chart.options.elements;
              (o.textPadding = n.textPadding || o.textPadding),
                (o.minBarWidth = n.minBarWidth || o.minBarWidth),
                (o.colorFunction = n.colorFunction || o.colorFunction),
                (o.minBarWidth = n.minBarWidth || o.minBarWidth),
                !0 !== a.a._tl_depwarn &&
                  (console.log(
                    "Timeline Chart: Configuration deprecated. Please check document on Github."
                  ),
                  (a.a._tl_depwarn = !0));
            }
            s.each(
              i.data,
              function(i, n) {
                e.updateElement(i, n, t);
              },
              e
            );
          },
          updateElement: function(t, e, i) {
            var n = this,
              a = n.getMeta(),
              o = n.getScaleForId(a.xAxisID),
              r = n.getScaleForId(a.yAxisID),
              l = n.getDataset(),
              d = l.data[e],
              u = t.custom || {},
              h = n.index,
              c = n.chart.options.elements || {},
              f = c.rectangle,
              g = c.textPadding,
              p = c.minBarWidth;
            (t._xScale = o),
              (t._yScale = r),
              (t._datasetIndex = n.index),
              (t._index = e);
            var m = d[2],
              v = n.getRuler(e),
              b = o.getPixelForValue(d[0]),
              x = o.getPixelForValue(d[1]),
              y = r.getPixelForValue(d, h, h),
              k = x - b,
              w = n.calculateBarHeight(v),
              M = c.colorFunction(m, d, l, e),
              _ = c.showText,
              C = c.font;
            C || (C = "12px bold Arial");
            var S = y - w / 2;
            (t._model = {
              x: i ? b - k : b,
              y: S,
              width: Math.max(k, p),
              height: w,
              base: b + k,
              backgroundColor: M.rgbaString(),
              borderSkipped: u.borderSkipped
                ? u.borderSkipped
                : f.borderSkipped,
              borderColor: u.borderColor
                ? u.borderColor
                : s.getValueAtIndexOrDefault(l.borderColor, e, f.borderColor),
              borderWidth: u.borderWidth
                ? u.borderWidth
                : s.getValueAtIndexOrDefault(l.borderWidth, e, f.borderWidth),
              label: n.chart.data.labels[e],
              datasetLabel: l.label,
              text: m,
              textColor: M.luminosity() > 0.5 ? "#000000" : "#ffffff",
            }),
              (t.draw = function() {
                var t = this._chart.ctx,
                  e = this._view,
                  i = t.globalAlpha,
                  n = t.globalCompositeOperation;
                if (
                  ((t.fillStyle = e.backgroundColor),
                  (t.lineWidth = e.borderWidth),
                  (t.globalCompositeOperation = "destination-over"),
                  t.fillRect(e.x, e.y, e.width, e.height),
                  (t.globalAlpha = 0.5),
                  (t.globalCompositeOperation = "source-over"),
                  t.fillRect(e.x, e.y, e.width, e.height),
                  (t.globalAlpha = i),
                  (t.globalCompositeOperation = n),
                  _)
                ) {
                  t.beginPath();
                  var a = t.measureText(e.text);
                  a.width > 0 &&
                    a.width + g + 2 < e.width &&
                    ((t.font = C),
                    (t.fillStyle = e.textColor),
                    (t.lineWidth = 0),
                    (t.strokeStyle = e.textColor),
                    (t.textBaseline = "middle"),
                    t.fillText(e.text, e.x + g, e.y + e.height / 2)),
                    t.fill();
                }
              }),
              (t.inXRange = function(t) {
                var e = n.getBarBounds(this);
                return t >= e.left && t <= e.right;
              }),
              (t.tooltipPosition = function() {
                var t = this.getCenterPoint();
                return { x: t.x, y: t.y };
              }),
              (t.getCenterPoint = function() {
                var t = this._view;
                return { x: t.x + t.width / 2, y: t.y + t.height / 2 };
              }),
              (t.inRange = function(t, e) {
                var i = !1;
                if (this._view) {
                  var a = n.getBarBounds(this);
                  i =
                    t >= a.left && t <= a.right && e >= a.top && e <= a.bottom;
                }
                return i;
              }),
              t.pivot();
          },
          getBarCount: function() {
            var t = this,
              e = 0;
            return (
              s.each(
                t.chart.data.datasets,
                function(i, n) {
                  t.chart.getDatasetMeta(n).bar &&
                    t.chart.isDatasetVisible(n) &&
                    ++e;
                },
                t
              ),
              e
            );
          },
          draw: function(t) {
            var e,
              i,
              n = t || 1,
              a = this.getMeta().data;
            for (e = 0, i = a.length; e < i; e++) a[e].transition(n).draw();
          },
          calculateBarHeight: function(t) {
            var e = this.getScaleForId(this.getMeta().yAxisID);
            return e.options.barThickness
              ? e.options.barThickness
              : e.options.stacked
              ? t.categoryHeight
              : t.barHeight;
          },
          removeHoverStyle: function(t) {},
          setHoverStyle: function(t) {},
        })),
        (a.a.defaults.timeline = {
          elements: {
            colorFunction: function() {
              return Color("black");
            },
            showText: !0,
            textPadding: 4,
            minBarWidth: 1,
          },
          layout: { padding: { left: 0, right: 0, top: 0, bottom: 0 } },
          legend: { display: !1 },
          scales: {
            xAxes: [
              {
                type: "timeline",
                position: "bottom",
                distribution: "linear",
                categoryPercentage: 0.8,
                barPercentage: 0.9,
                gridLines: { display: !0, drawBorder: !0, drawTicks: !0 },
                ticks: { maxRotation: 0 },
                unit: "day",
              },
            ],
            yAxes: [
              {
                type: "category",
                position: "left",
                barThickness: 20,
                categoryPercentage: 0.8,
                barPercentage: 0.9,
                offset: !0,
                gridLines: {
                  display: !0,
                  offsetGridLines: !0,
                  drawBorder: !0,
                  drawTicks: !0,
                },
              },
            ],
          },
          tooltips: {
            callbacks: {
              title: function(t, e) {
                return e.labels[t[0].datasetIndex];
              },
              label: function(t, e) {
                var i = e.datasets[t.datasetIndex].data[t.index];
                return [
                  i[2],
                  r()(i[0]).format("L LTS"),
                  r()(i[1]).format("L LTS"),
                ];
              },
            },
          },
        });
    },
  },
]);
//# sourceMappingURL=chunk.3a200cd01ee3dc68a73a.js.map
