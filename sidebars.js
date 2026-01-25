/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  manual: [
    "intro",
    {
      type: "category",
      label: "Подготовка к работе",
      items: [
        "podgotovka-k-rabote/sistemnye-trebovaniya",
        "podgotovka-k-rabote/ustanovka-versii-dlya-windows",
        "podgotovka-k-rabote/ustanovka-portable-versii-dlya-windows",
        "podgotovka-k-rabote/ustanovka-versii-dlya-linux",
        "podgotovka-k-rabote/ustanovka-versii-dlya-macos"
      ],
    },
    {
      type: "category",
      label: "Основные принципы",
      items: [
        "osnovnye-principy/interfeis",
        "osnovnye-principy/sloi",
        "osnovnye-principy/parametry-sloya",
        "osnovnye-principy/gruppy",
        "osnovnye-principy/smeshivanie-sloyov",
        "osnovnye-principy/filtruyushie-sloi",
        "osnovnye-principy/kholst",
        "osnovnye-principy/rezhim-animacii",
        "osnovnye-principy/fiksatory",
        "osnovnye-principy/klyuchevye-kadry",
        "osnovnye-principy/instrumenty"
      ],
    },
    {
      type: "category",
      label: "Работа с растровыми изображениями",
      items: [
        "rabota-s-rastrovymi-izobrazheniyami/import-izobrazhenii",
        "rabota-s-rastrovymi-izobrazheniyami/animaciya-metodom-perekladka",
        "rabota-s-rastrovymi-izobrazheniyami/import-sekvencii-kadrov",
        "rabota-s-rastrovymi-izobrazheniyami/instrument-nozhnicy"
      ],
    },
    {
      type: "category",
      label: "Работа с векторной графикой",
      items: [
        "rabota-s-vektornoi-grafikoi/sozdanie-figur",
        "rabota-s-vektornoi-grafikoi/vektorizaciya-izobrazhenii",
        "rabota-s-vektornoi-grafikoi/import-svg"
      ],
    },
    {
      type: "category",
      label: "Экспорт",
      items: [
        "eksport/predvaritelnyi-prosmotr",
        "eksport/eksport-video",
        "eksport/eksport-izobrazhenii",
        "eksport/eksport-gif-animacii",
        "eksport/eksport-web-animacii-lottie",
        "eksport-cherez-komandnuyu-stroku"
      ],
    },
    {
      type: "category",
      label: "Перечень слоёв",
      items: [
        "perechen-sloyov/razmyvanie",
        "perechen-sloyov/razmyvanie-dvizheniem",
        "perechen-sloyov/radialnoe-razmyvanie",
        "perechen-sloyov/deformaciya-po-krivoi",
        "perechen-sloyov/iskazhenie-shumom",
        "perechen-sloyov/deformiruyushii-skelet",
        "perechen-sloyov/sferizaciya",
        "perechen-sloyov/rastyazhenie",
        "perechen-sloyov/vikhr",
        "perechen-sloyov/iskazhenie",
        "perechen-sloyov/porog",
        "perechen-sloyov/cvetokorrekciya",
        "perechen-sloyov/poluton-2",
        "perechen-sloyov/poluton-3",
        "perechen-sloyov/klyuch-svetimosti",
        "perechen-sloyov/zhyulia",
        "perechen-sloyov/mandelbrot",
        "perechen-sloyov/sploshnaya-zalivka",
        "perechen-sloyov/rasshirennyi-kontur",
        "perechen-sloyov/shakhmatnaya-doska",
        "perechen-sloyov/okruzhnost",
        "perechen-sloyov/kontur",
        "perechen-sloyov/mnogougolnik",
        "perechen-sloyov/pryamougolnik",
        "perechen-sloyov/oblast",
        "perechen-sloyov/zvezda",
        "perechen-sloyov/konicheski-gradient",
        "perechen-sloyov/iskrivlyonnyi-gradient",
        "perechen-sloyov/lineinyi-gradient",
        "perechen-sloyov/gradientnyi-shum",
        "perechen-sloyov/radialnyi-gradient",
        "perechen-sloyov/spiralnyi-gradient",
        "perechen-sloyov/dublirovat",
        "perechen-sloyov/gruppiruyushii-sloi",
        "perechen-sloyov/gruppa-pereklyuchatel",
        "perechen-sloyov/gruppa-filtrov",
        "perechen-sloyov/import-izobrazheniya",
        "perechen-sloyov/rasteniya",
        "perechen-sloyov/skelet",
        "perechen-sloyov/zvuk",
        "perechen-sloyov/sglazhivanie",
        "perechen-sloyov/tekst",
        "perechen-sloyov/faska",
        "perechen-sloyov/ten",
        "perechen-sloyov/svobodnoe-vremya",
        "perechen-sloyov/stroboskop",
        "perechen-sloyov/petlya-vremeni",
        "perechen-sloyov/vrashenie",
        "perechen-sloyov/peremeshenie",
        "perechen-sloyov/filtruyushaya-gruppa"
      ],
    },
    {
      type: "category",
      label: "Инструменты анимации",
      items: [
        "instrumenty-animacii/staticheskie-parametry",
        "instrumenty-animacii/klyuchevye-kadry",
        "instrumenty-animacii/grafiki",
        "instrumenty-animacii/kalka",
        "instrumenty-animacii/petlya-vremeni",
        "instrumenty-animacii/animaciya-vdol-krivoi",
        "instrumenty-animacii/sloi-pereklyuchatel",
        "instrumenty-animacii/import-zvukovykh-failov",
        "instrumenty-animacii/lipsink"
      ],
    },
    {
      type: "category",
      label: "Связывание данных",
      items: [
        "svyazyvanie-dannykh/svyazyvanie-parametrov",
        "svyazyvanie-dannykh/vlozhennye-kholsty",
        "svyazyvanie-dannykh/svyazyvanie-failov"
      ],
    },
    {
      type: "category",
      label: "Конвертеры",
      items: [
        "konvertery/o-konverterakh",
        "konvertery/sluchainyi",
        "konvertery/lineinyi",
        "konvertery/average",
        "konvertery/sos",
        "konvertery/derivative",
        "konvertery/dot-product",
        "konvertery/exponential",
        "konvertery/integer",
        "konvertery/greyed",
        "konvertery/linear",
        "konvertery/logarithm",
        "konvertery/power",
        "konvertery/random",
        "konvertery/reference",
        "konvertery/scale",
        "konvertery/sine",
        "konvertery/step",
        "konvertery/subtract",
        "konvertery/switch",
        "konvertery/time-swap",
        "konvertery/time-loop",
        "konvertery/vector-length",
        "konvertery/vector-x",
        "konvertery/vector-y"
      ],
    },
    {
      type: "category",
      label: "Скелетная анимация",
      items: [
        "skeletnaya-animaciya/sozdanie-skeleta",
        "skeletnaya-animaciya/privyazka-grupp-i-izobrazhenii",
        "skeletnaya-animaciya/privyazka-vektornykh-sloyov",
        "skeletnaya-animaciya/deformiruyushii-skelet"
      ],
    },
    {
      type: "category",
      label: "Плагины",
      items: [
        "plaginy/ustanovka-plaginov"
      ],
    }
  ],
};
