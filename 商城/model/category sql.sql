--前端商品分类表
create table  Category(
    id int unsigned not null auto_increment primary key,
    name varchar(32) not null,
    address	varchar(255) not null 
);
-- 热门推荐
insert into Category (id,name,address) values(null,'手机 ', '//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png');
insert into Category (id,name,address) values(null,'耳机 ', '//img30.360buyimg.com/focus/s140x140_jfs/t1/21233/40/7634/13890/5c6d039bE8a65d667/aef9581abcc85725.png');
insert into Category (id,name,address) values(null,'华为 ', '//img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png');
insert into Category (id,name,address) values(null,'电饭煲',' //img20.360buyimg.com/focus/s140x140_jfs/t1/29265/29/7571/29171/5c6d0389E251fe5f2/987962eb75bfe813.png');
insert into Category (id,name,address) values(null,'电磁炉', '//img11.360buyimg.com/focus/s140x140_jfs/t1/26217/19/7605/22816/5c6d03a3E4f263c9d/d6fc27b51078358c.png');
insert into Category (id,name,address) values(null,'路由器', '//img14.360buyimg.com/focus/s140x140_jfs/t27400/283/1600620667/15106/a935e7bd/5be6f2e1Nfa8d9d6e.png');
insert into Category (id,name,address) values(null,'避孕套', '//img30.360buyimg.com/focus/s140x140_jfs/t1/18974/35/9836/31220/5c82223eE5dcc61b8/4e93c1fbb777bfca.png');
insert into Category (id,name,address) values(null,'口红', '//img30.360buyimg.com/focus/s140x140_jfs/t1/19730/14/9859/10199/5c8225eeE5e925911/054ccd7992f86199.png');
insert into Category (id,name,address) values(null,'吹风机',' //img12.360buyimg.com/focus/s140x140_jfs/t1/25144/37/2370/7617/5c1cae45Ea0ec5a85/f7ba433b5d1e072f.png');
insert into Category (id,name,address) values(null,'三只松树', '//img11.360buyimg.com/focus/s140x140_jfs/t1/30718/32/2643/9923/5c6d03ecEabd2d664/aaee556800519e1f.png');
insert into Category (id,name,address) values(null,'洗衣液', '//img13.360buyimg.com/focus/s140x140_jfs/t1/23312/39/9884/7280/5c822292E65f3929b/78ba741d321954b0.png');
insert into Category (id,name,address) values(null,'保温杯', '//img11.360buyimg.com/focus/s140x140_jfs/t1/11731/9/10730/9518/5c822298Eb50b3275/33f88663e1c0284e.png');
insert into Category (id,name,address) values(null,'微波炉',' //img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png');
insert into Category (id,name,address) values(null,'洗发水',  '//img13.360buyimg.com/focus/s140x140_jfs/t1/25168/27/9848/15397/5c822507E35d2ad16/384983a98758f8f8.png');
insert into Category (id,name,address) values(null,'卫生巾', '//img20.360buyimg.com/focus/s140x140_jfs/t1/19562/14/9878/32183/5c8225f6E7c332db7/c886e52dc05b9ae4.png');
insert into Category (id,name,address) values(null,'冰箱',' //img20.360buyimg.com/focus/s140x140_jfs/t21115/83/225125274/13856/5473fb3f/5b0567c1N59d53b27.png');
insert into Category (id,name,address) values(null,'洗衣机', '//img14.360buyimg.com/focus/s140x140_jfs/t21664/15/237213959/24996/a3c6c7d6/5b0567c7N9cc1c355.png');
insert into Category (id,name,address) values(null,'电视 ','//img12.360buyimg.com/focus/s140x140_jfs/t18106/218/2672347202/29951/3618e960/5b0567cdN275fbcdd.png');

