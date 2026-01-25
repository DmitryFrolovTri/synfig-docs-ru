import useBaseUrl from '@docusaurus/useBaseUrl';

# Ключ светимости

<img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_XULA51rtCFc_rGM7YvkPI2jTK4YiPjYGg-fVsicghN9R84rqsSqMTpfk5q7X7Sw8f5qtHIMG6RTFNjuyon00TftOAkkihMQuuI74EgFlaFubBhqMYxSu4TGkkq9zKNyiWMEBfd_YolOM7M6rVc9f7pE_831edbdfb4e0.png')} alt="Layer_filter_lumakey_icon.png" data-size="original" />

Слой ключ светиости выполняет следующие действия: для каждого пикселя изображения он присваивает значение альфа в зависимости от его яркости. Например, черные пиксели становятся на 100% прозрачными. Белые пиксели абсолютно непрозрачны. Серые пиксели полупрозрачны.

Параметры ключевых слоев Luma следующие:\


| Имя                                                                                                                                                                                                                                                                                                                                                               | Значение    | Тип         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| <img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_0yZ1YyARITCvtIGYdm7hlY5XT0zR0oWWMLhq3amQkcAlrWsMLd8zbA4Ess3-2lzN3wHe51Uo3y0DesOW80gHNE8uOchJBOUzMappTqPUqJo0tfSYiOpk_wVhojfxNV9Bn47ZW2EkzylcZ8QHgrC77LY_8d42e329a7f7.png')} alt="Real_icon.png" data-size="line" /> [Параметр глубины Z](https://synfig.readthedocs.io/en/latest/parameters/z-depth.html#parameters-zdepth)             | 0.000000    | реальный    |
| <img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_0yZ1YyARITCvtIGYdm7hlY5XT0zR0oWWMLhq3amQkcAlrWsMLd8zbA4Ess3-2lzN3wHe51Uo3y0DesOW80gHNE8uOchJBOUzMappTqPUqJo0tfSYiOpk_wVhojfxNV9Bn47ZW2EkzylcZ8QHgrC77LY_8d42e329a7f7.png')} alt="Real_icon.png" data-size="line" /> [Непрозрачность](https://synfig.readthedocs.io/en/latest/parameters/opacity.html#opacity)                           | 1.000000    | реальный    |
| <img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_2iTUGrJsa6CFF2Tk5-wI-jGxZ6MGpJ1sOK1jHmLCHXYjHHqnUEHnmCnIikeLBPNMXYv9E9Trr5P_dBhVkwfng-zqjApzeEq3RD8kgJyvzw13nhcGIIwyBrlGyHTnk0Q45X6MEjtNOuDtjU5aeJbQ628_3ccf0c146f47.png')} alt="Integer_icon.png" data-size="line" /> [Метод наложения](https://synfig.readthedocs.io/en/latest/parameters/blend\_method.html#parameters-blend-method) | Композитный | целое число |