# Установка версии для Linux

Чтобы установить программу на операционную систему Linux, необходимо перейти на сайт [https://synfig.ru/](https://synfig.ru/) и нажать кнопку "Загрузить".&#x20;

На странице загрузки выберите опцию "Linux" и нажмите кнопку "Скачать".

В открывшемся окне введите свою электронную почту, чтобы скачать программу и подписаться на уведомления о новых версиях. Либо нажмите на нижнюю кнопку, чтобы просто скачать инсталлятор.

Начнётся скачивание файла в формате AppImage.

После завершения загрузки необходимо сделать скачанный файл исполняемым:

* _В графической среде MATE_: щёлкните на скачанном файле правой кнопкой мыши и выберите пункт меню «Параметры/Свойства» (Properties) – перейдите на вкладку «Права» (Permissions) и поставьте галочку напротив пункта «Позволять выполнение файла как программы/Исполняемый как приложение» (Allow this file to run as a program) и закройте окно.

<figure><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXfob2WT_rANW4gY0XX1PyE-4Y2m_FnALnMBH18hgEsBWcHBrhZC7rS59vZopL0kqqDKciv40IntJtemnjse9VBKNcCxXi19cBElaVlMSTy4345SmEUtNUVzRUxCaQ98_s_mDrBtqg?key=Qugbi_qs3K00HPoLAYA-7UrI" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
ПРИМЕЧАНИЕ: При первом запуске отекроется окно о том, чтобы интегрировать приложение в систему. В таком случае у приложения появится иконка Synfig и оно будет добавлено в список приложений в вашей системе. Вы можете согласиться, а можете выбрать “нет”, но приложение по-прежнему будет запускаться по двойному щелчку.
{% endhint %}

<figure><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXfsYrGQAZa-4iLNhQmhusUbMhOilOYeYHDYrMsnUGSrMFLYKeXNsJZuuBpx3BbLAwby_cDVtqhnrhX9yXPIvCseq1YamNnOtpOGcKMdgnSsecsm1n4PaJv9jRZ4e1cj724ImTIDuw?key=Qugbi_qs3K00HPoLAYA-7UrI" alt=""><figcaption></figcaption></figure>

* В терминале: откройте окно терминала и введите туда следующую команду: `chmod u+x /ваш_путь_до_файла/имя_файла.appimage`. Вместо «ваш\_путь\_до\_файла» укажите расположение загруженного файла, а вместо «имя\_файла» укажите его имя.

<figure><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXe0ys0fa3Z7ePujWRZla4EfiR9JxSSx3LO-8eEquslS-1-TMKnkMtM7CjEHhFg5RGTeOaAGaS7BL1eDGC7P8zYESMBWB8XP1kUHKQKIy3EJBx-DxYLDkYoJo4O_Fix9fBtch8er?key=Qugbi_qs3K00HPoLAYA-7UrI" alt=""><figcaption></figcaption></figure>

Дважды щёлкните на файл AppImage, чтобы запустить программу.

## Возможные проблемы и их решения:

В системе Ubuntu может случиться так, что при установке флажка “Позволять выполнение файла как программы” и последующей попытке запуска в графической среде ничего не произойдёт. При запуске непосредственно из терминала мы можем увидеть следующую ошибку:

<pre><code><strong>SynfigStudio-ME-1.4.5.1-2024.05.19-linux64-44b99.appimage: error while loading shared libraries: libfuse.so.2: cannot open shared object file: No such file or directory
</strong></code></pre>

Это значит, что библиотека `libfuse.so.2`необходимая для запуска приложения SynfigStudio, отсутствует в вашей системе. Чтобы всё заработало, её нужно будет установить.

* Заходим в терминал, вводим команду `sudo apt-get install fuse`
* Проверяем наличие библиотеки `ls /lib/x86_64-linux-gnu/libfuse.so.2` Если файл существует, это означает, что библиотека установлена правильно.

Если проблема не решается, убедитесь, что вы используете последнюю версию SynfigStudio и что ваша система обновлена:&#x20;

* `sudo apt-get update`
* `sudo apt-get upgrade`