-- 手机数码
insert into Category (id,name,address) values(null,'小米',' //img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png');
insert into Category (id,name,address) values(null,'华为',' //img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg');
insert into Category (id,name,address) values(null,'荣耀',' //img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg');
insert into Category (id,name,address) values(null,'iPhone',' //img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg');
insert into Category (id,name,address) values(null,'vivivo',' //img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png');
insert into Category (id,name,address) values(null,'oppo',' //img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png');
insert into Category (id,name,address) values(null,'魅族',' //img20.360buyimg.com/focus/s140x140_jfs/t12820/326/909017718/7138/68cde747/5a169243N40eca33c.jpg');
insert into Category (id,name,address) values(null,'三星',' //img13.360buyimg.com/focus/s140x140_jfs/t11509/131/2348573811/3425/4f20fe6/5a16925aN8a6dfd03.png');
insert into Category (id,name,address) values(null,'一加',' //img13.360buyimg.com/focus/s140x140_jfs/t11209/71/2351231464/4158/fc0c415c/5a16923fNfc14307e.jpg');
insert into Category (id,name,address) values(null,'360',' //img20.360buyimg.com/focus/s140x140_jfs/t13096/309/908035611/5138/5558f001/5a16924fNeac7677e.jpg');
insert into Category (id,name,address) values(null,'锤子手机',' //img20.360buyimg.com/focus/s140x140_jfs/t19387/332/664528115/8176/5eabe8cb/5a9fa5e0N6754e52a.jpg');
insert into Category (id,name,address) values(null,'努比亚',' //img12.360buyimg.com/focus/s140x140_jfs/t15085/289/2395028996/2546/1e7e1f7b/5a9fa5e7Nc5cc0f6b.jpg');
insert into Category (id,name,address) values(null,'老人机',' //img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg');
insert into Category (id,name,address) values(null,'手机',' //img10.360buyimg.com/focus/s140x140_jfs/t11503/241/2246064496/4783/cea2850e/5a169216N0701c7f1.jpg');
insert into Category (id,name,address) values(null,'全面屏手机',' //img30.360buyimg.com/focus/s140x140_jfs/t18955/187/1309277884/11517/fe100782/5ac48d27N3f5bb821.jpg');
insert into Category (id,name,address) values(null,'游戏手机',' //img11.360buyimg.com/focus/s140x140_jfs/t11470/45/2362968077/2689/fb36d9a0/5a169238Nc8f0882b.jpg');
insert into Category (id,name,address) values(null,'拍照手机',' //img20.360buyimg.com/focus/s140x140_jfs/t12022/66/917351804/2257/7ddc58e5/5a169232Ndf76f53c.jpg');
insert into Category (id,name,address) values(null,'对讲机',' //img30.360buyimg.com/focus/s140x140_jfs/t13255/192/958298391/1687/5c7e3c53/5a169204Nd4aa27bb.jpg');
insert into Category (id,name,address) values(null,'手机回收',' //img30.360buyimg.com/focus/s140x140_jfs/t13246/188/925975876/8794/686dbb9c/5a1691e0N62f626e3.jpg');
insert into Category (id,name,address) values(null,'女性手机',' //img12.360buyimg.com/focus/s140x140_jfs/t15790/6/2311892256/2742/5ed77924/5a9fa728Nbff29ad2.jpg');
insert into Category (id,name,address) values(null,'京东维修',' //img20.360buyimg.com/focus/s140x140_jfs/t11644/236/2358207967/6141/e2d71825/5a169205N84a49a6a.jpg');
insert into Category (id,name,address) values(null,'合约机',' //img20.360buyimg.com/focus/s140x140_jfs/t13309/121/902275259/3700/e9f22529/5a168e83Nb1a35aac.png');
insert into Category (id,name,address) values(null,'选号卡',' //img10.360buyimg.com/focus/s140x140_jfs/t11515/106/2342900928/7913/5a606e3f/5a168e7eNdd5d0121.png');
insert into Category (id,name,address) values(null,'办套餐',' //img20.360buyimg.com/focus/s140x140_jfs/t14146/201/916948302/5272/8ae80f8e/5a168e78N78b24a8e.jpg');
insert into Category (id,name,address) values(null,'京东网店',' //img30.360buyimg.com/focus/s140x140_jfs/t15865/151/2284016087/10155/c4aaceec/5a9faa1fN03a4c9e1.jpg');

-- 家用电器

