import './App.css';

function App() {
  return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif', maxWidth: '1000px', margin: '0 auto', textAlign: 'left' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2.5rem' }}>
        Практична робота 1: Теоретичні основи менеджменту в освіті. Основні поняття та теорії.
      </h1>

      <section style={{ marginBottom: '40px' }}>
        <h3 style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px', color: '#000000' }}>
          Завдання 1. Теоретичний блок
        </h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr style={{ backgroundColor: 'rgba(100, 108, 255, 0.1)' }}>
              <th style={{ border: '1px solid gray', padding: '12px', textAlign: 'left' }}>Термін</th>
              <th style={{ border: '1px solid gray', padding: '12px', textAlign: 'left' }}>Визначення</th>
              <th style={{ border: '1px solid gray', padding: '12px', textAlign: 'left' }}>Приклад у школі</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid gray', padding: '10px' }}><b>Менеджмент в освіті</b></td>
              <td style={{ border: '1px solid gray', padding: '10px' }}>Система принципів і методів організації освітнього процесу.</td>
              <td style={{ border: '1px solid gray', padding: '10px' }}>Розробка стратегії розвитку ліцею.</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid gray', padding: '10px' }}><b>Управління</b></td>
              <td style={{ border: '1px solid gray', padding: '10px' }}>Цілеспрямований вплив на об'єкт.</td>
              <td style={{ border: '1px solid gray', padding: '10px' }}>Коригування розкладу уроків.</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid gray', padding: '10px' }}><b>Ефективність управління</b></td>
              <td style={{ border: '1px solid gray', padding: '10px' }}>Відповідність результатів цілям за оптимального використання ресурсів.</td>
              <td style={{ border: '1px solid gray', padding: '10px' }}>Закупівля інтерактивних панелей за зекономлені кошти.</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid gray', padding: '10px' }}><b>Педагогічне керівництво</b></td>
              <td style={{ border: '1px solid gray', padding: '10px' }}>Організуючий вплив на учасників процесу.</td>
              <td style={{ border: '1px solid gray', padding: '10px' }}>Наставництво над молодим вчителем інформатики.</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid gray', padding: '10px' }}><b>Командна робота</b></td>
              <td style={{ border: '1px solid gray', padding: '10px' }}>Взаємодія групи для досягнення спільної мети.</td>
              <td style={{ border: '1px solid gray', padding: '10px' }}>Розробка міждисциплінарного STEM-проєкту.</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid gray', padding: '10px' }}><b>Планування</b></td>
              <td style={{ border: '1px solid gray', padding: '10px' }}>Формування цілей та вибір шляхів досягнення.</td>
              <td style={{ border: '1px solid gray', padding: '10px' }}>Складання річного плану методоб'єднання.</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid gray', padding: '10px' }}><b>Організація</b></td>
              <td style={{ border: '1px solid gray', padding: '10px' }}>Створення оптимальної структури.</td>
              <td style={{ border: '1px solid gray', padding: '10px' }}>Розподіл обов'язків в атестаційній комісії.</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid gray', padding: '10px' }}><b>Мотивація</b></td>
              <td style={{ border: '1px solid gray', padding: '10px' }}>Спонукання до праці.</td>
              <td style={{ border: '1px solid gray', padding: '10px' }}>Преміювання вчителів, учні яких перемогли на олімпіадах.</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid gray', padding: '10px' }}><b>Контроль</b></td>
              <td style={{ border: '1px solid gray', padding: '10px' }}>Спостереження за нормами.</td>
              <td style={{ border: '1px solid gray', padding: '10px' }}>Перевірка ведення електронних журналів.</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid gray', padding: '10px' }}><b>Демократичний стиль</b></td>
              <td style={{ border: '1px solid gray', padding: '10px' }}>Делегування повноважень.</td>
              <td style={{ border: '1px solid gray', padding: '10px' }}>Спільне обговорення формату педради.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h3 style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px', color: '#646cff' }}>
          Завдання 2. Аналіз структури управління Карпатського національного університету імені Василя Стефаника
        </h3>
        <p style={{ lineHeight: '1.6', marginBottom: '10px' }}>
          Організаційна структура Карпатського національного університету імені Василя Стефаника побудована за лінійно-функціональним принципом та є багаторівневою, оскільки включає академічні, методичні та наукові підрозділи.
        </p>
        <ul style={{ lineHeight: '1.6', paddingLeft: '20px' }}>
          <li><b>Стратегічний рівень, лінійне керівництво:</b> очолює університет ректорка, яка здійснює загальне управління. Їй безпосередньо підпорядковані проректори з різних напрямів (науково-педагогічна, наукова робота, соціально-економічний розвиток), які виконують функціональне керівництво.</li>
          <li><b>Колегіальні органи:</b> вчена рада університету є ключовим органом прийняття стратегічних рішень. З нею тісно співпрацює Методична рада, яка відповідає за навчально-методичне забезпечення. На рівні підрозділів діють вчені та методичні ради факультетів/інститутів.</li>
          <li><b>Виконавчий рівень, академічні та наукові підрозділи:</b> безпосередню освітню діяльність реалізують факультети, інститути та їхні базові осередки — кафедри.</li>
          <li><b>Інноваційна та допоміжна інфраструктура:</b> окрему структурну гілку утворюють спеціалізовані підрозділи: Центр інновацій, Центр якості освіти, наукові лабораторії та підготовче відділення.</li>
        </ul>
        <p style={{ lineHeight: '1.6', marginTop: '10px' }}>
          Така структура управління забезпечує оптимальний розподіл повноважень, поєднуючи єдиноначальність із колегіальністю. Це гарантує цілеспрямований розвиток закладу та високу якість освітніх послуг.
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h3 style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px', color: '#646cff' }}>
          Завдання 3. Практична ситуація
        </h3>
        <p style={{ lineHeight: '1.6' }}><b>Функції менеджменту:</b> </p>
        <ul style={{ lineHeight: '1.6', paddingLeft: '20px' }}>
          <li>Планування — виділення годин у варіативній складовій, підготовка бази.</li>
          <li>Організація — призначення відповідальних.</li>
          <li>Мотивація — матеріальне стимулювання ініціативних.</li>
          <li>Контроль — моніторинг якості наприкінці семестру.</li>
        </ul>

        <p style={{ lineHeight: '1.6', marginTop: '15px' }}><b>Кроки вирішення конфлікту:</b></p>
        <ol style={{ lineHeight: '1.6', paddingLeft: '20px' }}>
          <li>Провести відкрите обговорення для з'ясування причин опору частини колективу.</li>
          <li>Створити пілотну робочу групу виключно із зацікавлених педагогів для першого етапу.</li>
          <li>Продемонструвати успішні результати пілотної групи решті колективу для підвищення загальної мотивації.</li>
        </ol>

        <p style={{ lineHeight: '1.6', marginTop: '15px' }}><b>Аналіз школи №18, м. Івано-Франківськ:</b></p> 
        <p style={{ lineHeight: '1.6', marginTop: '15px' }}>Структура управління лінійно-функціональна. Директор здійснює стратегічне управління, заступники координують навчальний процес, а методичні об'єднання забезпечують фахову підтримку. Принципи управління поєднують централізацію — виконання держстандартів, та децентралізацію — академічну свободу..</p>
        
        <p style={{ lineHeight: '1.6', marginTop: '15px' }}><b>Атестація:</b></p> 
        <p style={{ lineHeight: '1.6', marginTop: '15px' }}> Вчитель математики або інформатики, який працює четвертий рік і має диплом спеціаліста, має право атестуватися на ІІ категорію, оскільки необхідний мінімальний стаж становить три роки.</p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h3 style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px', color: '#646cff' }}>
          Завдання 4. Контрольні запитання
        </h3>
        <ul style={{ lineHeight: '1.6', paddingLeft: '20px' }}>
          <li><b>Ключові завдання:</b> забезпечення раціонального використання ресурсів та створення умов для саморозвитку учасників освітнього процесу.</li>
          <li><b>Сучасні підходи:</b> системний, процесний, ситуаційний, програмно-цільовий підходи та теорія організаційної культури.</li>
          <li><b>Складові команди:</b> партнерські стосунки, спільне визначення мети, особистісний підхід та колективний пошук новаторських ідей.</li>
        </ul>
      </section>
    </div>
  );
}

export default App;