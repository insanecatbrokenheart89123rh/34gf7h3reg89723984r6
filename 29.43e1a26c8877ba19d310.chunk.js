(this.webpackJsonp = this.webpackJsonp || []).push([
  [29],
  {
    199: function (e, a, s) {
      "use strict";
      s.r(a);
      function c(e, a) {
        switch (e) {
          case 27764:
            if (a % 10 == 1 && (a % 100 < 11 || a % 100 > 19)) return "one";
            if (a % 10 >= 2 && a % 10 <= 9 && (a % 100 < 11 || a % 100 > 19))
              return "few";
            break;
          case 27766:
            if (0 == a) return "zero";
            if (a % 10 == 1 && a % 100 != 11) return "one";
            break;
          case 25465:
            if (2 == a) return "two";
            if (3 == a) return "few";
            if (0 == a) return "zero";
            if (1 == a) return "one";
            if (6 == a) return "many";
            break;
          case 25189:
          case 25203:
          case 26738:
          case 29301:
          case 29544:
          case 29554:
          case 30059:
            if (a % 10 == 1 && a % 100 != 11) return "one";
            if (a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 12 || a % 100 > 14))
              return "few";
            if (
              a % 10 == 0 ||
              (a % 10 >= 5 && a % 10 <= 9) ||
              (a % 100 >= 11 && a % 100 <= 14)
            )
              return "many";
            break;
          case 7041896:
            if (0 == a) return "zero";
            if (1 == a) return "one";
            break;
          case 7563369:
            if (a >= 2 && a <= 10) return "few";
            if (a >= 0 && a <= 1) return "one";
            break;
          case 26725:
            if (2 == a) return "two";
            if (1 == a) return "one";
            if (0 != a && a % 10 == 0) return "many";
            break;
          case 25459:
          case 29547:
            if (1 == a) return "one";
            if (a >= 2 && a <= 4) return "few";
            break;
          case 25202:
            if (0 != a && a % 1e6 == 0) return "many";
            if (a % 10 == 1 && a % 100 != 11 && a % 100 != 71 && a % 100 != 91)
              return "one";
            if (a % 10 == 2 && a % 100 != 12 && a % 100 != 72 && a % 100 != 92)
              return "two";
            if (
              ((a % 10 >= 3 && a % 10 <= 4) || a % 10 == 9) &&
              (a % 100 < 10 || a % 100 > 19) &&
              (a % 100 < 70 || a % 100 > 79) &&
              (a % 100 < 90 || a % 100 > 99)
            )
              return "few";
            break;
          case 29548:
            if (a % 100 == 2) return "two";
            if (a % 100 == 1) return "one";
            if (a % 100 >= 3 && a % 100 <= 4) return "few";
            break;
          case 7102823:
            if (0 == a) return "zero";
            if (a >= 0 && a <= 2 && 0 != a && 2 != a) return "one";
            break;
          case 28780:
            if (1 == a) return "one";
            if (a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 12 || a % 100 > 14))
              return "few";
            if (
              (1 != a && a % 10 >= 0 && a % 10 <= 1) ||
              (a % 10 >= 5 && a % 10 <= 9) ||
              (a % 100 >= 12 && a % 100 <= 14)
            )
              return "many";
            break;
          case 26468:
            if (2 == a || 12 == a) return "two";
            if (1 == a || 11 == a) return "one";
            if ((a >= 3 && a <= 10) || (a >= 13 && a <= 19)) return "few";
            break;
          case 26486:
            if ((a % 10 >= 1 && a % 10 <= 2) || a % 20 == 0) return "one";
            break;
          case 28011:
            if (a % 10 == 1 && 11 != a) return "one";
            break;
          case 28020:
            if (1 == a) return "one";
            if (a % 100 >= 11 && a % 100 <= 19) return "many";
            if (0 == a || (a % 100 >= 2 && a % 100 <= 10)) return "few";
            break;
          case 28015:
          case 29295:
            if (1 == a) return "one";
            if (0 == a || (1 != a && a % 100 >= 1 && a % 100 <= 19))
              return "few";
            break;
          case 26465:
            if (2 == a) return "two";
            if (1 == a) return "one";
            if (a >= 3 && a <= 6) return "few";
            if (a >= 7 && a <= 10) return "many";
            break;
          case 26214:
          case 26226:
          case 7037282:
            if (a >= 0 && a <= 2 && 2 != a) return "one";
            break;
          case 26997:
          case 27511:
          case 29541:
          case 7233905:
          case 7564641:
          case 7564649:
          case 7564650:
          case 7564654:
          case 7564659:
            if (2 == a) return "two";
            if (1 == a) return "one";
            break;
          case 24939:
          case 24941:
          case 25192:
          case 26729:
          case 27758:
          case 28007:
          case 29801:
          case 29804:
          case 30561:
          case 6711660:
          case 6780279:
          case 7238511:
            if (a >= 0 && a <= 1) return "one";
            break;
          case 7633517:
            if ((a >= 0 && a <= 1) || (a >= 11 && a <= 99)) return "one";
            break;
          case 24934:
          case 25191:
          case 25198:
          case 25441:
          case 25697:
          case 25701:
          case 25718:
          case 25957:
          case 25964:
          case 25966:
          case 25967:
          case 25971:
          case 25972:
          case 25973:
          case 26217:
          case 26223:
          case 26233:
          case 26476:
          case 26485:
          case 26721:
          case 26995:
          case 26996:
          case 27499:
          case 27500:
          case 27507:
          case 27509:
          case 27513:
          case 27746:
          case 27751:
          case 28012:
          case 28014:
          case 28018:
          case 28258:
          case 28260:
          case 28261:
          case 28268:
          case 28270:
          case 28271:
          case 28274:
          case 28281:
          case 28525:
          case 28530:
          case 28531:
          case 28769:
          case 28787:
          case 28788:
          case 29293:
          case 29550:
          case 29551:
          case 29553:
          case 29555:
          case 29556:
          case 29558:
          case 29559:
          case 29793:
          case 29797:
          case 29803:
          case 29806:
          case 29811:
          case 30066:
          case 30309:
          case 30319:
          case 30824:
          case 31349:
          case 6386529:
          case 6386548:
          case 6448493:
          case 6448506:
          case 6451832:
          case 6514535:
          case 6514802:
          case 6515554:
          case 6714738:
          case 6779767:
          case 6840695:
          case 6973295:
          case 6974819:
          case 7037290:
          case 7037799:
          case 7039850:
          case 7041890:
          case 7168371:
          case 7169903:
          case 7233896:
          case 7237224:
          case 7240046:
          case 7364976:
          case 7499622:
          case 7501675:
          case 7561585:
          case 7562600:
          case 7566201:
          case 7567730:
          case 7628143:
          case 7629159:
          case 7763310:
          case 7823717:
          case 7892839:
            if (1 == a) return "one";
            break;
          case 24946:
            if (2 == a) return "two";
            if (1 == a) return "one";
            if (0 == a) return "zero";
            if (a % 100 >= 3 && a % 100 <= 10) return "few";
            if (a % 100 >= 11 && a % 100 <= 99) return "many";
        }
        return "other";
      }
      const r = {
        PluralRules: class {
          constructor(e) {
            this.select = c.bind(
              null,
              (function (e) {
                let a = 0;
                for (let s = 0; s < e.length; ++s)
                  a = (a << 8) + e.charCodeAt(s);
                return a;
              })(e)
            );
          }
        },
      };
      a.default = r;
    },
  },
]);
//# sourceMappingURL=29.43e1a26c8877ba19d310.chunk.js.map