insert into Category (id,name,address) values(null,'电水壶/热水瓶 ','//img30.360buyimg.com/focus/s140x140_jfs/t12559/262/969294499/3436/8c0ce9c9/5a17f1d2N8078d5e6.jpg');
insert into Category (id,name,address) values(null,'电压锅',' //img13.360buyimg.com/focus/s140x140_jfs/t13069/193/944900508/2525/d7c9efc/5a17f21dN905aaf4c.jpg');
insert into Category (id,name,address) values(null,'电饭煲 ','//img11.360buyimg.com/focus/s140x140_jfs/t14185/134/950962305/3800/eb1bafb8/5a17f224Nea1d3f59.jpg');
insert into Category (id,name,address) values(null,'电磁炉',' //img13.360buyimg.com/focus/s140x140_jfs/t11209/197/2422417970/2811/d167e855/5a17f1edN56abbe6e.jpg');
insert into Category (id,name,address) values(null,'微波炉',' //img11.360buyimg.com/focus/s140x140_jfs/t13267/86/981023661/1871/6fae5f11/5a17f203N50016f64.jpg');
insert into Category (id,name,address) values(null,'电饼铛','  //img11.360buyimg.com/focus/s140x140_jfs/t11503/25/2307123595/2987/a79ac767/5a17f1e3Nf7957b34.jpg');
insert into Category (id,name,address) values(null,'豆浆机',' //img11.360buyimg.com/focus/s140x140_jfs/t14065/132/988058896/1688/99cd0a3d/5a17f229Nc4c681fb.jpg');
insert into Category (id,name,address) values(null,'多用涂锅',' //img11.360buyimg.com/focus/s140x140_jfs/t13192/9/990491166/2453/36169f1b/5a17f1ccN019c7fda.jpg');
insert into Category (id,name,address) values(null,'料理机',' //img13.360buyimg.com/focus/s140x140_jfs/t11284/298/2465125571/2619/ffe2cde5/5a17f237Nb9978251.jpg');
insert into Category (id,name,address) values(null,'榨汁机/原汁机',' //img13.360buyimg.com/focus/s140x140_jfs/t13264/165/968827574/9255/7d10ad8c/5a17f224N9756f6e5.jpg');
insert into Category (id,name,address) values(null,'电烤箱',' //img11.360buyimg.com/focus/s140x140_jfs/t12094/76/967581282/2377/4611685d/5a17f1f1N9c125c81.jpg');
insert into Category (id,name,address) values(null,'养生壶/煎药壶',' //img13.360buyimg.com/focus/s140x140_jfs/t11947/325/2422338843/8842/231908b2/5a17c966Nd140f4e3.jpg');
insert into Category (id,name,address) values(null,'电炖锅 ','//img20.360buyimg.com/focus/s140x140_jfs/t13009/346/964112809/2968/91b03a47/5a17f1aeNf7647558.jpg');
insert into Category (id,name,address) values(null,'电烧烤炉 ','//img10.360buyimg.com/focus/s140x140_jfs/t11140/308/2445458495/9043/1753bd3c/5a17f1a9N8a775fab.jpg');
insert into Category (id,name,address) values(null,'面包机',' //img12.360buyimg.com/focus/s140x140_jfs/t12367/112/996967887/2205/e8c82674/5a17f20aNde6af185.jpg');
insert into Category (id,name,address) values(null,'咖啡机',' //img12.360buyimg.com/focus/s140x140_jfs/t14074/98/970407567/2153/72273815/5a17f208N6ea88eba.jpg');
insert into Category (id,name,address) values(null,'煮蛋机',' //img11.360buyimg.com/focus/s140x140_jfs/t11086/93/2414691741/2722/d9d248ff/5a17f1e3Nbb40dec0.jpg');
insert into Category (id,name,address) values(null,'电热饭盒 ','//img13.360buyimg.com/focus/s140x140_jfs/t11356/153/2385394139/7948/dc2a0170/5a17c968Nb5ea6a23.jpg');
insert into Category (id,name,address) values(null,'面条机',' //img10.360buyimg.com/focus/s140x140_jfs/t11251/274/2452446468/6155/a25e078d/5a17c946N052e26a3.jpg');
insert into Category (id,name,address) values(null,'酸奶机 ','//img20.360buyimg.com/focus/s140x140_jfs/t12274/166/997017520/2640/6e2fa67/5a17f1deN2f022a90.jpg');
insert into Category (id,name,address) values(null,'空气炸锅 ','//img30.360buyimg.com/focus/s140x140_jfs/t12307/139/1000478874/7910/ea6813ca/5a17f1fbNc9df1b71.jpg');
insert into Category (id,name,address) values(null,'蔬果解毒机',' //img14.360buyimg.com/focus/s140x140_jfs/t12124/341/992252635/3589/bd16ee5/5a17f1b7N26b23a3a.jpg');
insert into Category (id,name,address) values(null,'电吹风',' //img14.360buyimg.com/focus/s140x140_jfs/t13981/225/965020395/7369/1740dbbb/5a17c20fN16e27ed9.png');
insert into Category (id,name,address) values(null,'剃须刀',' //img14.360buyimg.com/focus/s140x140_jfs/t11539/356/2296587411/5881/9d96908e/5a17c221Nf85c1934.jpg');
insert into Category (id,name,address) values(null,'理发器',' //img10.360buyimg.com/focus/s140x140_jfs/t11125/324/2448652642/4268/cd0fff76/5a17c201N6f968e89.jpg');
insert into Category (id,name,address) values(null,'足浴盆',' //img10.360buyimg.com/focus/s140x140_jfs/t11209/303/2393582425/2406/d7c577aa/5a17c1eeNb9958e28.jpg');
insert into Category (id,name,address) values(null,'剃/脱毛器',' //img30.360buyimg.com/focus/s140x140_jfs/t13306/243/970438254/1447/a2be4ca5/5a17c21bN9fa5f473.jpg');
insert into Category (id,name,address) values(null,'按摩器',' //img30.360buyimg.com/focus/s140x140_jfs/t13306/163/993416845/6361/f53b0e98/5a17c1f5Nb9390d12.jpg');
insert into Category (id,name,address) values(null,'卷/直发器 ','//img14.360buyimg.com/focus/s140x140_jfs/t12421/326/945805627/2801/4c9985ca/5a17c1ddNba83885a.jpg');
insert into Category (id,name,address) values(null,'按摩椅 ','//img13.360buyimg.com/focus/s140x140_jfs/t13297/176/988569238/3559/8b7e1e75/5a17c1fcN516045fe.jpg');
insert into Category (id,name,address) values(null,'口腔护理 ','//img12.360buyimg.com/focus/s140x140_jfs/t11779/36/2420240260/4056/d6ce030b/5a17c214N2eab4352.jpg');
insert into Category (id,name,address) values(null,'电子秤',' //img11.360buyimg.com/focus/s140x140_jfs/t13615/96/1004728348/4470/f3e62def/5a17c1e8Nbfc87330.jpg');
insert into Category (id,name,address) values(null,'美容器',' //img11.360buyimg.com/focus/s140x140_jfs/t11065/145/2436762903/1153/41871627/5a17c209Nff3d08aa.jpg');
insert into Category (id,name,address) values(null,'其他健康电器 ','//img12.360buyimg.com/focus/s140x140_jfs/t13552/335/972852493/6032/1382e5dd/5a17c1e3N576565f7.jpg');

