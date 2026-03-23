import { ContentLayout } from "@/components/content-layout";

export default function CameraParamsPage() {
  return (
    <ContentLayout
      title="镜头参数详解"
      description="焦段、光圈、快门、ISO、帧率等6大核心参数详解"
    >
      <div className="prose-content">
        <h2>核心参数速查</h2>
        
        <p>"镜头参数"一般指的是<strong>镜头和拍摄设置相关的专业参数</strong>。它和你刚才问的"机位、角度"不一样：机位是"相机放哪儿"，镜头参数是"用什么镜头、什么焦段、什么光圈、什么快门来拍"。</p>

        <p>最常见可以分成这几组：</p>
        <ul>
          <li>焦段 / 视角类</li>
          <li>光圈 / 景深类</li>
          <li>快门 / 运动表现类</li>
          <li>感光度 / 噪点类</li>
          <li>对焦 / 成像特性类</li>
          <li>色温 / 画面气质类</li>
          <li>帧率 / 画面运动风格类</li>
        </ul>

        <hr />

        <h2>一、焦段类：决定"看起来近还是远、空间是压缩还是夸张"</h2>

        <h3>1. 焦段（Focal Length）</h3>
        <p><strong>单位</strong>：mm</p>
        <p>常见说法：</p>
        <ul>
          <li><strong>超广角</strong>：14mm、16mm</li>
          <li><strong>广角</strong>：24mm、28mm、35mm</li>
          <li><strong>标准焦段</strong>：50mm</li>
          <li><strong>中长焦</strong>：85mm、100mm、135mm</li>
          <li><strong>长焦 / 远摄</strong>：200mm 以上</li>
        </ul>

        <h3>2. 超广角</h3>
        <p><strong>特点</strong>：</p>
        <ul>
          <li>视野非常大</li>
          <li>空间透视夸张</li>
          <li>近大远小特别明显</li>
          <li>容易产生边缘拉伸变形</li>
        </ul>
        <p><strong>风格</strong>：有冲击力、空间感强、临场感强；有时会有"压迫、怪异、速度感"的感觉</p>
        <p><strong>适用情况</strong>：室内空间小想拍得更宽、建筑风景旅行、运动跟拍、第一人称视角、想故意做夸张透视风格</p>
        <p><strong>不太适合</strong>：正常人像特写（容易脸变形）、严肃采访近距离拍人</p>

        <h3>3. 广角（24mm、28mm、35mm）</h3>
        <p><strong>特点</strong>：比较自然地交代环境、兼顾人物和空间、透视感比标准焦段更明显</p>
        <p><strong>风格</strong>：纪实、电影感、现场感；比较有"进入场景内部"的感觉</p>
        <p><strong>适用情况</strong>：剧情片环境人物镜头、Vlog、街拍纪录片、小空间采访</p>
        <p><strong>典型印象</strong>：</p>
        <ul>
          <li><strong>24mm</strong>：更有环境感</li>
          <li><strong>35mm</strong>：非常常用，兼顾人物和空间，电影里很多"万能焦段"就是它</li>
        </ul>

        <h3>4. 标准焦段（50mm）</h3>
        <p><strong>特点</strong>：视角比较接近人眼主观感受、透视自然、既不太夸张也不太压缩</p>
        <p><strong>风格</strong>：平衡、克制、自然；很适合叙事</p>
        <p><strong>适用情况</strong>：人物半身、静物、剧情镜头、人像入门、日常记录、不想让镜头语言太"跳"</p>

        <h3>5. 中长焦（85mm、100mm、135mm）</h3>
        <p><strong>特点</strong>：背景更容易虚化、透视压缩更明显、人脸更立体更"好看"</p>
        <p><strong>风格</strong>：柔和、精致、干净、情绪集中；商业人像感更强</p>
        <p><strong>适用情况</strong>：人像、特写、访谈、产品细节、想把主体从背景中"拎出来"</p>
        <p><strong>典型印象</strong>：</p>
        <ul>
          <li><strong>85mm</strong>：经典人像焦段</li>
          <li><strong>135mm</strong>：压缩感更强，更有距离感和电影感</li>
        </ul>

        <h3>6. 长焦 / 远摄（200mm、300mm 以上）</h3>
        <p><strong>特点</strong>：视角很窄、空间压缩强、很远的东西看起来被"拉近"、背景虚化明显</p>
        <p><strong>风格</strong>：偷窥感、观察感、疏离感；压缩空间后会有独特的图形感</p>
        <p><strong>适用情况</strong>：体育、演唱会、野生动物、街头抓拍、不方便靠近主体时</p>
        <p><strong>不太适合</strong>：小空间内拍摄、需要大量环境交代时</p>

        <hr />

        <h2>二、光圈类：决定亮度、景深、虚化风格</h2>

        <h3>1. 光圈（Aperture / F-stop）</h3>
        <p><strong>常见表示</strong>：f/1.4、f/2、f/2.8、f/4、f/5.6、f/8、f/11</p>

        <h4>核心规律</h4>
        <ul>
          <li><strong>f值越小</strong> → 光圈越大 → 进光量越多 → 景深越浅 → 背景更虚</li>
          <li><strong>f值越大</strong> → 光圈越小 → 进光量越少 → 景深越深 → 画面更清楚</li>
        </ul>

        <h3>2. 大光圈（f/1.2、f/1.4、f/1.8、f/2）</h3>
        <p><strong>风格</strong>：浅景深、背景虚化强、画面柔美梦幻情绪化、主体突出非常明显</p>
        <p><strong>适用情况</strong>：人像、夜景、情绪特写、产品特写、想让画面更"贵"更有氛围时</p>
        <p><strong>注意</strong>：对焦难度高、容易只有眼睛清楚鼻子耳朵都虚、群像或多人合影不一定适合</p>

        <h3>3. 中等光圈（f/2.8、f/4、f/5.6）</h3>
        <p><strong>风格</strong>：清晰度和虚化平衡、比较稳妥商业通用</p>
        <p><strong>适用情况</strong>：采访、纪录、活动拍摄、电商产品、大多数"既想清楚又想有层次"的场景</p>

        <h3>4. 小光圈（f/8、f/11、f/16）</h3>
        <p><strong>风格</strong>：景深深、前后都比较清楚、更理性客观信息量大</p>
        <p><strong>适用情况</strong>：风景、建筑、集体照、产品棚拍、希望从前景到背景都清晰时</p>
        <p><strong>注意</strong>：光线不够时容易逼着你升ISO或放慢快门；太小有时会有衍射，画质未必最好</p>

        <hr />

        <h2>三、景深：决定"清楚的范围有多深"</h2>

        <h3>浅景深</h3>
        <p><strong>特点</strong>：只有主体附近清楚、前后快速虚掉</p>
        <p><strong>风格</strong>：情绪化、电影感、梦幻、注意力集中</p>
        <p><strong>适用情况</strong>：人像、特写、产品细节、情绪镜头</p>

        <h3>深景深</h3>
        <p><strong>特点</strong>：前后大范围都清楚</p>
        <p><strong>风格</strong>：客观、纪实、信息完整、空间关系清楚</p>
        <p><strong>适用情况</strong>：风景、建筑、群戏、纪录片观察镜头</p>

        <hr />

        <h2>四、快门参数：决定"运动是清晰、拖影还是凝固"</h2>

        <h3>1. 快门速度（Shutter Speed）</h3>
        <p><strong>常见</strong>：1/50、1/100、1/250、1/500、1/1000</p>

        <h3>2. 慢快门</h3>
        <p><strong>特点</strong>：进光多、容易拖影、运动模糊明显</p>
        <p><strong>风格</strong>：柔、流动、梦幻、速度痕迹；有时有危险感、迷离感</p>
        <p><strong>适用情况</strong>：夜景车流、水流丝滑效果、创意摄影、想表现速度轨迹</p>
        <p><strong>注意</strong>：容易糊、手持不稳会抖</p>

        <h3>3. 常规快门</h3>
        <p>视频里最常按"<strong>180度快门原则</strong>"理解：</p>
        <ul>
          <li>24fps → 约 1/48，通常用 <strong>1/50</strong></li>
          <li>25fps → <strong>1/50</strong></li>
          <li>30fps → <strong>1/60</strong></li>
        </ul>
        <p><strong>风格</strong>：运动模糊自然、最像常规电影视频观感</p>
        <p><strong>适用情况</strong>：大多数叙事拍摄、采访、剧情、正常活动记录</p>

        <h3>4. 高快门（1/250、1/500、1/1000）</h3>
        <p><strong>特点</strong>：动作被凝固、画面更"硬"、运动模糊减少</p>
        <p><strong>风格</strong>：冷、锐、紧张、纪实冲击感强；有时像战争片或运动广告</p>
        <p><strong>适用情况</strong>：体育、动作抓拍、水花爆裂奔跑、想让运动细节极清楚</p>
        <p><strong>注意</strong>：视频里如果长期太高快门，画面会显得"脆""电子感强"、不够自然</p>

        <hr />

        <h2>五、ISO：决定亮度与噪点风格</h2>

        <h3>低ISO</h3>
        <p><strong>特点</strong>：噪点少、画面纯净、细节干净</p>
        <p><strong>风格</strong>：干净、精致、商业感强</p>
        <p><strong>适用情况</strong>：白天、棚拍、产品、风景、广告</p>

        <h3>高ISO</h3>
        <p><strong>特点</strong>：画面更亮、但噪点增加、对比和色彩纯度可能下降</p>
        <p><strong>风格</strong>：纪实、粗粝、夜晚氛围；有时带一点胶片般颗粒感</p>
        <p><strong>适用情况</strong>：夜景、演出、室内低光、不允许补光时</p>
        <p><strong>注意</strong>：高ISO不等于高级颗粒，很多时候只是脏噪点；商业片通常尽量控制在可接受范围</p>

        <hr />

        <h2>六、帧率：决定运动风格和时间感</h2>

        <h3>24fps</h3>
        <p><strong>风格</strong>：最常见的"电影感"、运动略带柔和模糊、节奏感比较叙事化</p>
        <p><strong>适用情况</strong>：剧情片、广告、MV、想要电影质感</p>

        <h3>25fps / 30fps</h3>
        <p><strong>风格</strong>：更接近电视网络视频纪实内容、比24fps稍微更"顺"一点</p>
        <p><strong>适用情况</strong>：采访、综艺、活动记录、口播视频、常规商业视频</p>

        <h3>高帧率（50fps、60fps、100fps、120fps）</h3>
        <p><strong>风格</strong>：动作更流畅、放慢后更丝滑、有时也会显得太"真"太清楚</p>
        <p><strong>适用情况</strong>：慢动作、运动、水花头发布料飘动、广告质感镜头</p>
        <p><strong>注意</strong>：不是所有内容都适合高帧率；日常叙事如果全片高帧率，反而可能削弱电影感</p>

        <hr />

        <h2>最常用的"参数风格组合"</h2>

        <h3>电影叙事感</h3>
        <ul>
          <li>24fps</li>
          <li>快门 1/50</li>
          <li>35mm / 50mm / 85mm</li>
          <li>光圈 f/2 ～ f/2.8</li>
          <li>低ISO尽量控制</li>
          <li>手动对焦或稳定跟焦</li>
        </ul>
        <p><strong>风格</strong>：自然、沉浸、情绪集中</p>

        <h3>纪实 / 纪录片风格</h3>
        <ul>
          <li>24fps 或 25fps</li>
          <li>24mm / 35mm</li>
          <li>光圈 f/2.8 ～ f/5.6</li>
          <li>自动对焦</li>
          <li>手持或轻微晃动</li>
          <li>ISO根据现场灵活调整</li>
        </ul>
        <p><strong>风格</strong>：真实、临场、呼吸感强</p>

        <h3>商业人像风格</h3>
        <ul>
          <li>50mm / 85mm / 135mm</li>
          <li>大光圈 f/1.4 ～ f/2.8</li>
          <li>低ISO</li>
          <li>中低机位或平视</li>
          <li>背景尽量简洁</li>
        </ul>
        <p><strong>风格</strong>：干净、突出主体、质感高级</p>

        <h3>产品广告风格</h3>
        <ul>
          <li>50mm / 85mm / 微距</li>
          <li>光圈 f/4 ～ f/11</li>
          <li>低ISO</li>
          <li>三脚架</li>
          <li>手动对焦</li>
          <li>控制光线和反光</li>
        </ul>
        <p><strong>风格</strong>：精致、锐利、细节清楚</p>

        <hr />

        <h2>现场最实用的参数口诀</h2>

        <p><strong>先定帧率，再定快门，再看光圈，再补ISO，最后锁白平衡。</strong></p>

        <p>比如：</p>
        <ul>
          <li>24fps → 快门先设 1/50</li>
          <li>25fps → 快门先设 1/50</li>
          <li>30fps → 快门先设 1/60</li>
        </ul>

        <p>然后：</p>
        <ul>
          <li>想虚化就开大光圈</li>
          <li>想更清楚就收小光圈</li>
          <li>还不够亮再升ISO</li>
        </ul>

        <hr />

        <h2>最容易出错的地方</h2>

        <h3>1. 光圈开太大</h3>
        <p><strong>问题</strong>：人一动就虚、对焦面太薄</p>
        <p><strong>适合</strong>：单人特写、情绪镜头</p>
        <p><strong>不太适合</strong>：采访、多人同框、活动记录</p>

        <h3>2. 自动白平衡</h3>
        <p><strong>问题</strong>：一个镜头里颜色来回跳、后期不好统一</p>
        <p><strong>建议</strong>：正式拍摄尽量固定白平衡</p>

        <h3>3. 快门过高</h3>
        <p><strong>问题</strong>：视频运动太"硬"、画面显得碎脆不自然</p>
        <p><strong>适合</strong>：动作凝固、特殊风格</p>
        <p><strong>不适合</strong>：常规叙事视频全程使用</p>

        <h3>4. ISO过高</h3>
        <p><strong>问题</strong>：噪点多、画面脏、细节变差</p>
        <p><strong>建议</strong>：优先补光，其次开大光圈，最后再升ISO</p>
      </div>
    </ContentLayout>
  );
}
