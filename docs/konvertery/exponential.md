import useBaseUrl from '@docusaurus/useBaseUrl';

# Exponential

**Преобразование в параметре "Непрозрачность" добавляет два подпараметра:**

* "Экспонент"
* "Масштаб"

<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_oDw5Y27QrqRtw6PMHkZMdDkMya9b4MIneSOtDKw4r6EaAWfnoB6Igm_tQN3IEVAzHU58WtiEbHL7oaGqCbU95xOInXzAPGE5rRlF41KUlNN75T06cE2H3P3pRSvgG7EJvfYituzsJxyjXwOV-NVEfcg_a56151e2a2ca.png')} alt="" /><figcaption></figcaption></figure>

Результирующее значение является результатом возведения [математической константы 'e'](http://en.wikipedia.org/wiki/E_\(mathematical_constant\)) в степень "Экспоненты" и масштабирования результата на "Scale". То есть возвращается:

Масштаб \* e ^ Экспонента

Это полезно для отслеживания слоев, которые были увеличены, поскольку слой [Масштабирования](https://wiki.synfig.org/Zoom_Layer) масштабируется на e ^ (коэффициент масштабирования).