-- 电脑办公

insert into Category (id,name,address) values(null,'轻薄本 ','//img13.360buyimg.com/focus/s140x140_jfs/t11071/195/2462134264/9117/cd0688bf/5a17ba79N18b9f3d4.png');
insert into Category (id,name,address) values(null,'游戏本',' //img30.360buyimg.com/focus/s140x140_jfs/t11155/36/2330310765/10690/eb6754c3/5a17ba96N49561fea.png');
insert into Category (id,name,address) values(null,'机械键盘',' //img12.360buyimg.com/focus/s140x140_jfs/t12304/245/965858782/6481/37cb5a9b/5a17ba5aN0406a1b5.jpg');
insert into Category (id,name,address) values(null,'组装电脑 ','//img10.360buyimg.com/focus/s140x140_jfs/t14101/325/978287093/8836/e142aa53/5a17ba73N07b12f0c.jpg');
insert into Category (id,name,address) values(null,'移动硬盘',' //img12.360buyimg.com/focus/s140x140_jfs/t13228/333/989759736/4764/2a312c2e/5a17ba7fN0740c051.jpg');
insert into Category (id,name,address) values(null,'显卡','//img20.360buyimg.com/focus/s140x140_jfs/t12679/262/982342141/7023/d05a11e5/5a17ba57Nf179b4e4.jpg');
insert into Category (id,name,address) values(null,'游戏台式机','  //img10.360buyimg.com/focus/s140x140_jfs/t12865/295/960489437/5723/4f38f11/5a17ba8bN911b7264.jpg');
insert into Category (id,name,address) values(null,'家用打印机',' //img13.360buyimg.com/focus/s140x140_jfs/t12526/166/988611883/3419/3c7507ac/5a17ba5dN8f6ffa5e.jpg');
insert into Category (id,name,address) values(null,'吃鸡装备 ',' //img20.360buyimg.com/focus/s140x140_jfs/t16210/272/2297735843/7874/66447aee/5a9fa34bNff4ef403.jpg');
insert into Category (id,name,address) values(null,'曲屏显示器 ','//img30.360buyimg.com/focus/s140x140_jfs/t13798/322/988648789/3644/1adc5615/5a17ba6dNafc95373.jpg');
insert into Category (id,name,address) values(null,'投影机 ','//img20.360buyimg.com/focus/s140x140_jfs/t13492/261/938265048/5840/b5e4bdb6/5a17ba61N61a74bc3.jpg');
insert into Category (id,name,address) values(null,'日本文具',' //img14.360buyimg.com/focus/s140x140_jfs/t16102/63/2286960292/7028/d15c6bd6/5a9fa366N889aad0f.jpg');
insert into Category (id,name,address) values(null,'笔记本 ','//img11.360buyimg.com/focus/s140x140_jfs/t13852/288/980080912/2623/73d2a1a5/5a17b976N7ab8a3a6.jpg');
insert into Category (id,name,address) values(null,'平板电脑',' //img10.360buyimg.com/focus/s140x140_jfs/t13252/193/948884668/3832/2cd704d4/5a17b918N0785e503.jpg');
insert into Category (id,name,address) values(null,'一体机 ','//img12.360buyimg.com/focus/s140x140_jfs/t14020/291/987624955/9068/5b27e263/5a17b978N2a93f7a9.jpg');
insert into Category (id,name,address) values(null,'台式机',' //img30.360buyimg.com/focus/s140x140_jfs/t13747/317/982291236/6659/4945536d/5a17b996Nba3bed32.jpg');
insert into Category (id,name,address) values(null,'笔记本配件',' //img20.360buyimg.com/focus/s140x140_jfs/t12088/219/967281794/2015/c05e448c/5a17b933N825c264a.jpg');
insert into Category (id,name,address) values(null,'游戏台式机 ','//img20.360buyimg.com/focus/s140x140_jfs/t12901/167/947504038/6315/4c239386/5a17b948Nf6918c9e.jpg');
insert into Category (id,name,address) values(null,'商用台式机 ','//img10.360buyimg.com/focus/s140x140_jfs/t13138/231/1001350583/7486/6d001868/5a17b94eN820f6506.jpg');
insert into Category (id,name,address) values(null,'游戏本 ','//img30.360buyimg.com/focus/s140x140_jfs/t12418/24/1008907015/2867/86eb55a/5a17b971N14214c4f.jpg');
insert into Category (id,name,address) values(null,'平板电脑配件',' //img12.360buyimg.com/focus/s140x140_jfs/t13504/44/947654756/2419/ca768bc2/5a17b8dcNd0418625.jpg');
insert into Category (id,name,address) values(null,'轻薄本 ','//img20.360buyimg.com/focus/s140x140_jfs/t12499/273/957225674/6892/8281d4a7/5a17b962Nf77d9f6c.jpg');
insert into Category (id,name,address) values(null,'二合一平板',' //img10.360buyimg.com/focus/s140x140_jfs/t11944/224/2479637242/6222/ac9759/5a17b93dN89330bb3.jpg');
insert into Category (id,name,address) values(null,'服务器/工作站 ','//img10.360buyimg.com/focus/s140x140_jfs/t13840/141/950958975/1812/362471fe/5a17b921Nf71bb1a4.jpg');



