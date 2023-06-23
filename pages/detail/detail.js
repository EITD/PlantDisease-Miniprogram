const app = getApp()

Page({
  data: {
    buttons: [{name: "简介"}, {name: "形成原因"}, {name: "防治方法"}],
    items: [{title: "樱桃白粉病", image: "../../images/Cherry_(including_sour)___Powdery_mildew.JPG", overview: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;耐旱性较强的真菌病害，是桃树主要病害之一，多发生在高温干旱地区，以樱桃苗叶片为主。病害主要危害叶片，影响光合作用，削弱树势。苗期发病比成树严", cause: "【病菌越冬】\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;白粉病主要是白粉菌危害造成的，病菌会随着病残体在土壤中越冬，成为来年的侵染源；\n【温度影响】\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在温度较高的环境中，会导致感染白粉病；\n【光照影响】\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在弱光环境中，白粉菌的繁殖速度较快，连续阴雨天气为白粉病真菌创造了有利的生长环境；\n【施肥不当】\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果施加的氮肥过量，也容易滋生白粉病。", cure: "【农业防治】\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;加强田间管理：合理密植、控制浇水、疏密枝条、避免偏施氮肥，使冠光透光；在落叶至萌芽前彻底清除，集中焚烧。早发现早摘果深埋，减少菌源。\n【药剂防治】\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;农药杀菌剂醚菌酯、乙嘧酚、氟硅唑咪鲜胺防治桃树白粉病。", detail: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;耐旱性较强的真菌病害，是桃树主要病害之一，多发生在高温干旱地区，以樱桃苗叶片为主。病害主要危害叶片，影响光合作用，削弱树势。苗期发病比成树严"}, {title: "玉米灰斑病", image: "../../images/Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spo.jpg", overview: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;玉米灰斑病又称尾孢叶斑病、玉米霉斑病，除侵染玉米外，还可侵染高梁、香茅、须芒草等多种禾本科植物。主要为害叶片。", cause: "【品种和生育期】\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;玉米品种之间存在抗性差异，感病品种易发病；\n【环境条件】\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在北方地区，一般7～8月多雨的年份易发病。高温多雨，相对湿度高的天数多的季节发病严重；\n【栽培管理】\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;免耕或少耕的田块由于病残体积累发病严重，播种时间偏迟，栽培密度过大，不施底肥和磷钾肥，偏施氮肥，后期脱肥、管理粗放。", cure: "【农业防治】\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;选用抗病或耐病的品种；收获后及时清除病残体；进行大面积轮作；加强田间管理，雨后及时排水，防止湿气滞留。\n【药剂防治】\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;勘发病初期喷洒75%百菌清可湿性粉剂500倍液或50%多菌灵可湿性粉剂600倍液、40%克瘟散乳油800～900倍液、50%苯菌灵可湿性粉剂1500倍液、25%苯菌灵乳油800倍液、20%三唑酮乳油1000倍液；在北方地区化学防治最有效的防治时期是在玉米扬花期左右。", detail: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;玉米灰斑病又称尾孢叶斑病、玉米霉斑病，除侵染玉米外，还可侵染高梁、香茅、须芒草等多种禾本科植物。主要为害叶片。"}, {title: "葡萄叶枯病", image: "../../images/Grape___Leaf_blight_(Isariopsis_Leaf_Spot).JPG", overview: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;葡萄叶片青枯病多为突然间大面积发生。叶片边缘初呈水渍状暗绿色青枯，1天后病部呈黄褐色，并由外向内又出现一圈暗绿色青枯，即使是在土壤含水量没有达到凋萎系数的情况下，如不遇雨又不浇水将迅速蔓延，严重时整株叶片青枯。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;该病外观颜色变化与白腐病有点相似。区分青枯病与白腐病的方法是，白腐病最初发病是在个别叶片的叶尖叶缘的某一点侵染，形成大型近圆形病斑并有不明显的同心轮纹。青枯病是从整个叶片的边缘向叶心发展，而且全株发病，受光强的部位发病重。", cause: "【气候因素】\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;长期阴雨边绵后又逢炎热干旱的天气里发病重。", cure: "【农业防治】\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;雨季过后要密切注视葡萄新梢的生长状态，当新梢先端硬弯，为不缺水，如嫩梢直立而柔软，大叶片边缘下垂，则为缺水表现，应立即浇水。为了不产生裂果现象，一次浇水不要过大，或者进行叶面喷水；雨季过后，要及时松土，防止土壤板结，增强土壤的保水性能；每年要增施有机肥，改善土壤的理化性质。\n【药剂防治】\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每亩可以用大约150克的77％氢氧化铜、40克的42％三氯异氰尿酸、200克的25％琥胶肥酸铜、55克的50％氯溴异氰尿酸、150克的25％络氨铜、120克的20％叶枯唑、150克的噻森铜、60克的30％乙蒜素、80克的20％噻菌铜等喷施，也可以用700倍的3％中生菌素进行灌根，注意交替用药。", detail: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;葡萄叶片青枯病多为突然间大面积发生。叶片边缘初呈水渍状暗绿色青枯，1天后病部呈黄褐色，并由外向内又出现一圈暗绿色青枯，即使是在土壤含水量没有达到凋萎系数的情况下，如不遇雨又不浇水将迅速蔓延，严重时整株叶片青枯。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;该病外观颜色变化与白腐病有点相似。区分青枯病与白腐病的方法是，白腐病最初发病是在个别叶片的叶尖叶缘的某一点侵染，形成大型近圆形病斑并有不明显的同心轮纹。青枯病是从整个叶片的边缘向叶心发展，而且全株发病，受光强的部位发病重。"}, {title: "桃子细菌性斑点", image: "../../images/Peach___Bacterial_spot.JPG", overview: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;又名桃细菌性穿孔病，英文名Peach bacterial shot hole，桃细菌性穿孔病在我国各桃产区均有发生，是桃树的主要病害。为害性大，在多雨年份或多雨地区，常造成叶片穿孔，引起大量早期落叶和枝梢枯死，影响果实正常生长或花芽分化发育不良，引起落花落果和品质变劣。", cause: "【品种因素】\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;晚熟品种发病重；\n【气候因素】\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;温度适宜，雨水频繁或多雾、重雾季节，发病重；\n【栽培因素】\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;果园郁闭、排水不良、土壤瘠薄板结、缺肥或偏施氮肥都会致使发病较重。", cure: "【农业防治】\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;开春后要注意开沟排水，达到雨停水干，降低空气湿度；增施有机肥和磷钾肥，避免偏施氮肥。适当增加内膛疏枝量；改善通风透光条件，促使树体生长健壮，提高抗病能力；在10～11月份桃体眠期，结合冬季清园修剪，彻底剪除枯枝、病梢，及时清扫落叶、落果等，集中烧毁，消灭越冬菌源。\n【药剂防治】\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;发芽前喷波美50度石硫合剂，或1∶1∶100倍式波尔多液。发芽后喷72%农用链霉素可溶性粉剂3 000倍液。幼果期喷65%代森锌可湿性粉剂600倍液，或硫酸链霉素4 000倍液，或硫酸锌石灰液。6月末至7月初喷第1遍，半个月至20天喷1次，喷2～3次。", detail: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;又名桃细菌性穿孔病，英文名Peach bacterial shot hole，桃细菌性穿孔病在我国各桃产区均有发生，是桃树的主要病害。为害性大，在多雨年份或多雨地区，常造成叶片穿孔，引起大量早期落叶和枝梢枯死，影响果实正常生长或花芽分化发育不良，引起落花落果和品质变劣。"}, {title: "胡椒细菌性斑点", image: "../../images/Pepper,_bell___Bacterial_spot.JPG", overview: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;胡椒细菌性叶斑病是一种植物病害，此病在各龄胡椒中均发生，但以大、中龄胡椒受害最严重，主要危害叶片、枝蔓、花序和果穗。病斑呈多角形，水渍状，后呈紫褐色至黑褐色。病斑多时可愈合成灰褐色大斑，边缘有黄色晕圈，病健交界处有一紫褐色分界线。", cause: "【气候因素】\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;高湿时叶背病斑上出现细菌脓，温凉高湿或暴风雨有利发病。", cure: "【农业防治】\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;种植胡椒前，应先搞好胡椒园的规划和基本建设；选种无病壮苗，严禁从病区引进种苗；加强椒园抚育管理。\n【药剂防治】\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;喷1%波尔多液、77%可杀得、72%硫酸链霉素200倍液，喷药前将病叶及其四周叶片摘除。", detail: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;胡椒细菌性叶斑病是一种植物病害，此病在各龄胡椒中均发生，但以大、中龄胡椒受害最严重，主要危害叶片、枝蔓、花序和果穗。病斑呈多角形，水渍状，后呈紫褐色至黑褐色。病斑多时可愈合成灰褐色大斑，边缘有黄色晕圈，病健交界处有一紫褐色分界线。"}, {title: "南瓜白粉病", image: "../../images/Squash___Powdery_mildew.JPG", overview: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;南瓜白粉病是南瓜发生最普遍而严重的一个病害，主要危害叶片，被害叶片表面多被白粉状物覆盖，致光合作用明显受阻，严重的叶片枯黄乃至焦枯，影响南瓜结实。", cause: "【种植密度】\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;定植的密度过大，容易导致地里过于郁闭，通风透光性变差；\n【低温冻害】\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;早春时节，南瓜正处于幼苗期，而长时间的低温冻害，会导致幼苗受到冷害影响，长势变差，不利于壮苗形成。当遇到病菌侵入时，自身抗病能力弱，很容易表现出受害症状；\n【不合理的施肥】\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果过度偏施氮肥，而忽略了其他微肥施用，只会导致植株营养供给不均衡，造成植株抵抗力降低；\n【温度高湿度大】\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;温度在25-32度、相对湿度在85%以上时，病害发生严重。", cure: "【农业防治】\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;适时适期早播、合理灌溉施肥；及时整蔓，调整植株南瓜伸蔓期及时整蔓；杂交制种授粉结束后，植株不摘心或轻摘心；清除残株在田间如发现植株叶片已经焦枯，应尽早将病株拔除；采收后，应对田园进行清理，将病株带出田外深埋或烧毁，减少病源。\n【药剂防治】\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在南瓜白粉病发病前，推荐用27.12%铜高尚 SC 500-800倍液预防，间隔7-10天喷1次，连续用药2-3次；在发病初期，可以用12.5%腈菌唑2500-3000倍液、5%已唑醇悬浮剂1000倍液、80%硫磺500-800倍液，间隔7-10天喷1次，连续用药2-3次即可。", detail: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;南瓜白粉病是南瓜发生最普遍而严重的一个病害，主要危害叶片，被害叶片表面多被白粉状物覆盖，致光合作用明显受阻，严重的叶片枯黄乃至焦枯，影响南瓜结实。"}, {title: "草莓叶焦", image: "../../images/Strawberry___Leaf_scorc.JPG", overview: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;草莓焦叶病又称干叶病，主要危害幼嫩的叶片，也可危害花器，会出现僵果，成熟果实缺钙，果实空心。", cause: "【光照不足】\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;冬季光照弱，影响叶片的蒸腾拉动；\n【施肥不合理】\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;过量施用磷肥和钾肥，易造成营养不均衡。", cure: "【农业防治】\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;定期补钙：浇水时每亩加入腐殖酸钙水溶液 2～3公斤，冬季每隔15～20天浇一次，春节后每隔10～15天浇一次,同时叶面喷糖醇钙500倍液，重点喷施草莓的生长点、嫩叶和幼果，间隔10～15一次;\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;加强通风透光：草莓对钙元素的吸收，主要通过蒸腾作用产生的拉力。花芽分化期和草莓现蕾期，要加强通风透光，增强叶片的蒸腾作用，提高植株吸收钙的能力;及时摘除老叶、病残叶、病梗、病果，集中带到室外深埋或烧掉，消灭菌源。\n【药剂防治】\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;发病初期喷施曼哈顿腈菌唑杀菌剂进行防治，每隔5～7天喷药1次，连续3～4次。重点喷洒病株基部及近地表处。", detail: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;草莓焦叶病又称干叶病，主要危害幼嫩的叶片，也可危害花器，会出现僵果，成熟果实缺钙，果实空心。"}, {title: "马铃薯早枯", image: "../../images/Tomato___Early_blight.JPG", overview: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;马铃薯枯萎病在灾害分类上属于对植物系统的侵害。当马铃薯受到病害侵袭时, 在初期, 基本可以看到叶片垂萎, 与正常叶片有较大区别。尤其在阳光照射强烈的时间段更加严重, 在光照弱的清晨和晚上又会恢复正常。由于在时间段上会有不同的外部表现, 因此, 在具体的马铃薯枯萎病的防治上增加了不小的难度。", cause: "【温度】\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;土壤温度高于28度的时候容易感染细菌；\n【气候】\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在降水较多的地带, 发病率就会高。", cure: "【农业防治】\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与禾本作物或者绿肥等进行4年轮作；选择健薯留种，施用腐熟有机肥, 加强水肥管理；在种植过程中, 可以采用高垄地膜覆盖栽培模式, 合理密植, 在种植密度上进行严格要求；在灌溉方面, 要进行合理灌溉, 避免大水浇灌, 伤害植株。\n【药剂防治】\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;发病重的地区或田块，每667m2用50％多菌灵2kg进行土壤；发病初期喷50％多菌灵可湿性粉剂600一700倍液或50％苯菌灵可湿性粉剂1000倍液，此外可浇灌50％琥胶肥酸铜可湿性粉剂350倍液，每株灌对好的药液0.51或用12.5％增效多菌灵浓可溶剂200一300倍液，每株浇灌100ml。隔10天1次，灌1次或2次。", detail: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;马铃薯枯萎病在灾害分类上属于对植物系统的侵害。当马铃薯受到病害侵袭时, 在初期, 基本可以看到叶片垂萎, 与正常叶片有较大区别。尤其在阳光照射强烈的时间段更加严重, 在光照弱的清晨和晚上又会恢复正常。由于在时间段上会有不同的外部表现, 因此, 在具体的马铃薯枯萎病的防治上增加了不小的难度。"}, {title: "马铃薯黄卷叶病毒", image: "../../images/Tomato___Tomato_Yellow_Leaf_Curl_Virus.JPG", overview: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;马铃薯卷叶病毒是最重要的马铃薯病毒性病害，在所有种植马铃薯的国家发生非常普遍。通过蚜虫传播，也通过感染病毒的块茎传播。在中原二季作地区普遍发生，易感品种损失可达90%以上，一般减产40%-70%。", cause: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;田间管理条件差，蚜虫发生量大发病重；25℃以上高温会降低寄主对病毒的抵抗力，也有利于传毒媒介蚜虫的繁殖、迁飞或传病；品种抗病性及栽培措施都会影响本病的发生程度。", cure: "【农业防治】\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;淘汰病株，马铃薯卷叶病毒病，建议在种薯繁殖时淘汰病株，筛选健康植株用来定植。实行轮作，不宜重茬；种薯处理，在保证产量的前提下，种薯应尽可能提早收获，对种薯进行升温处理，将块茎放置在37℃条件下25天，可钝化卷叶病毒，种植后不出现病症；合理密植，保障田间作物有通风和透光度。加强田间管理，及时清除发病病叶、并一同烧毁处理。\n【药剂防治】\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;蚜虫防治喷洒内吸性杀虫剂防治蚜虫，用乐果、灭蚜威等农药稀释500-1000倍喷施。种薯生产在蚜虫发生高峰期之前，每隔10天喷药一次，直至收获；发病后，每亩可采用2%宁南霉素水剂20mL或5%氨基寡糖素水剂10mL等进行喷洒。对于发病严重的区域，可在5～7天后再次喷洒，注意应轮换使用药剂，以免产生抗药性。", detail: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;马铃薯卷叶病毒是最重要的马铃薯病毒性病害，在所有种植马铃薯的国家发生非常普遍。通过蚜虫传播，也通过感染病毒的块茎传播。在中原二季作地区普遍发生，易感品种损失可达90%以上，一般减产40%-70%。"}],
    item: {}
  },

  onLoad(options) {
    this.data.buttons[0].checked = true;
    this.data.item = this.data.items.find(item => item.title == options.title);
    if(options.image != "default") {
      this.data.item.image = options.image;
    }
    this.setData({
      item: this.data.item,
      buttons: this.data.buttons
    })
  },

  showDetail:function(e) {
    this.data.buttons.forEach(button => {
      if(button.name == e.currentTarget.dataset.name) {
        button.checked = true;
      } else {
        button.checked = false;
      }
    })
    switch(e.currentTarget.dataset.name) {
      case "形成原因":
        this.data.item.detail = this.data.item.cause;
        break;
      case "防治方法":
        this.data.item.detail = this.data.item.cure;
        break;
      default:
          this.data.item.detail = this.data.item.overview;
    }
    this.setData({
      item: this.data.item,
      buttons: this.data.buttons
    })
  }
})