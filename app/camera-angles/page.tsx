import { ContentLayout } from "@/components/content-layout";

export default function CameraAnglesPage() {
  return (
    <ContentLayout
      title="拍摄机位和角度"
      description="10种拍摄机位、10种拍摄角度、运动机位术语全解析"
    >
      <div className="prose-content">
        <p>
          一类是<strong>拍摄机位</strong>，偏"摄影机放在哪里、怎么运动"；
          一类是<strong>拍摄角度</strong>，偏"摄影机朝被摄体的哪个方向看"。
        </p>

        <hr />

        <h2>一、拍摄机位：摄影机放置位置与距离</h2>

        <h3>1. 远景 / 大远景（Long Shot / Extreme Long Shot）</h3>
        <p><strong>意思</strong>：人物很小，环境占主导。</p>
        <p><strong>适用情况</strong>：</p>
        <ul>
          <li>交代环境、地点、时代氛围</li>
          <li>表现人物孤独、渺小、漂泊感</li>
          <li>动作场面开场建立空间关系</li>
        </ul>

        <h3>2. 全景（Full Shot）</h3>
        <p><strong>意思</strong>：通常能看到人物全身。</p>
        <p><strong>适用情况</strong>：</p>
        <ul>
          <li>展示人物动作、走位、肢体语言</li>
          <li>舞蹈、打斗、表演类内容</li>
          <li>时装展示、人物出场</li>
        </ul>

        <h3>3. 中景（Medium Shot）</h3>
        <p><strong>意思</strong>：一般到膝盖以上或腰部以上。</p>
        <p><strong>适用情况</strong>：</p>
        <ul>
          <li>对话戏最常用</li>
          <li>兼顾表情和动作</li>
          <li>采访、口播、剧情交流都很稳</li>
        </ul>

        <h3>4. 中近景（Medium Close-Up）</h3>
        <p><strong>意思</strong>：胸部以上。</p>
        <p><strong>适用情况</strong>：</p>
        <ul>
          <li>访谈、Vlog、广告口播</li>
          <li>突出表情，同时保留一点肢体</li>
          <li>情绪比中景更集中</li>
        </ul>

        <h3>5. 近景（Close-Up）</h3>
        <p><strong>意思</strong>：脸部或局部占画面主要面积。</p>
        <p><strong>适用情况</strong>：</p>
        <ul>
          <li>强调情绪、心理变化</li>
          <li>关键台词、反应镜头</li>
          <li>产品细节、美食细节</li>
        </ul>

        <h3>6. 特写 / 大特写（Close-Up / Extreme Close-Up）</h3>
        <p><strong>意思</strong>：眼睛、手、嘴、物体细节等被极度放大。</p>
        <p><strong>适用情况</strong>：</p>
        <ul>
          <li>突出重要细节、线索、象征意味</li>
          <li>制造紧张感、压迫感</li>
          <li>产品广告、悬疑片、情绪峰值</li>
        </ul>

        <h3>7. 双人镜头（Two Shot）</h3>
        <p><strong>意思</strong>：两个人同时入画。</p>
        <p><strong>适用情况</strong>：</p>
        <ul>
          <li>表现人物关系</li>
          <li>对话时减少切镜</li>
          <li>情侣、搭档、对立双方同框</li>
        </ul>

        <h3>8. 过肩镜头（Over-the-Shoulder Shot / OTS）</h3>
        <p><strong>意思</strong>：从一人肩后拍另一人。</p>
        <p><strong>适用情况</strong>：</p>
        <ul>
          <li>对话场景最常见</li>
          <li>建立视线关系和空间方位</li>
          <li>提升代入感，让观众"站在某一方视角"</li>
        </ul>

        <h3>9. 主观镜头（POV Shot / Point of View）</h3>
        <p><strong>意思</strong>：模拟角色本人看到的画面。</p>
        <p><strong>适用情况</strong>：</p>
        <ul>
          <li>增强沉浸感</li>
          <li>游戏感、第一人称体验</li>
          <li>恐怖、动作、体验类短视频</li>
        </ul>

        <h3>10. 客观镜头</h3>
        <p><strong>意思</strong>：摄影机像旁观者，不代替角色视角。</p>
        <p><strong>适用情况</strong>：</p>
        <ul>
          <li>大多数叙事场景</li>
          <li>保持冷静、纪录、观察感</li>
          <li>纪录片、剧情常规叙事</li>
        </ul>

        <hr />

        <h2>二、拍摄角度：摄影机怎么看主体</h2>

        <h3>1. 平角 / 平视（Eye Level Angle）</h3>
        <p><strong>意思</strong>：镜头与人物视线大致平齐。</p>
        <p><strong>适用情况</strong>：</p>
        <ul>
          <li>最自然、最中性</li>
          <li>采访、剧情对话、人物介绍</li>
          <li>不刻意强调权力关系时首选</li>
        </ul>

        <h3>2. 俯拍（High Angle）</h3>
        <p><strong>意思</strong>：摄影机高于主体往下拍。</p>
        <p><strong>适用情况</strong>：</p>
        <ul>
          <li>表现弱小、被动、压迫</li>
          <li>展示桌面、食物、产品平铺</li>
          <li>群体调度、空间布局</li>
        </ul>

        <h3>3. 仰拍（Low Angle）</h3>
        <p><strong>意思</strong>：摄影机低于主体往上拍。</p>
        <p><strong>适用情况</strong>：</p>
        <ul>
          <li>表现强势、威严、英雄感</li>
          <li>建筑显得高大</li>
          <li>人物出场更有气势</li>
        </ul>

        <h3>4. 顶拍 / 上帝视角（Top Shot / Bird's-Eye View / Overhead Shot）</h3>
        <p><strong>意思</strong>：几乎垂直向下拍。</p>
        <p><strong>适用情况</strong>：</p>
        <ul>
          <li>展示几何构图、秩序感</li>
          <li>美食制作、开箱、手作教程</li>
          <li>群戏调度、空间关系一目了然</li>
        </ul>

        <h3>5. 地面低机位（Worm's-Eye View）</h3>
        <p><strong>意思</strong>：非常贴近地面向上拍。</p>
        <p><strong>适用情况</strong>：</p>
        <ul>
          <li>极强的压迫感、史诗感</li>
          <li>突出建筑、人物气场</li>
          <li>跑动、车轮、脚步等动势镜头</li>
        </ul>

        <h3>6. 斜角 / 荷兰角（Dutch Angle / Canted Angle）</h3>
        <p><strong>意思</strong>：画面地平线倾斜。</p>
        <p><strong>适用情况</strong>：</p>
        <ul>
          <li>表现失衡、不安、疯狂、危险</li>
          <li>悬疑、惊悚、心理异常</li>
          <li>音乐视频、实验风格</li>
        </ul>

        <h3>7. 正面角度</h3>
        <p><strong>意思</strong>：从主体正前方拍。</p>
        <p><strong>适用情况</strong>：</p>
        <ul>
          <li>正式、直接、平等交流</li>
          <li>采访、口播、证件式表达</li>
          <li>强调人物"面对观众"</li>
        </ul>

        <h3>8. 侧面角度（Profile / Side Angle）</h3>
        <p><strong>意思</strong>：从人物侧面拍。</p>
        <p><strong>适用情况</strong>：</p>
        <ul>
          <li>强调轮廓线条</li>
          <li>展现人物观看方向</li>
          <li>情绪克制、关系疏离感</li>
        </ul>

        <h3>9. 背面角度（Back Shot / Rear Angle）</h3>
        <p><strong>意思</strong>：从人物背后拍。</p>
        <p><strong>适用情况</strong>：</p>
        <ul>
          <li>营造神秘感、孤独感、出发感</li>
          <li>让观众代入人物视线方向</li>
          <li>风景人物、旅行片常用</li>
        </ul>

        <h3>10. 三分之四角度（Three-Quarter Angle）</h3>
        <p><strong>意思</strong>：介于正面和侧面之间。</p>
        <p><strong>适用情况</strong>：</p>
        <ul>
          <li>人像最好用的角度之一</li>
          <li>脸更立体、五官更自然</li>
          <li>广告、人像、采访都很常用</li>
        </ul>

        <hr />

        <h2>三、运动机位相关术语</h2>

        <h3>1. 推镜头（Dolly In / Push In）</h3>
        <p><strong>适用情况</strong>：</p>
        <ul>
          <li>强调情绪递进</li>
          <li>引导观众注意某个信息</li>
          <li>制造压迫或进入感</li>
        </ul>

        <h3>2. 拉镜头（Dolly Out / Pull Out）</h3>
        <p><strong>适用情况</strong>：</p>
        <ul>
          <li>拉开关系，显出人物孤立</li>
          <li>从局部回到整体</li>
          <li>结尾、情绪抽离</li>
        </ul>

        <h3>3. 摇镜头（Pan / Tilt）</h3>
        <ul>
          <li><strong>Pan</strong>：水平摇</li>
          <li><strong>Tilt</strong>：上下摇</li>
        </ul>
        <p><strong>适用情况</strong>：</p>
        <ul>
          <li>跟随人物移动</li>
          <li>展示空间</li>
          <li>从局部揭示到整体</li>
        </ul>

        <h3>4. 移镜头（Tracking Shot / Trucking Shot）</h3>
        <p><strong>适用情况</strong>：</p>
        <ul>
          <li>跟拍人物行走</li>
          <li>增强临场感和节奏</li>
          <li>广告、剧情、纪录都常用</li>
        </ul>

        <h3>5. 升降镜头（Crane Shot / Jib Shot）</h3>
        <p><strong>适用情况</strong>：</p>
        <ul>
          <li>大场面调度</li>
          <li>开场、收尾、情绪提升</li>
          <li>从人物过渡到环境，或反过来</li>
        </ul>

        <h3>6. 手持镜头（Handheld Shot）</h3>
        <p><strong>适用情况</strong>：</p>
        <ul>
          <li>真实、纪实、紧张、混乱</li>
          <li>战斗、追逐、纪录片风格</li>
          <li>不适合太正式、太稳定的产品展示</li>
        </ul>

        <h3>7. 稳定器跟拍（Gimbal Shot / Steadicam Shot）</h3>
        <p><strong>适用情况</strong>：</p>
        <ul>
          <li>流畅移动</li>
          <li>空间穿梭感</li>
          <li>商业短片、活动记录、人物跟随</li>
        </ul>

        <hr />

        <h2>四、按场景选用：最实用的搭配建议</h2>

        <h3>1. 人物采访 / 口播</h3>
        <p><strong>适合</strong>：平视 + 中景/中近景 + 三分之四角度，偶尔加近景特写</p>
        <p><strong>效果</strong>：自然、专业、可信</p>

        <h3>2. 剧情对话</h3>
        <p><strong>适合</strong>：中景 + 过肩镜头 + 双人镜头，情绪高潮时切近景特写</p>
        <p><strong>效果</strong>：关系清楚，情绪推进自然</p>

        <h3>3. 人像拍摄</h3>
        <p><strong>适合</strong>：三分之四角度 + 平视或轻微仰拍 + 中近景/近景</p>
        <p><strong>效果</strong>：脸型更立体，人更有精神</p>

        <h3>4. 产品 / 美食</h3>
        <p><strong>适合</strong>：俯拍/顶拍 + 特写/大特写 + 平稳推镜</p>
        <p><strong>效果</strong>：细节清晰，构图规整，适合平台传播</p>

        <h3>5. 英雄人物 / 气场镜头</h3>
        <p><strong>适合</strong>：仰拍 + 低机位 + 全景+推近</p>
        <p><strong>效果</strong>：强势、史诗、权威</p>

        <h3>6. 悬疑 / 恐怖 / 不安情绪</h3>
        <p><strong>适合</strong>：斜角 + 特写 + 手持 + 非常规俯拍或仰拍</p>
        <p><strong>效果</strong>：失衡、压迫、紧张</p>

        <h3>7. 旅行 / 风景 / 氛围短片</h3>
        <p><strong>适合</strong>：远景/大远景 + 背面角度 + 移动跟拍 + 升降镜头</p>
        <p><strong>效果</strong>：代入感强，有"在路上"的感觉</p>

        <hr />

        <h2>五、最容易混淆的点</h2>

        <h3>机位 ≠ 角度</h3>
        <p>比如：</p>
        <ul>
          <li>摄影机离人物远近，属于<strong>景别/机位</strong></li>
          <li>摄影机从上往下拍，属于<strong>角度</strong></li>
        </ul>
        <p>一个镜头往往是两者结合：</p>
        <ul>
          <li>平视中景</li>
          <li>低机位仰拍全景</li>
          <li>顶拍特写</li>
          <li>过肩中近景</li>
        </ul>

        <hr />

        <h2>六、最常用的专业表达模板</h2>

        <p>实际沟通时，常这样说会比较专业：</p>
        <ul>
          <li>"这个镜头用平视中景。"</li>
          <li>"这里切一个人物近景特写。"</li>
          <li>"这场对话用过肩镜头拍。"</li>
          <li>"主角出场时用低机位仰拍。"</li>
          <li>"产品展示改成顶拍加特写。"</li>
          <li>"这段追逐用手持跟拍。"</li>
        </ul>
        <p>这个说法会比只说"拍近一点""从下面拍"更专业。</p>

        <hr />

        <h2>七、速记版</h2>

        <h3>机位常用词</h3>
        <p>远景、全景、中景、中近景、近景、特写、大特写、双人镜头、过肩镜头、主观镜头</p>

        <h3>角度常用词</h3>
        <p>平视、俯拍、仰拍、顶拍、低机位、斜角、正面、侧面、背面、三分之四角度</p>

        <h3>运动常用词</h3>
        <p>推、拉、摇、移、跟、升降、手持、稳定器</p>
      </div>
    </ContentLayout>
  );
}
