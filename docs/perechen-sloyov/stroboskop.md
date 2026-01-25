import useBaseUrl from '@docusaurus/useBaseUrl';

# Стробоскоп

![](/img/gitbook/layer_other_stroboscope_icon.png)

Слой стробоскопа показывает слои под ним через равные промежутки времени, а затем замораживает их на оставшуюся часть интервала. Это похоже на уменьшение частоты кадров анимации при сохранении ее продолжительности.&#x20;

**Параметры слоев стробоскопа следующие:**

| Имя                                                                                                                                                                                                         | Значение  | Тип      |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | -------- |
| [<img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_0yZ1YyARITCvtIGYdm7hlY5XT0zR0oWWMLhq3amQkcAlrWsMLd8zbA4Ess3-2lzN3wHe51Uo3y0DesOW80gHNE8uOchJBOUzMappTqPUqJo0tfSYiOpk_wVhojfxNV9Bn47ZW2EkzylcZ8QHgrC77LY_8d42e329a7f7.png')} alt="Type_real_icon.png" data-size="line" />](/assets/lh7-us.googleusercontent.com_0yZ1YyARITCvtIGYdm7hlY5XT0zR0oWWMLhq3amQkcAlrWsMLd8zbA4Ess3-2lzN3wHe51Uo3y0DesOW80gHNE8uOchJBOUzMappTqPUqJo0tfSYiOpk_wVhojfxNV9Bn47ZW2EkzylcZ8QHgrC77LY_8d42e329a7f7.png) Глубина Z | 0.000000u | реальный |
| [<img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_0yZ1YyARITCvtIGYdm7hlY5XT0zR0oWWMLhq3amQkcAlrWsMLd8zbA4Ess3-2lzN3wHe51Uo3y0DesOW80gHNE8uOchJBOUzMappTqPUqJo0tfSYiOpk_wVhojfxNV9Bn47ZW2EkzylcZ8QHgrC77LY_8d42e329a7f7.png')} alt="Type_real_icon.png" data-size="line" />](/assets/lh7-us.googleusercontent.com_0yZ1YyARITCvtIGYdm7hlY5XT0zR0oWWMLhq3amQkcAlrWsMLd8zbA4Ess3-2lzN3wHe51Uo3y0DesOW80gHNE8uOchJBOUzMappTqPUqJo0tfSYiOpk_wVhojfxNV9Bn47ZW2EkzylcZ8QHgrC77LY_8d42e329a7f7.png) Частота   | 2.000000u | реальный |

У слоя есть единственный параметр, называемый “Частота” (в разах в секунду), который определяет, как часто берутся кадры. Частота, равная частоте кадров в секунду в вашем проекте, не повлияет на вашу анимацию, в то время как меньшие частоты будут отображаться так, как если бы вы снизили частоту кадров до этой величины.

<figure><img src={useBaseUrl('/img/gitbook/Стробоскоп0001-0119.gif')} alt="" width="360" /><figcaption></figcaption></figure>

:::info
С помощью слоя у вас может получиться 2 разные анимации с двумя разными частотами кадров в одном проекте. Например,  если вы сгруппируете стробоскоп с вашей анимацией и установите частоту 12, то анимация секвенции будет проигрываться 12 кадров в секунду. При этом, плавный паралакс так и останется на частоте 24 кадра в секнду&#x20;
:::
