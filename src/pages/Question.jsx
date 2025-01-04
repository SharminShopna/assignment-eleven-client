import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const Question = () => {
  const {isDarkMode} = useContext(AuthContext)
    return (
        <>
        <Helmet>
        <title>Question | TutorBooking</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="w-11/12 mx-auto">
      <Header></Header>
      <div className={`mt-28 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        
           <div className={`collapse ${isDarkMode ? 'bg-gray-800' : 'bg-base-200'} my-6`}>
  <input type="radio"className="" name="my-accordion-1" defaultChecked />
  <div className="collapse-title text-xl font-medium my-4">How does the use of figurative language enhance the depth of meaning in literary texts?</div>
  <div className="collapse-content">
    <p> Figurative language, such as metaphors, similes, and personification, allows authors to convey complex ideas and emotions in a more vivid and relatable way. For example, comparing hope to a bird that perches in the soul (as Emily Dickinson does) creates a richer emotional connection for the reader, evoking the fragility and resilience of hope simultaneously.</p>
  </div>
</div>
  <div className={`collapse ${isDarkMode ? 'bg-gray-800' : 'bg-base-200'} my-6`}>
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title text-xl font-medium">Discuss the impact of context on the interpretation of a word with multiple meanings.</div>
  <div className="collapse-content">
    <p> Context provides clarity to ambiguous words by guiding the reader toward the intended meaning. For example, the word bank can refer to a financial institution or the side of a river. A sentence like The boat docked on the bank makes it clear that bank refers to the riverbank, as the context involves a boat and docking.</p>
  </div>
</div>
<div className={`collapse ${isDarkMode ? 'bg-gray-800' : 'bg-base-200'} my-6`}>
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title text-xl font-medium"> Explain how syntactic structures can influence the tone and mood of a sentence.</div>
  <div className="collapse-content">
    <p>The arrangement of words in a sentence affects how readers perceive its tone and mood. For example, the sentence The sun disappeared below the horizon, leaving a cold shadow over the earth uses descriptive phrases to create a somber mood. Alternatively, The sun dipped below the horizon, painting the sky with hues of orange and pink evokes a peaceful, positive tone.</p>
  </div>
</div> 
<div className={`collapse ${isDarkMode ? 'bg-gray-800' : 'bg-base-200'} my-6`}>
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title text-xl font-medium">كيف يمكن أن تؤثر البلاغة على إيصال المعنى في النصوص الأدبية؟</div>
  <div className="collapse-content">
    <p>الإجابة: البلاغة تساعد على تعميق المعنى وجذب انتباه القارئ باستخدام التشبيه والاستعارة والجناس وغيرها. على سبيل المثال، استخدام الاستعارة الحياة بحر عميق يعطي فكرة عن تعقيد الحياة وصعوبة فهمها بشكل مباشر.</p>
  </div>
</div> 
<div className={`collapse ${isDarkMode ? 'bg-gray-800' : 'bg-base-200'} my-6`}>
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title text-xl font-medium"> كيف يحدد السياق المعنى الصحيح لكلمة لها معانٍ متعددة؟</div>
  <div className="collapse-content">
    <p>الإجابة: السياق يعمل كإطار يوضح المعنى المقصود. مثلاً، كلمة عين قد تعني مصدر ماء أو عضو الرؤية. في جملة وجدت عين ماء في الصحراء، يحدد السياق أن المعنى هو مصدر الماء.</p>
  </div>
</div> 
<div className={`collapse ${isDarkMode ? 'bg-gray-800' : 'bg-base-200'} my-6`}>
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title text-xl font-medium"> كيف تؤثر تراكيب الجمل على النغمة والمزاج في النص؟</div>
  <div className="collapse-content">
    <p>الإجابة: تراكيب الجمل تؤثر على إحساس القارئ بالنص. على سبيل المثال، جملةالرياح تعصف والأشجار تتمايل بشكل مرعب تعطي شعوراً بالخوف. بينما جملة نسيم عليل يمر بين الأشجار تعطي شعوراً بالهدوء والراحة.</p>
  </div>
</div> 
<div className={`collapse ${isDarkMode ? 'bg-gray-800' : 'bg-base-200'} my-6`}>
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title text-xl font-medium">文学において比喩表現が意味の深さをどのように高めるか説明してください。</div>
  <div className="collapse-content">
    <p>比喩表現は、抽象的な概念や感情を具体的で分かりやすい形で伝える手段です。例えば、「希望は魂にとまる小鳥のようだ」という表現は、希望の繊細さと力強さを同時に感じさせ、読者の感情に訴えます。</p>
  </div>
</div> 
<div className={`collapse ${isDarkMode ? 'bg-gray-800' : 'bg-base-200'} my-6`}>
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title text-xl font-medium"> 文脈が多義語の解釈にどのように影響するか議論してください。</div>
  <div className="collapse-content">
    <p>文脈は、多義語の正しい意味を特定する鍵です。たとえば、「はし」という言葉は、橋、端、箸のいずれかを指す可能性があります。「川にかかるはしを渡った」という文では、文脈が「橋」の意味を明確にしています。</p>
  </div>
</div> 
<div className={`collapse ${isDarkMode ? 'bg-gray-800' : 'bg-base-200'} my-6`}>
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title text-xl font-medium">文の構文がトーンやムードにどのように影響するか説明してください。</div>
  <div className="collapse-content">
    <p> 文の構文は、読者が感じる雰囲気や感情を左右します。例えば、「嵐が激しく木々を揺らしている」という文は、不安や恐怖のムードを生み出します。一方、「風が穏やかに木々を撫でている」という文は、平和で落ち着いたトーンを感じさせます。</p>
  </div>
</div>
</div>
</div> 
<Footer></Footer>
        </>
    );
};

export default Question;