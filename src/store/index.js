import { createStore } from 'vuex'

export default createStore({
  state: {
    games: [
      {
        id: 1,
        title: 'RE1',
        url: 're1',
        files:
        [
          {
            "id": 1,
            "src": require('../assets/img/re1/files/botany-book/botany-book.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil/files#!botany-book",
            "location": [
              {
                "txt": "Location (Chris, Jill)",
                "map": require('../assets/img/re1/files/botany-book/map/botany-book-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil/maps/mansion/mansion-2f/small-library",
                "map_source": "Evil Resource",
              }
            ],
            "url": "botany-book",
            "title": "Botany Book",
            "og_content":[
              {
                "para": "As you may know, there are many plants that have medical effects. Since ancient times, humans have been healing wounds and diseases using various plants.",
                "dir": "left"
              },
              {
                 "para": "In this book, we're going to sample three herbs that grow around the Raccoon mountains and give their outlines as examples of those plants with medical properties.",
                "dir": "left"
              },
              {
                "para": "Each herb has different colors and different effects as medical plants: the green one recovers physical strength, the blue one neutralizes natural toxins, while the red herb does not have any effect by itself.",
                "dir": "left"
              },
              {
                "para": "The red herb is only effective when it is mixed with other herbs. For example, if you mix this herb with the herb that recovers physical strength, the recovery effect will be tripled.",
                "dir": "left"
              },
              {
                "para": "By adjusting the amount and experimenting with these three herbs, you can create various kinds of medicines but I'll leave the details in your hands, because that's the best way to acquire true knowledge.",
                "dir": "left"
              }
            ],
            "tr_content":[
              {
                "para": "همانطور که می‌دانید، گیاهان زیادی با خواص دارویی وجود دارند. و از قدیم‌الایام نیز، بشر زخم‌ها و مریضی‌هایش را با بکارگیری گیاهان مختلف، درمان می‌کرده.",
                "dir": "right"
              },
              {
                "para": "در این کتاب نیز، بنا بر این است تا به سراغ سه گیاهی، که در کوه‌های راکون به عمل می‌آیند، برویم تا چکیده‌ای از این نمونه گیاهان دارویی را ارائه دهیم.",
                "dir": "right"
              },
              {
                "para": "هر گیاه، خود به عنوانِ گیاهی دارویی، دارای رنگ و اثری متفاوت است: نوع سبزرنگ قدرت فیزیکی را بازیابی می‌نماید، و نوع آبی‌رنگ به خنثی‌سازیِ سموم طبیعی می‌پردازد، در حالی که نوع قرمزرنگ، به خودیِ خود گره‌گشایی نمی‌کند.",
                "dir": "right"
              },
              {
                "para": "گیاه قرمز تنها در صورتی تاثیرگذار است که با دیگرِ گیاهان، ترکیب شود. به عنوان مثال، اگر این گیاه را با گیاهِ افزایش‌دهنده‌ی قدرت فیزیکی ترکیب کنید، قدرت بازیابیِ سلامتی سه‌برابر می‌شود.",
                "dir": "right"
              },
              {
                "para": "با تنظیم‌کردن این مقادیر و آزمایش با این سه گیاه، داروهای متفاوتی پیش رویتان خواهد بود، اما من این مهم را به شما واگذار می‌کنم، چرا که این، بهترین روش برای کسب دانش است.",
                "dir": "right"
              },
            ]
          },
          {
            "id": 2,
            "src": require('../assets/img/re1/files/keeper-s-diary/keeper-s-diary.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil/files#!keepers-diary",
            "location": [
              {
                "txt": "Location (Chris, Jill)",
                "map": require('../assets/img/re1/files/keeper-s-diary/map/keeper-s-diary-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil/maps/mansion/mansion-1f/keepers-bedroom",
                "map_source": "Evil Resource"
              }
            ],
            "url": "keeper-s-diary",
            "title": "Keeper's Diary",
            "og_content":[
              {
                "para": "May 9th, 1998",
                "dir": "left"
              },
              {
                 "para": "At night, we played Poker with Scott the guard, Alias and Steve the researcher.",
                "dir": "left"
              },
              {
                "para": "Steve was really lucky, but I think he was cheating.",
                "dir": "left"
              },
              {
                "para": "What a scumbag.",
                "dir": "left"
              },
              {
                "para": "May 10th, 1998",
                "dir": "left"
              },
              {
                "para": "Today, a high ranking researcher asked me to take care of a new monster.",
                "dir": "left"
              },
              {
                "para": "It looks like a gorilla without any skin. They told me to feed them live food. When I threw in a pig, they were playing with it... tearing off the pig's legs and pulling out the guts before they actually ate it.",
                "dir": "left"
              },
              {
                "para": "May 11th, 1998",
                "dir": "left"
              },
              {
                "para": "Around 5 o'clock this morning, Scott came in and woke me up suddenly. He was wearing a protection suit that looks like a space suit. He told me to put one on as well.",
                "dir": "left"
              },
              {
                "para": "I heard there was an accident in the basement lab.",
                "dir": "left"
              },
              {
                "para": "It's no wonder, those researchers never rest, even at night.",
                "dir": "left"
              },
              {
                "para": "May 12th, 1998",
                "dir": "left"
              },
              {
                "para": "I've been wearing this annoying space suit since yesterday, my skin grows musty and feels very itchy.",
                "dir": "left"
              },
              {
                "para": "By way of revenge, I didn't feed those dogs today.",
                "dir": "left"
              },
              {
                "para": "Now I feel better.",
                "dir": "left"
              },
              {
                "para": "May 13th, 1998",
                "dir": "left"
              },
              {
                "para": "I went to the medical room because my back is all swollen and feels itchy.",
                "dir": "left"
              },
              {
                "para": "They put a big bandage on my back and the doctor told me I did not need to wear the space suit any more.",
                "dir": "left"
              },
              {
                "para": "I guess I can sleep well tonight.",
                "dir": "left"
              },
              {
                "para": "May 14th, 1998",
                "dir": "left"
              },
              {
                "para": "When I woke up this morning, I found another blister on my foot. It was annoying and I ended up dragging my foot as I went to the dogs' pen. They have been quiet since morning, which is very unusual. I found that some of them had escaped.",
                "dir": "left"
              },
              {
                "para": "I'll be in real trouble if the higher-ups find out.",
                "dir": "left"
              },
              {
                "para": "May 15th, 1998",
                "dir": "left"
              },
              {
                "para": "Even though I didn't feel well, I decided to go see Nancy. It's my first day off in a long time. But I was stopped by the guard on the way out.",
                "dir": "left"
              },
              {
                "para": "They say the company has ordered that no one leave the grounds.",
                "dir": "left"
              },
              {
                "para": "I can't even make a phone call. What kind of joke is this?!",
                "dir": "left"
              },
              {
                "para": "May 16th, 1998",
                "dir": "left"
              },
              {
                "para": "I heard a researcher who tried to escape from this mansion was shot last night.",
                "dir": "left"
              },
              {
                "para": "My entire body feels burning and itchy at night.",
                "dir": "left"
              },
              {
                "para": "When I was scratching the swelling on my arm, a lump of rotten flesh dropped off.",
                "dir": "left"
              },
              {
                "para": "What the hell is happening to me?",
                "dir": "left"
              },
              {
                "para": "May 19, 1998",
                "dir": "left"
              },
              {
                "para": "Fever gone but itchy.",
                "dir": "left"
              },
              {
                "para": "Hungry and eat doggie food.",
                "dir": "left"
              },
              {
                "para": "Itchy itchy Scott came.",
                "dir": "left"
              },
              {
                "para": "Ugly face so killed him.",
                "dir": "left"
              },
              {
                "para": "Tasty.",
                "dir": "left"
              },
              {
                "para": "4",
                "dir": "center"
              },
              {
                "para": "Itchy.",
                "dir": "center"
              },
              {
                "para": "Tasty.",
                "dir": "center"
              }
            ],
            "tr_content":[
              {
                "para": "۹ مه ۱۹۹۸",
                "dir": "right"
              },
              {
                "para": "شب بود که با نگهبان اسکات، الیاس، و محقق استیو، رفتیم پوکر.",
                "dir": "right"
              },
              {
                "para": "استیو که واقعا خوش‌شانس بود، هر چند که فکر کنم داشت تقلب می‌کرد.",
                "dir": "right"
              },
              {
                "para": "مردک حال‌به‌هم‌زن.",
                "dir": "right"
              },
              {
                "para": "۱۰ مه ۱۹۹۸",
                "dir": "right"
              },
              {
                "para": "امروز، یه محقق بالارتبه، ازم خواست تا مراقب یه هیولای جدید باشم.",
                "dir": "right"
              },
              {
                "para": "اون شبیه یه گوریل بود که هیچ پوستی به تن نداشت. بهم هم گفتن که غذای زنده بدم بخوره. و وقتی که یه خوک رو گذاشتم وسط، باهاش ور رفت... و قبل اینکه بخورتش، پاهاش رو با دریدن، کند، و دل و روده‌ش رو کشید بیرون.",
                "dir": "right"
              },
              {
                "para": "۱۱ مه ۱۹۹۸",
                "dir": "right"
              },
              {
                "para": "حول‌وحوش ساعتای 5 صبح بود که اسکات اومد تو و منو یهویی بیدار کرد. اون یه لباس محافظتی تنش کرده بود و بهم گفت که یکی مث همینا تنم کنم.",
                "dir": "right"
              },
              {
                "para": "شنیده بودم که یه اتفاقاتی توی آزمایشگاه زیرزمینی افتاده.",
                "dir": "right"
              },
              {
                "para": "چیز عجیبی هم نیست، اون محقق‌ها استراحت تو کارشون نبود، حتی شبا.",
                "dir": "right"
              },
              {
                "para": "۱۲ مه ۱۹۹۸",
                "dir": "right"
              },
              {
                "para": "از دیروزه که این لباس فضاییِ اذیت‌کننده رو تنم کردم، و پوستم تو فاز پوسیدگی و خارش بدی رفته.",
                "dir": "right"
              },
              {
                "para": "برای تلافی ولی، امروز غذایی به اون سگ‌ها ندادم.",
                "dir": "right"
              },
              {
                "para": "و حالا حس بهتری دارم.",
                "dir": "right"
              },
              {
                "para": "۱۳ مه ۱۹۹۸",
                "dir": "right"
              },
              {
                "para": "پام به داروخونه کشید، چرا که پشتم تماما متورم شده و حس خارش گرفته.",
                "dir": "right"
              },
              {
                "para": "باندپیچی مشتی‌ای هم کردن پشتم رو و دکتر هم گفتش که دیگه نیازی به پوشیدن اون لباس فضایی نداری.",
                "dir": "right"
              },
              {
                "para": "غلط نکنم بتونم امشبه رو راحت بخوابم.",
                "dir": "right"
              },
              {
                "para": "۱۴ مه ۱۹۹۸",
                "dir": "right"
              },
              {
                "para": "صبح که از خواب پا شدم، بازم آبله رو پام دیدم. خیلی رنج‌آور بود، و آخر کاری هم این دست و اون دست کردم، در عین حال که داشتم می‌رفتم سمت قفس سَگا. اونا از صبحه که ساکتِ ساکت‌ان، که خب این خیلی غیر عادی‌ـه، و فهمیدم که یه سری‌هاشون فرار کردن.",
                "dir": "right"
              },
              {
                "para": "اینجوری هم اگه مافوق‌ها بفهمن که رسما افتادم تو دردسر.",
                "dir": "right"
              },
              {
                "para": "۱۵ مه ۱۹۹۸",
                "dir": "right"
              },
              {
                "para": "اگر چه حس‌وحال خوشی نداشتم، ولی گفتم برم پیش نانسی. این اولین مرخصی من تو این همه مدت بود، ولی محافظی که توی راه خروج بود، جلوم رو گرفت.",
                "dir": "right"
              },
              {
                "para": "بهم گفته شد که این کمپانی دستور صادر کرده که هیچکی خارج نشه.",
                "dir": "right"
              },
              {
                "para": "حتی امکان به تماس تلفنی هم ندارم. این دیگه چه جور جوکی‌ـه؟!",
                "dir": "right"
              },
              {
                "para": "۱۶ مه ۱۹۹۸",
                "dir": "right"
              },
              {
                "para": "اینطور شنیدم که یه محقق، که در تلاش برای خروج از این عمارت بوده، شب گذشته تیر می‌خوره می‌ره.",
                "dir": "right"
              },
              {
                "para": "شب‌ها هم حس می‌کنم بدنم می‌سوزه و همه‌ش خارش داره.",
                "dir": "right"
              },
              {
                "para": "وقتی هم که ورمِ روی بازوم رو می‌خارونم، یه غده از گوشت فاسدشده می‌پره بیرون.",
                "dir": "right"
              },
              {
                "para": "واقعا چه بلایی داره سرم میاد؟",
                "dir": "right"
              },
              {
                "para": "۱۹ مه ۱۹۹۸",
                "dir": "right"
              },
              {
                "para": "تبی دیگه در کار نیست، ولی خارش چرا.",
                "dir": "right"
              },
              {
                "para": "گرسنمه، و دارم غذای سگ می‌خورم.",
                "dir": "right"
              },
              {
                "para": "اسکات با خارش اومد.",
                "dir": "right"
              },
              {
                "para": "زشت بود، منم کشتمش.",
                "dir": "right"
              },
              {
                "para": "خوشمزه‌ست.",
                "dir": "right"
              },
              {
                "para": "۴",
                "dir": "center"
              },
              {
                "para": "می‌خاره.",
                "dir": "center"
              },
              {
                "para": "خوش‌مزه‌ست.",
                "dir": "center"
              },
            ]
          },
          {
            "id": 3,
            "src": require('../assets/img/re1/files/researcher-s-will/researcher-s-will.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil/files#!researchers-will",
            "location": [
              {
                "txt": "Location (Chris, Jill)",
                "map": require('../assets/img/re1/files/researcher-s-will/map/researcher-s-will-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil/maps/mansion/mansion-2f/study",
                "map_source": "Evil Resource"
              }
            ],
            "url": "researcher-s-will",
            "title": "Researcher's Will",
            "og_content":[
              {
                "para": "My dear Alma,",
                "dir": "left"
              },
              {
                 "para": "The fact that you have received this letter is both a joy and sadness for me.",
                "dir": "left"
              },
              {
                "para": "I could not even talk to you because of that guy in the sunglasses. Alma, be calm and read this.",
                "dir": "left"
              },
              {
                "para": "I think I've told you that I moved to pharmaceutical company's lab. They headhunted me.",
                "dir": "left"
              },
              {
                "para": "Last month, there was an accident in the lab and the virus we were studying escaped.",
                "dir": "left"
              },
              {
                "para": "All my colleagues who were infected by the virus are dead. To be accurate, they've become living dead.",
                "dir": "left"
              },
              {
                "para": "They still wander around.",
                "dir": "left"
              },
              {
                "para": "Some of them are knocking on my room door desperately right now.",
                "dir": "left"
              },
              {
                "para": "But there's no sign of intelligence in their eyes.",
                "dir": "left"
              },
              {
                "para": "That cursed virus takes away all humanity from the human brain. Love, joy, sorrow, fear, humor... eternally.",
                "dir": "left"
              },
              {
                "para": "And Alma, even the memories of the days I spent with you...",
                "dir": "left"
              },
              {
                "para": "Yes, I'm infected.",
                "dir": "left"
              },
              {
                "para": "I did everything I could, but I could only delay the progress by a few days.",
                "dir": "left"
              },
              {
                "para": "The most frightening thing is, that I forget more about you by the day.",
                "dir": "left"
              },
              {
                "para": "So I chose a peaceful death, rather than becoming the living dead.",
                "dir": "left"
              },
              {
                "para": "Within an hour, I will have entered my eternal sleep.",
                "dir": "left"
              },
              {
                "para": "I do hope you'll understand my decision...",
                "dir": "left"
              },
              {
                "para": "Good Bye and Forever Yours,",
                "dir": "left"
              },
              {
                "para": "Martin Crackhorn",
                "dir": "right"
              }
            ],
            "tr_content":[
              {
                "para": "آلمای عزیزم،",
                "dir": "right"
              },
              {
                "para": "این واقعیت که نامه تو دستته، هم مایه‌ی لذتمه و هم مایه‌ی ناراحتی.",
                "dir": "right"
              },
              {
                "para": "بخاطر اون یارو که عینک‌آفتابی داشت، نشد باهات حرف بزنم. آلما، خونسرد باش و این نامه رو بخون.",
                "dir": "right"
              },
              {
                "para": "فکر کنم بهت گفته بودم که به آزمایشگاهِ یه شرکت داروسازی، نقل مکان کردم. شدم مغزِ داستان فرار مغزا.",
                "dir": "right"
              },
              {
                "para": "ماه گذشته تو آزمایشگاه، یه اتفاقی میفته و ویروسی که ما روش مطالعه کردیم آزاد می‌شه.",
                "dir": "right"
              },
              {
                "para": "تمام همکارای منم که آلوده‌ی به این ویروس شده بودن می‌میرن. دقیق‌تر بخوام بگم، اونا تبدیل به مرده‌های زنده می‌شن.",
                "dir": "right"
              },
              {
                "para": "و همچنان این دور و بر پرسه می‌زنن.",
                "dir": "right"
              },
              {
                "para": "همین الآن هم، بعضی‌هاشون درِ اتاقم رو دارن محکم می‌کوبن.",
                "dir": "right"
              },
              {
                "para": "هیچ نشونه‌ای هم از هوشیاری تو چشاشون نیست.",
                "dir": "right"
              },
              {
                "para": "این ویروس نفرین‌شده، همه‌ی انسایت رو از مغز یه انسان پاک می‌کنه می‌بره. عشق، خوشی، غم، ترس، فاز... اونم برای همیشه.",
                "dir": "right"
              },
              {
                "para": "و حتی خاطرات روزایی که با هم بودیم رو...",
                "dir": "right"
              },
              {
                "para": "درسته، منم آلوده شدم.",
                "dir": "right"
              },
              {
                "para": "هر کاری از دستم برمیومد هم انجام دادم، اما فقط تونستم این پروسه رو برای چند روز به تاخیر بندازم.",
                "dir": "right"
              },
              {
                "para": "ترسناک‌ترین چیز اما، اینه که روزبه‌روز خاطراتی که ازت داشتم، دارن پاک می‌شن.",
                "dir": "right"
              },
              {
                "para": "برای همین هم یه مرگ آروم رو انتخاب کردم، تا اینکه یه مرده‌ی زنده باشم.",
                "dir": "right"
              },
              {
                "para": "ظرف یه ساعت دیگه، وارد یه خواب ابدی می‌شم.",
                "dir": "right"
              },
              {
                "para": "و عمیقا امیدوارم که تصمیمم رو درک کنی...",
                "dir": "right"
              },
              {
                "para": "بدرود، با عشق",
                "dir": "right"
              },
              {
                "para": "مارتین کرکهورن",
                "dir": "left"
              },
            ]
          },
          {
            "id": 4,
            "src": require('../assets/img/re1/files/orders/orders.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil/files#!orders",
            "location": [
              {
                "txt": "Location (Chris, Jill)",
                "map": require('../assets/img/re1/files/orders/map/orders-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil/maps/mansion/mansion-2f/trophy-room",
                "map_source": "Evil Resource"
              }
            ],
            "url": "orders",
            "title": "Orders",
            "og_content":[
              {
                "para": "TOP SECRET July 22, 1998 2:13",
                "dir": "left"
              },
              {
                 "para": "To the Head of the Security Department",
                "dir": "left"
              },
              {
                "para": "\"X-day\" is approaching.",
                "dir": "left"
              },
              {
                "para": "Complete the following orders within the week.",
                "dir": "left"
              },
              {
                "para": "1. Lure the members of S.T.A.R.S. into the lab and have them fight with the B.O.W. in order to obtain data of actual battles.",
                "dir": "left"
              },
              {
                "para": "2. Collect two embryos per B.O.W. type making sure to include all species except for Tyrant.",
                "dir": "left"
              },
              {
                "para": "3. Destroy the Arkley lab including all researchers and lab animals in a manner which will seem accidental.",
                "dir": "left"
              },
              {
                "para": "White Umbrella",
                "dir": "right"
              }
            ],
            "tr_content":[
              {
                "para": "فوق سری، ۲۲ ژوئیه‌ی ۱۹۹۸، ساعت ۲:۱۳",
                "dir": "right"
              },
              {
                "para": "به رئیس دپارتمان امنیتی",
                "dir": "right"
              },
              {
                "para": "«روز ایکس» نزدیکه.",
                "dir": "right"
              },
              {
                "para": "دستورات زیر رو، ظرف یه هفته، به پایان برسون.",
                "dir": "right"
              },
              {
                "para": "۱. پای اعضای استارز رو به آزمایشگاه باز کن و بندازشون وسط زد و خورد با بی.او.دابلیو، تا اطلاعاتی از این مبارزات حاصل شه.",
                "dir": "right"
              },
              {
                "para": "۲. به ازای هر نمونه از بی.او.دابلیو، دو جنین بذار کنار، و مطمئن باش که به جز تایرنت، همه رقم رو شامل می‌کنی.",
                "dir": "right"
              },
              {
                "para": "۳. آزمایشگاه آرکلی رو با خاک یکسان کن، اونم با تمام محقق‌ها و حیوانات آزمایشگاهی‌ش، طوری که تصادفی به نظر بیاد.",
                "dir": "right"
              },
              {
                "para": "آمبرلای سفید",
                "dir": "left"
              }
            ]
          },
          {
            "id": 5,
            "src": require('../assets/img/re1/files/plant-42-report/plant-42-report.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil/files#!plant-42-report",
            "location": [
              {
                "txt": "Location (Chris, Jill)",
                "map": require('../assets/img/re1/files/plant-42-report/map/plant-42-report-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil/maps/guardhouse-residence/guardhouse-1f/room-002",
                "map_source": "Evil Resource"
              }
            ],
            "url": "plant-42-report",
            "title": "Plant 42 Report",
            "og_content":[
              {
                "para": "4 days have passed since the accident and the plant at Point 42 is growing amazingly fast.",
                "dir": "left"
              },
              {
                 "para": "It has been effected by the T-Virus differently than other plants have been and shows unique shape in addition to its size. Looking at the way it behaves, it is now difficult to determine what kind of plant it was originally.",
                "dir": "left"
              },
              {
                "para": "There are two ways in which Plant 42 gathers nutrition.",
                "dir": "left"
              },
              {
                "para": "The first is through its root that reaches into the basement.",
                "dir": "left"
              },
              {
                "para": "Immediately after the accident, a scientist went mad and broke the water tank in the basement. Now the basement is filled with water.",
                "dir": "left"
              },
              {
                "para": "It is easily imaginable that some chemical elements were blended in the water and promotes the incredibly fast growth of Plant 42.",
                "dir": "left"
              },
              {
                "para": "Another part of Plant 42 from the basement grows through the duct and hangs down like so many bulbs from the ceiling of the first floor. Many vines come out of those bulbs and they are the second resource for its nutrition.",
                "dir": "left"
              },
              {
                "para": "Once sensing movement, Plant 42 shoots its vines around the prey and holds it. Then it starts sucking up blood, using the suckers located at the back of its vine.",
                "dir": "left"
              },
              {
                "para": "It also has some intelligence.",
                "dir": "left"
              },
              {
                "para": "It blocks the door by twining its vines around it especially when it captures prey or is sleeping. Several staff members have already fallen victim to this.",
                "dir": "left"
              },
              {
                "para": "May 21, 1998",
                "dir": "right"
              },
              {
                "para": "Henry Sarton",
                "dir": "right"
              }
            ],
            "tr_content":[
              {
                "para": "۴ روز از اون اتفاق می‌گذره و گیاه نقطه‌ی ۴۲، در کمال شگفتی، رشد سریعی رو رقم می‌زنه.",
                "dir": "right"
              },
              {
                "para": "این گیاه، متفاوت از بقیه نمونه‌ها از ویروس تی تاثیر می‌گیره، و ظاهر و اندازه‌ی منحصربه‌فردی از خودش بروز می‌ده. با روشی هم که در پیش گرفته، دیگه سخته بفهمی اول ماجرا چه جور گیاهی بوده.",
                "dir": "right"
              },
              {
                "para": "گیاه ۴۲ به دو روش تقویت می‌شه.",
                "dir": "right"
              },
              {
                "para": "اولین روشش هم به واسطه‌ی ریشه‌ی گیاهه، که خودشو به زیرزمین رسونده.",
                "dir": "right"
              },
              {
                "para": "ولی بلافاصله بعد از این اتفاق، یکی از دانشمندا می‌زنه به سرش و مخزن آبِ تو زیرزمین رو می‌پکونه. حالا زیرزمین غرق آبه.",
                "dir": "right"
              },
              {
                "para": "چیزی که به راحتی می‌شه متصور شد اینه که یه سری مواد شیمیایی با آب قاطی می‌شن و رشدِ سریع و وحشتناک گیاه ۴۲ رو جلو میندازن.",
                "dir": "right"
              },
              {
                "para": "بخش دیگه‌ی گیاه 42، از زیرزمین، از میون کانال رشد می‌کنه و و مث خیلی از ریشه‌های طبقه‌ی اول، از سقف آویزون می‌شه. کلی هم ساقه‌های پیچنده از اون ریشه‌ها منشعب می‌شن، که می‌شه گفت منبع دوم تقویتی اونن.",
                "dir": "right"
              },
              {
                "para": "به محض اینکه حرکتی هم حس کنه، ساقه‌هاشو می‌پیچه دور طعمه‌ش و گیرش می‌ندازه. بعدش هم با آلت مکنده‌ی پشت ساقه‌ش، شروع به مکیدن خون می‌کنه.",
                "dir": "right"
              },
              {
                "para": "همچنین می‌شه گفت که اون از هوش بهره می‌بره.",
                "dir": "right"
              },
              {
                "para": "و به واسطه‌ی پیچوندن ساقه‌هاش، دورِ در، جلوشو می‌گیره. مخصوصا وقتی که طعمه‌شو گیر میاره یا موقعی که می‌ره بخوابه. تا حالا که خیلی از کارکنا قربانی این گیاه شدن.",
                "dir": "right"
              },
              {
                "para": "۲۱ مه ۱۹۹۸",
                "dir": "left"
              },
              {
                "para": "هنری سارتن",
                "dir": "left"
              },
            ]
          },
          {
            "id": 6,
            "src": require('../assets/img/re1/files/fax/fax.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil/files#!fax",
            "location": [
              {
                "txt": "Location (Chris, Jill)",
                "map": require('../assets/img/re1/files/fax/map/fax-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil/maps/underground-laboratory/laboratory-b3/private-room",
                "map_source": "Evil Resource"
              }
            ],
            "url": "fax",
            "title": "Fax",
            "og_content":[
              {
                "para": "To:",
                "dir": "left"
              },
              {
                 "para": "General Manager of Sanitation Division",
                "dir": "left"
              },
              {
                "para": "From:",
                "dir": "left"
              },
              {
                "para": "Special Committee on Disasters Raccoon Special Research Dept.",
                "dir": "left"
              },
              {
                "para": "This memorandum is strictly confidential and must be destroyed as soon as it is understood.",
                "dir": "left"
              },
              {
                "para": "Regarding the \"T-Virus\" outbreak which occurred recently, this Committee conducted a field survey. According to the results, estimates on the amount of damage caused by the accident are considerably greater than reported earlier.",
                "dir": "left"
              },
              {
                "para": "First, although it is very difficult to obtain accurate data in terms of actual numbers, it is thought that more than half of the researchers died after exposure to the \"T-Virus\". The body count will almost likely increase since nearly all of the survivors show symptoms peculiar to the \"T-Virus\".",
                "dir": "left"
              },
              {
                "para": "Second, our security system is still in operation. However, our special security guard squad has been nearly destroyed. Because of that, research information considered by our company to be top secret has been made available to outsiders. Counter-measures should be taken as soon as possible.",
                "dir": "left"
              },
              {
                "para": "Finally, many of the \"subjects\" from the experiments have escaped and are out of control. We believe that some of the researchers were killed by these \"subjects\" and their bodies were mutilated.",
                "dir": "left"
              },
              {
                "para": "By curious coincidence, these events are proof of the success of our research. However, there is also a very high risk that this news may be leaked to the press if we don't act immediately.",
                "dir": "left"
              },
              {
                "para": "The condition is very serious. Our operation to cover-up the situation is difficult to attain, however we hope the problem will be solved quickly.",
                "dir": "left"
              },
              {
                "para": "We are especially concerned that the State Police and S.T.A.R.S. are intervening too quickly.",
                "dir": "left"
              },
              {
                "para": "We need to act on this situation as well.",
                "dir": "left"
              }
            ],
            "tr_content":[
              {
                "para": "گیرنده:",
                "dir": "right"
              },
              {
                "para": "مدیر کل بخش بهداشت",
                "dir": "right"
              },
              {
                "para": "فرستنده:",
                "dir": "right"
              },
              {
                "para": "کمیته‌ی خصوصیِ مربوط به دپارتمان تحقیقاتیِ ویژه‌ی فجایع راکون",
                "dir": "right"
              },
              {
                "para": "این یادداشت، شدیدا محرمانه است و می‌بایست به محض دریافت، معدوم گردد.",
                "dir": "right"
              },
              {
                "para": "درباره‌ی شیوع «ویروس تی» اما، که اخیرا نیز به وقوع پیوسته، این کمیته یک بررسی میدانی انجام داده، که طبق نتایج آن، برآورد آسیب ناشیِ از این مهم بسیار بیشتر از گزارشات اولیه است.",
                "dir": "right"
              },
              {
                "para": "نخست، اگر چه ارائه‌ی آماری دقیق از تعداد واقعیِ افراد دشوار است، اما اینطور که به نظر می‌رسد، بیش از نیمی از محققان، پس از آنکه در معرض «ویروس تی» قرار می‌گیرند، جان می‌بازند. از آنجا که عملا تمامی بازماندگان، علائمی مختص به «ویروس تی» نشان می‌دهند، میزان تلفات احتمالا رو به افزایش خواهد بود.",
                "dir": "right"
              },
              {
                "para": "در ثانی، سیستم امنیتی‌مان همچنان فعال است، اما جوخه‌ی نگهبانی امنیتی ویژه، تقریبا از بین رفته. از این رو، اطلاعات تحقیقاتی‌ای که توسط کمپانی ما فوق سری به شمار می‌رفت، برای غیر خودی‌ها نیز در دسترس قرار گرفته. به زودیِ هر چه تمام باید اقدامات متقابلی صورت بگیرد.",
                "dir": "right"
              },
              {
                "para": "و در پایان آنکه، بسیاری از «سوژه‌ها»ی این آزمایشات، گریخته و از کنترل خارج شده‌اند. و ما معتقدیم که بسیاری از محققان، توسط این «سوژه‌ها» به قتل رسیده و جسدشان قطع عضو شده.",
                "dir": "right"
              },
              {
                "para": "تصادف عجیب اما آن است که این وقایع، نشان‌دهنده‌ی موفقیت تحقیقات ماست. اگرچه که در صورت عدم اقدام فوری، خطری بزرگ برای درز کردن این اخبار به بیرون وجود دارد.",
                "dir": "right"
              },
              {
                "para": "شرایط، بحرانی‌ست. و عملیات ما در دستیابی به لاپوشانیِ این موقعیت نیز دشوار است، هر چند امیدواریم تا این مشکل به زودی حل شود.",
                "dir": "right"
              },
              {
                "para": "ما نگران آنیم که پلیس ایالتی و استارز به سرعت پا به میان بگذارند.",
                "dir": "right"
              },
              {
                "para": "ما خود اما، نیازمند انجام عملیات بر روی این موقعیت‌ایم.",
                "dir": "right"
              },
            ]
          },
          {
            "id": 7,
            "src": require('../assets/img/re1/files/scrapbook/scrapbook.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil/files#!scrapbook",
            "location": [
              {
                "txt": "Location (Chris, Jill)",
                "map": require('../assets/img/re1/files/scrapbook/map/scrapbook-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil/maps/mansion/mansion-2f/large-library",
                "map_source": "Evil Resource"
              }
            ],
            "url": "scrapbook",
            "title": "Scrapbook",
            "og_content":[
              {
                "para": "RACCOON TIMES MAY 27, 1998",
                "dir": "left"
              },
              {
                 "para": "ANIMAL ATTACK? WOMAN MUTILATED",
                "dir": "left"
              },
              {
                "para": "May 20. Around 10 PM a 20-year-old young woman's body was found by a passer-by on the left bank of Marble River in the Cider District of Raccoon City.",
                "dir": "left"
              },
              {
                "para": "Raccoon police assume it to be a grizzly or other animal's doing because there are teeth marks along her mutilated arms and left foot that show considerable power. Since she was wearing a hiking boot on her remaining foot, it has been determined that she was attacked in the Arklay Mountains and fell into the river. They are hurrying to identify this woman.",
                "dir": "left"
              },
              {
                "para": "RACCOON WEEKLY JUNE 16, 1998",
                "dir": "left"
              },
              {
                "para": "MONSTERS IN ARKLAY MOUNTAINS?",
                "dir": "left"
              },
              {
                "para": "Some people claim they've seen monsters in the Arklay mountains.",
                "dir": "left"
              },
              {
                "para": "The monsters are supposedly about the same size as large dogs and usually run in a pack as wolves do.",
                "dir": "left"
              },
              {
                "para": "This may sound like a group of ordinary wild dogs, but these monsters are surprisingly fierce and hard to hurt.",
                "dir": "left"
              },
              {
                "para": "They say these dogs won't bother you unless you wake them, so you smart readers should stay out of the Arklay Mountains for the time being.",
                "dir": "left"
              },
              {
                "para": "But if you're looking for adventure, check it out! You wanna try?",
                "dir": "left"
              },
              {
                "para": "RACCOON TIMES JULY 9, 1998",
                "dir": "left"
              },
              {
                "para": "MYSTERY ON ARKLAY MOUNTAINS: MOUNTAIN ROAD BLOCKED",
                "dir": "left"
              },
              {
                "para": "Due to successive disasters in the Arklay Mountains, the city authorities have decided to block the road leading to the foothills.",
                "dir": "left"
              },
              {
                "para": "At the same time, Raccoon police intend to begin the search for lost people with the help of S.T.A.R.S. team members. They expect great difficulty because of the vast size of the Arklay Mountains and the primeval forest that covers most of the area.",
                "dir": "left"
              },
              {
                "para": "Also people are still reporting sightings of grotesque monsters in the mountains.",
                "dir": "left"
              }
            ],
            "tr_content":[
              {
                "para": "راکون تایمز، ۲۷ مه ۱۹۹۸",
                "dir": "right"
              },
              {
                "para": "حمله‌ی یک حیوان؟ یک زن، نقص عضو می‌شود",
                "dir": "right"
              },
              {
                "para": "۲۰ مه، حوالی ساعت ۱۰ شب، جسد یک زن ۲۰ ساله، در ساحل سمت چپ رودخانه‌ی ماربل در منطقه‌ی سیدر شهر راکون، توسط یک رهگذر، پیدا می‌شود.",
                "dir": "right"
              },
              {
                "para": "پلیس راکون بنا را بر این گذاشته که این کارِ یک خرس یا حیوانی دیگر باشد، چرا که اثر گازهای موجود بر روی دست‌ها و پای چپ وی که از جا قطع شده، قدرت بسیاری را به اثبات می‌رساند. از آنجا که کفش کوهنوردی، به پای آسیب‌ندیده‌ی وی است، گویا او در کوه‌های آرکلی مورد حمله قرار گرفته و سپس در رودخانه سقوط کرده. آن‌ها در تکاپوی تعیین هویت این زن هستند.",
                "dir": "right"
              },
              {
                "para": "روزنامه‌ی هفتگی راکون، ۱۶ ژوئن ۱۹۹۸",
                "dir": "right"
              },
              {
                "para": "هیولا در کوه‌های آرکلی؟",
                "dir": "right"
              },
              {
                "para": "برخی مدعی آن هستند که هیولاهایی را در کوه‌های آرکلی‌اند دیده‌اند.",
                "dir": "right"
              },
              {
                "para": "هیولاهایی که گویا از نظر جثه همانند سگ‌هایی بزرگ عمل می‌کنند، و به مانند گرگ‌ها، همچون گله می‌تازند.",
                "dir": "right"
              },
              {
                "para": "شاید آن‌ها همچون گروهی از سگ‌های وحشیِ معمولی به نظر برسند، اما این هیولاها به طرز شگفت‌انگیزی تندخو و مقاوم‌اند.",
                "dir": "right"
              },
              {
                "para": "گفته می‌شود که این سگ‌ها کاری به شما ندارند، مگر آنکه خود سربه‌سرشان بگذارید، بنابراین شما خوانندگان زیرک، موقتا نباید در معرض خطر کوه‌های آرکلی قرار بگیرید.",
                "dir": "right"
              },
              {
                "para": "اما اگر به دنبال ماجراجویی هستید، به آن سر بزنید! آیا امتحانش می‌کنید؟",
                "dir": "right"
              },
              {
                "para": "راکون تایمز، ۹ ژوئیه‌ی ۱۹۹۸",
                "dir": "right"
              },
              {
                "para": "اسرار کوه‌های آرکلی! جاده‌ی آرکلی بسته می‌شود",
                "dir": "right"
              },
              {
                "para": "به سبب فجایع پی‌درپی موجود در کوه‌های آرکلی، مسئولین شهر تصمیم گرفتند تا مسیر منتهی به دامنه‌ی کوه را مسدود کنند.",
                "dir": "right"
              },
              {
                "para": "در عین حال، پلیس راکون قصد دارد تا جستجو برای افراد گم‌شده را، به کمک اعضای استارز، کلید بزند. به واسطه‌ی مقیاس بزرگ کوه‌های آرکلی، و جنگلی کهن که عمده‌ی منطقه را پوشانده، آنها چالشی مهلک را پیش‌بینی می‌کنند.",
                "dir": "right"
              },
              {
                "para": "و مردم نیز همچنان مشاهده‌های خود، از هیولاهایی منزجرکننده را، در این رشته‌کوه گزارش می‌دهند.",
                "dir": "right"
              },
            ]
          },
          {
            "id": 8,
            "src": require('../assets/img/re1/files/security-system/security-system.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil/files#!security-system",
            "location": [
              {
                "txt": "Location (Chris, Jill)",
                "map": require('../assets/img/re1/files/security-system/map/security-system-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil/maps/underground-laboratory/laboratory-b2/visual-data-room",
                "map_source": "Evil Resource"
              }
            ],
            "url": "security-system",
            "title": "Security System",
            "og_content":[
              {
                "para": "- BASEMENT LEVEL 1 -",
                "dir": "center"
              },
              {
                "para": "HELICOPTER PORT",
                "dir": "left"
              },
              {
                "para": "Executive and Government Officials only on helicopter port.",
                "dir": "left"
              },
              {
                "para": "This restriction may not apply in case of an accident.",
                "dir": "left"
              },
              {
                "para": "PASSAGE TO THE HELICOPTER",
                "dir": "left"
              },
              {
                "para": "No one is allowed to enter unless they are attended by a Research Consultant or Security Director.",
                "dir": "left"
              },
              {
                "para": "All others will be shot on sight.",
                "dir": "left"
              },
              {
                "para": "ELEVATOR",
                "dir": "left"
              },
              {
                "para": "The elevator stops during all emergencies.",
                "dir": "left"
              },
              {
                "para": "- BASEMENT LEVEL 2 -",
                "dir": "center"
              },
              {
                "para": "VISUAL DATA ROOM",
                "dir": "left"
              },
              {
                "para": "Visual Data Room is within the control of Special Research Division. Keith Arving, the Room Manager, is designated to have jurisdiction over room usage.",
                "dir": "left"
              },
              {
                "para": "- BASEMENT LEVEL 3 -",
                "dir": "center"
              },
              {
                "para": "PRISON",
                "dir": "left"
              },
              {
                "para": "Sanitation Division controls the usage of the prison. Consultant Researchers (E.Smith, S.Ross, A.Wesker) must be present if virus is used.",
                "dir": "left"
              },
              {
                "para": "TRIPLE LOCK DOOR",
                "dir": "left"
              },
              {
                "para": "No one is allowed to enter unless he presents all pass code documents.",
                "dir": "left"
              },
              {
                "para": "Pass code documents must be created on the specialized output machine by the Chief Researcher of each block.",
                "dir": "left"
              },
              {
                "para": "POWER ROOM",
                "dir": "left"
              },
              {
                "para": "Only Headquarters Supervisors may enter.",
                "dir": "left"
              },
              {
                "para": "This restriction may not apply in the Consultant Researcher has received special instructions.",
                "dir": "left"
              },
              {
                "para": "PASS CODE OUTPUT MACHINE",
                "dir": "left"
              },
              {
                "para": "No one is allowed to use the pass code output machine but the Chief Researchers.",
                "dir": "left"
              },
              {
                "para": "- BASEMENT LEVEL 4 -",
                "dir": "center"
              },
              {
                "para": "TOP SECRET",
                "dir": "left"
              },
              {
                "para": "Regarding the progress of \"Tyrant\" after the use of T-virus... (Remaining document is unreadable)",
                "dir": "left"
              }
            ],
            "tr_content":[
              {
                "para": "- زیرزمین، سطح ۱ -",
                "dir": "center"
              },
              {
                "para": "فرودگاه هلیکوپتر",
                "dir": "right"
              },
              {
                "para": "هیئت رئیسه و مسئولان دولتی تنها در فرودگاه حاضر باشند.",
                "dir": "right"
              },
              {
                "para": "محدودیت فوق ممکن است در صورت تصادف اعمال نگردد.",
                "dir": "right"
              },
              {
                "para": "گذرگاه منتهی به هلیکوپتر",
                "dir": "right"
              },
              {
                "para": "هیچ‌کس حق ورود ندارد، مگر آنکه در کنار یک مشاور تحقیقاتی یا مدیر امنیتی حضور داشته باشد.",
                "dir": "right"
              },
              {
                "para": "در صورت مشاهده، به دیگران شلیک خواهد شد.",
                "dir": "right"
              },
              {
                "para": "آسانسور",
                "dir": "right"
              },
              {
                "para": "آسانسور در مواقع اضطراری، متوقف می‌شود.",
                "dir": "right"
              },
              {
                "para": "- زیرزمین، سطح ۲ -",
                "dir": "center"
              },
              {
                "para": "اتاق داده‌های بصری",
                "dir": "right"
              },
              {
                "para": "اتاق داده‌های بصری، تحت کنترل بخش تحقیقاتیِ ویژه است. کیت آروینگ، مدیر این فضا، در جهت نظارت بر بکارگیری آن گماشته شده.",
                "dir": "right"
              },
              {
                "para": "- زیرزمین، سطح ۳ -",
                "dir": "center"
              },
              {
                "para": "زندان",
                "dir": "right"
              },
              {
                "para": "بخش بهداشت، نظارت بر زندان را به عهده دارد. محققان مشاور (ا.اسمیت، س.راس، آ.وسکر) می‌بایست در صورت بکارگیری ویروس حضور یابند.",
                "dir": "right"
              },
              {
                "para": "درِ سه‌قفله",
                "dir": "right"
              },
              {
                "para": "هیچ‌کس حق ورود ندارد، مگر آنکه تمامی مستندات مربوط به رمز‌های عبور، ارائه داده شود.",
                "dir": "right"
              },
              {
                "para": "این مستندات می‌بایست توسط محقق ارشد هر بند و به واسطه‌ی دستگاه دریافت ویژه‌ی رمز عبور ساخته شوند.",
                "dir": "right"
              },
              {
                "para": "اتاق برق",
                "dir": "right"
              },
              {
                "para": "تنها مافوق‌های مرکز فرماندهی حق ورود دارند.",
                "dir": "right"
              },
              {
                "para": "در صورت دریافت فرمان توسط محقق مشاور، این محدودیت اعمال نمی‌گردد.",
                "dir": "right"
              },
              {
                "para": "ماشین دریافت رمز عبور",
                "dir": "right"
              },
              {
                "para": "هیچ‌کس حق استفاده از ماشین دریافت رمز عبور را ندارد، مگر محققان ارشد.",
                "dir": "right"
              },
              {
                "para": "- زیرزمین، سطح ۴ -",
                "dir": "center"
              },
              {
                "para": "فوق سری",
                "dir": "right"
              },
              {
                "para": "در باب پروسه‌ی «تایرنت»، پس از استفاده‌ی از ویروس تی... (باقیِ مستند، غیر قابل خوندنه)",
                "dir": "right"
              }
            ]
          },
          {
            "id": 9,
            "src": require('../assets/img/re1/files/researcher-s-letter/researcher-s-letter.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil/files#!researchers-letter",
            "location": [
              {
                "txt": "Location (Chris, Jill)",
                "map": require('../assets/img/re1/files/researcher-s-letter/map/researcher-s-letter-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil/maps/underground-laboratory/laboratory-b3/x-ray-room",
                "map_source": "Evil Resource"
              }
            ],
            "url": "researcher-s-letter",
            "title": "Researcher's Letter",
            "og_content":[
              {
                "para": "June 8, 1998",
                "dir": "left"
              },
              {
                "para": "Dear Ada,",
                "dir": "left"
              },
              {
                "para": "Ada, by the time you read this, I'll be something... different. Today's test turned out to be positive, just as I expected. I feel like going crazy when I think about becoming one of them.",
                "dir": "left"
              },
              {
                "para": "Ada, you're not infected and I hope you never will be.",
                "dir": "left"
              },
              {
                "para": "In case you are the last one left, take the material in the Visual Data Room and go to the Power Room to operate the Triggering System before you escape.",
                "dir": "left"
              },
              {
                "para": "And make all this public through the media.",
                "dir": "left"
              },
              {
                "para": "If everything is in order, all the locks can be opened by the security system. You can access the system if you log in with my name from the terminal in the small lab and enter the password. The password is your name.",
                "dir": "left"
              },
              {
                "para": "To unlock the door at B2 where the Visual Data Room is located, you'll need to access with our name first and then enter another password.",
                "dir": "left"
              },
              {
                "para": "I've written the code below. I'm sure you'll understand it easily.",
                "dir": "left"
              },
              {
                "para": "And this is my last hope - if you find me completely changed, please kill me yourself.",
                "dir": "left"
              },
              {
                "para": "PASSWORD = ᛗ ᛟ ᛚ ᛖ",
                "dir": "center"
              },
              {
                "para": "Yours, John",
                "dir": "right"
              }
            ],
            "tr_content":[
              {
                "para": "۸ ژوئن ۱۹۹۸",
                "dir": "right"
              },
              {
                "para": "ایدای عزیز،",
                "dir": "right"
              },
              {
                "para": "ایدا، وقتی که تو نامه رو می‌خونی‌ش من دیگه چیزِ... متفاوتی شدم. کاشف به عمل اومده که تست امروز مثبت بوده، درست همونطور که انتظار می‌رفت. وقتی هم که فکر می‌کنم قراره به یکی از اونا تبدیل بشم، مخم رد می‌ده.",
                "dir": "right"
              },
              {
                "para": "ایدا، تو بهش مبتلا نشدی و امیدوارم هیچ‌وقت هم اینطور نشی.",
                "dir": "right"
              },
              {
                "para": "اگه به عنوان اخرین نفر، جون سالم به در بردی، اطلاعات موجود توی اتاق داده‌های بصری رو بردارد و قبل اینکه فرار کنی، برای راه‌اندازی سیستم تحریک، به اتاق برق برو.",
                "dir": "right"
              },
              {
                "para": "و اینکه، تمامی این مستندات رو از طریق رسانه‌ها عمومی کن.",
                "dir": "right"
              },
              {
                "para": "وقتی همه چی سر جاش باشه، سیستم امنیتی می‌تونه همه‌ی قفلا رو وا کنه. تو به سیستم دسترسی داری، اگه از ترمینالِ تو آزمایشگاه کوچیکه، با اسم من وارد حسابم شی و رمز عبورو وارد کنی. رمز عبور، اسم خودته.",
                "dir": "right"
              },
              {
                "para": "برای باز کردن درِ زیرزمینِ سطح ۲، که اتاق داده‌های بصری اونجاست، نیازه که اول، اسم‌هامون رو وارد کنی، و بعد یه رمز عبور دیگه رو بزنی.",
                "dir": "right"
              },
              {
                "para": "من رمز رو پایین نوشتم، و مطمئنم که عین هلو می‌گیری منظور رو.",
                "dir": "right"
              },
              {
                "para": "این امید نهایی منه - اگه دیدی که زیادی تغییر کردم، خودت منو خلاص کن.",
                "dir": "right"
              },
              {
                "para": "رمز: ᛗ ᛟ ᛚ ᛖ",
                "dir": "center"
              },
              {
                "para": "چاکرت، جان",
                "dir": "left"
              },
            ]
          },
          {
            "id": 10,
            "src": require('../assets/img/re1/files/v-jolt-report/v-jolt-report.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil/files#!v-jolt-report",
            "location": [
              {
                "txt": "Location (Chris, Jill)",
                "map": require('../assets/img/re1/files/v-jolt-report/map/v-jolt-report-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil/maps/guardhouse-residence/guardhouse-1f/room-003",
                "map_source": "Evil Resource"
              }
            ],
            "url": "v-jolt-report",
            "title": "\"V-JOLT\" Report",
            "og_content":[
              {
                "para": "As I stated in the last report, there are some common features found in the cells of the plant infected by the Tyrant virus. We also have found another interesting fact through some experiments.",
                "dir": "left"
              },
              {
                "para": "We found an element that destroys these plant cells rapidly in \"UMB No.16\", one of the series of UMB chemicals that we used for that experiment.",
                "dir": "left"
              },
              {
                "para": "We named this \"UMB No.16\" as \"V-JOLT\".",
                "dir": "left"
              },
              {
                "para": "In our calculation, it will take less than 5 seconds to destroy Plant 42 if we put the \"V-JOLT\" directly on the root.",
                "dir": "left"
              },
              {
                "para": "You need to mix some of the UMB series chemicals in a specific order to create a \"V-JOLT\". But the UMB series chemicals may generate a poisonous gas which is harmful to the human body. Extreme caution should be taken when handling these chemicals.",
                "dir": "left"
              },
              {
                "para": "Following are the types of UMB series chemicals and their brief characteristics.",
                "dir": "left"
              },
              {
                "para": "UMB No. 2 Red NP-003 Purple",
                "dir": "left"
              },
              {
                "para": "UMB No. 4 Green Yellow-6 Yellow",
                "dir": "left"
              },
              {
                "para": "UMB No. 7 White",
                "dir": "left"
              },
              {
                "para": "UMB No. 13 Blue (stimulating smell)",
                "dir": "left"
              },
              {
                "para": "V-JOLT (UMB No. 16) Brown",
                "dir": "left"
              }
            ],
            "tr_content":[
              {
                "para": "همونطور که توی گزارش قبلی گفته بودم، یه سری خصیصه‌های مشترک توی سلول‌های گیاه مشاهده می‌شه، گیاهی که توسط ویروس تایرنت آلوده شده. ما حتی از طریق یه سری آزمایش، متوجه یه واقعیت جالب شدیم؛",
                "dir": "right"
              },
              {
                "para": "اینکه یه المانی هست که که سلول‌هاشو مرتب توی «یو.ام.بی شماره‌ی 16» می‌پُکونه؛ از سری مواد شیمیاییِ یو.ام.بی که ما برای این آزمایش استفاده‌ش کردیم.",
                "dir": "right"
              },
              {
                "para": "ما اسمش رو گذاشتیم «وی-جی.او.ال.تی».",
                "dir": "right"
              },
              {
                "para": "و طبق برآورد ما، در صورت تماسِ مستقیم «وی-جی.او.ال.تی» با ریشه‌ی گیاه ۴۲، ۵ ثانیه نشده نابودش می‌کنه.",
                "dir": "right"
              },
              {
                "para": "برای ساخت «وی-جی.او.ال.تی» مجبورین از سری مواد شیمیایی یو.ام.بی با ترتیب مشخصی استفاده کنین. و اینکه این سری مواد شیمیایی ممکنه که یه گاز سمی به وجود بیارن که برای بدن انسان مضره. موقع کار با این مواد شیمیایی باید نهایت احتیاط رو به کار گرفت.",
                "dir": "right"
              },
              {
                "para": "صفحه‌ی بعد شاملِ انواع سری یو.ام.بی و مختصراتی از خصیصه‌هاشونه.",
                "dir": "right"
              },
              {
                "para": "یو.ام.بی شماره‌ی 2 قرمز ان.پی-003 بنفش",
                "dir": "right"
              },
              {
                "para": "یو.ام.بی شماره‌ی 4 سبز زرد-6 زرد",
                "dir": "right"
              },
              {
                "para": "یو.ام.بی شماره‌ی 7 سفید",
                "dir": "right"
              },
              {
                "para": "یو.ام.بی شماره‌ی 13 آبی (محرک شامه)",
                "dir": "right"
              },
              {
                "para": "وی-جی.او.ال.تی (یو.ام.بی شماره‌ی 16) قهوه‌ای",
                "dir": "right"
              }
            ]
          },
          {
            "id": 11,
            "src": require('../assets/img/re1/files/barry-s-picture/barry-s-picture.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil/files#!barrys-picture",
            "location": [
              {
                "txt": "Location (Jill)",
                "map": require('../assets/img/re1/files/barry-s-picture/map/barry-s-picture-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil/maps/underground-laboratory/laboratory-b2/ladder-room",
                "map_source": "Evil Resource"
              }
            ],
            "url": "barry-s-picture",
            "title": "Barry's Picture",
            "og_content":[
              {
                "para": "Barry's Picture.",
                "dir": "left"
              },
              {
                "para": "Something is written on the back of the picture.",
                "dir": "left"
              },
              {
                "para": "\" My dearest Moira and Poly.",
                "dir": "left"
              },
              {
                "para": "I hope you will grow up to be strong and beautiful woman and help to cheer up mother.",
                "dir": "left"
              },
              {
                "para": "Your father will watching you all from heaven.",
                "dir": "left"
              },
              {
                "para": "Dad \"",
                "dir": "right"
              }
            ],
            "tr_content":[
              {
                "para": "این یه تصویر از بری‌ـه.",
                "dir": "right"
              },
              {
                "para": "یه چیزی پشت این عکس نوشته شده.",
                "dir": "right"
              },
              {
                "para": "«به عزیزترین کسام، مویرا و پولی،",
                "dir": "right"
              },
              {
                "para": "امیدوارم بزرگ‌وبزرگترشدن، ازت یه زن زیبا و قوی بسازه تا بتونی به مادرت روحیه بدی.",
                "dir": "right"
              },
              {
                "para": "بابایی از بهشت مواظب‌تونه.",
                "dir": "right"
              },
              {
                "para": "پدرت»",
                "dir": "left"
              }
            ]
          },
          {
            "id": 12,
            "src": require('../assets/img/re1/files/pass-code-01/pass-code-01.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil/files#!pass-code-01",
            "location": [
              {
                "txt": "Location (Chris, Jill)",
                "map": require('../assets/img/re1/files/pass-code-01/map/pass-code-01-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil/maps/underground-laboratory/laboratory-b3/private-room",
                "map_source": "Evil Resource"
              }
            ],
            "url": "pass-code-01",
            "title": "Pass Code 01",
            "og_content":[
              {
                "para": "\"I swear by myself\", declares the Lord, \"that because you have done this and have not withheld your son, your only son,",
                "dir": "left"
              },
              {
                "para": "(Genesis 22:16)",
                "dir": "right"
              }
            ],
            "tr_content":[
              {
                "para": "به گفته‌ی پروردگار «به خودم قسم»، «به خاطر آنکه تو به انجامش رساندی و تنها فرزندت را منع نکردی،",
                "dir": "right"
              },
              {
                "para": "(جنسیس ۲۲:۱۶)",
                "dir": "left"
              }
            ]
          },
          {
            "id": 13,
            "src": require('../assets/img/re1/files/pass-code-02/pass-code-02.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil/files#!pass-code-02",
            "location": [
              {
                "txt": "Location (Chris, Jill)",
                "map": require('../assets/img/re1/files/pass-code-02/map/pass-code-02-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil/maps/underground-laboratory/laboratory-b3/morgue",
                "map_source": "Evil Resource"
              }
            ],
            "url": "pass-code-02",
            "title": "Pass Code 02",
            "og_content":[
              {
                "para": "I will surely bless you and make your descendant as numerous as the stars in the sky, and as the sand on the seashore.",
                "dir": "left"
              },
              {
                "para": "Your descendants will take possession of the cities of their enemies,",
                "dir": "left"
              },
              {
                "para": "(Genesis 22:17)",
                "dir": "right"
              }
            ],
            "tr_content":[
              {
                "para": "البته، تو را برکت می‌دهم، و اولادت را به ازدیادِ ستاره‌های آسمان، و شن‌های یک ساحل درمی‌آورم.",
                "dir": "right"
              },
              {
                "para": "اولادت، شهرهای دشمنان‌شان را صاحب می‌شوند،",
                "dir": "right"
              },
              {
                "para": "(جنسیس ۲۲:۱۷)",
                "dir": "left"
              }
            ]
          },
          {
            "id": 14,
            "src": require('../assets/img/re1/files/pass-code-03/pass-code-03.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil/files#!pass-code-03",
            "location": [
              {
                "txt": "Location (Chris, Jill)",
                "map": require('../assets/img/re1/files/pass-code-03/map/pass-code-03-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil/maps/underground-laboratory/laboratory-b3/power-maze-2",
                "map_source": "Evil Resource"
              }
            ],
            "url": "pass-code-03",
            "title": "Pass Code 03",
            "og_content":[
              {
                "para": "and through your offspring all nations on earth will be blessed, because you have obeyed me.\"",
                "dir": "left"
              },
              {
                "para": "(Genesis 22:18)",
                "dir": "right"
              }
            ],
            "tr_content":[
              {
                "para": "و به واسطه‌ی فرزندانت، تمامی مللِ روی زمین برکت داده می‌شوند، چرا که تو از من پیروی کردی.»",
                "dir": "right"
              },
              {
                "para": "(جنسیس ۲۲:۱۸)",
                "dir": "left"
              }
            ]
          }
        ]
      },
      {
        id: 2,
        title: 'RE2',
        url: 're2',
        files:
        [
          {
            "id": 1,
            "src": require('../assets/img/re2/files/police-memorandum/police-memorandum.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-2/files#!police-memorandum",
            "location": [
              {
                "txt": "Location (Leon A+B, Claire A+B)",
                "src": require('../assets/img/re2/files/police-memorandum/location/police-memorandum-location.webp'),
                "map": require('../assets/img/re2/files/police-memorandum/map/police-memorandum-map.png'),
                "src_source_link": "https://residentevil.fandom.com/wiki/Police_memorandum",
                "src_source": "Resident Evil Wiki",
                "map_source_link": "https://www.evilresource.com/resident-evil-2/maps/police-station/police-station-1f/waiting-room-1f",
                "map_source": "Evil Resource",
              }
            ],
            "url": "police-memorandum",
            "title": "Police Memorandum",
            "og_content":[
              {
                "para": "8/23/1998",
                "dir": "left"
              },
              {
                 "para": "This letter is just to inform everyone about the recent movement of equipment that has happened during the precinct's rearrangement.",
                "dir": "left"
              },
              {
                "para": "The safe with four digit lock has been moved from S.T.A.R.S. office on the second floor, to the eastern office on the first floor.",
                "dir": "left"
              },
              {
                "para": "\"2236\"",
                "dir": "center"
              },
              {
                "para": "Raccoon Police Liaison Dept.",
                "dir": "right"
              }
            ],
            "tr_content":[
              {
                "para": "۲۳ اوت ۱۹۹۸",
                "dir": "right"
              },
              {
                "para": "این نامه، تنها به منظور اطلاع‌رسانی عموم درباره‌ی انتقال تجهیزاتی‌ست که طی بازآرایی کلانتری به انجام رسیده.",
                "dir": "right"
              },
              {
                "para": "گاوصندوقِ دارای قفل چهار رقمی نیز از دفتر استارز، واقع در طبقه‌ی دوم، به دفتر شرقیِ در طبقه‌ی اول، انتقال یافته. ",
                "dir": "right"
              },
              {
                "para": "«۲۲۳۶»",
                "dir": "center"
              },
              {
                "para": "دپارتمان ارتباطات پلیس راکون",
                "dir": "left"
              }
            ]
          },
          {
            "id": 2,
            "src": require('../assets/img/re2/files/chris-s-diary/chris-s-diary.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-2/files#!chriss-diary",
            "location": [
              {
                "txt": "Location (Leon A+B, Claire A+B)",
                "src": require('../assets/img/re2/files/chris-s-diary/location/chris-s-diary-location.webp'),
                "map": require('../assets/img/re2/files/chris-s-diary/map/chris-s-diary-map.png'),
                "src_source_link": "https://residentevil.fandom.com/wiki/CHRIS%27s_diary",
                "src_source": "Resident Evil Wiki",
                "map_source_link": "https://www.evilresource.com/resident-evil-2/maps/police-station/police-station-2f/stars-office",
                "map_source": "Evil Resource",
              }
            ],
            "url": "chris-s-diary",
            "title": "Chris's Diary",
            "og_content":[
              {
                "para": "August 8th",
                "dir": "left"
              },
              {
                 "para": "I talked to the chief today once again, but he refused to listen to me. I know for certain that Umbrella conducted T-virus research in that mansion.",
                "dir": "left"
              },
              {
                "para": "Anyone infected turns into a zombie.",
                "dir": "left"
              },
              {
                "para": "But the entire mansion went up in that explosion; along with any incriminating evidence. Since Umbrella employs so many people in this town, no one is willing to talk about the incident.",
                "dir": "left"
              },
              {
                "para": "It looks like I'm running out of options.",
                "dir": "left"
              },
              {
                "para": "August 17th",
                "dir": "left"
              },
              {
                "para": "We've been receiving a lot of local reports about strange monsters appearing at random throughout the city. This must be the work of Umbrella.",
                "dir": "left"
              },
              {
                "para": "August 24th",
                "dir": "left"
              },
              {
                "para": "With the help of Jill and Barry, I finally obtained information vital to this case. Umbrella has begun research on the new G-virus, a variation of the original T-virus. Haven't they done enough damage already?!",
                "dir": "left"
              },
              {
                "para": "We talked it over, and have decided to fly to the main Umbrella HQ in Europe. I won't tell my sister about this trip because doing so could put her in danger.",
                "dir": "left"
              },
              {
                "para": "Please forgive me Claire.",
                "dir": "left"
              }
            ],
            "tr_content":[
              {
                "para": "۸ اوت",
                "dir": "right"
              },
              {
                "para": "همین امروز یه بار دیگه با رئیس کل صحبت کردم، اما گوشش بدهکار نبود. ولی من یقین دارم که آمبرلا، تحقیقات مرتبط با ویروس تی رو تو اون عمارت به انجام رسوند.",
                "dir": "right"
              },
              {
                "para": "هر کسی هم که آلوده می‌شد، زامبی از آب درمیومد.",
                "dir": "right"
              },
              {
                "para": "هرچند که طی اون انفجار، کل عمارت رفت رو هوا؛ اونم با تموم شواهد مجرمانه‌ش. از اونجایی هم که آمبرلا، آدمای زیادی رو از این شهر، زیر دستش گرفته، هیچکی دوست نداره تا از این قضیه سخنی به میون بیاد.",
                "dir": "right"
              },
              {
                "para": "به نظر هم که دیگه انتخابی ندارم.",
                "dir": "right"
              },
              {
                "para": "۱۷ اوت",
                "dir": "right"
              },
              {
                "para": "مشغول دریافت گزارشای محلی‌ای هستیم که از حضور تصادفی هیولاهای عجیب‌وغریب، تو سرتاسر شهر خبر می‌ده. این باید کارِ آمبرلا باشه.",
                "dir": "right"
              },
              {
                "para": "۲۴ اوت",
                "dir": "right"
              },
              {
                "para": "با کمک جیل و بری اما، آخرش به طلاعات کلیدی این پرونده دست پیدا کردم. آمبرلا تحقیقات روی ویروس جدیدِ جی رو شروع کرده، که یه شکل متفاوت از ویروس تی‌ـه. قد کافی آسیب نزده بودن مگه؟!",
                "dir": "right"
              },
              {
                "para": "ما صحبت‌هامونو کردیم، و تصمیم بر این شد تا طی یه پرواز به مقر اصلی آمبرلا توی اروپا بریم. درباره‌ی این سفر به خواهرم هیچی نمی‌گم، چون گفتنش می‌تونه اونو تو دردسر بندازه.",
                "dir": "right"
              },
              {
                "para": "خواهش می‌کنم منو ببخش کلیر.",
                "dir": "right"
              }
            ]
          },
          {
            "id": 3,
            "src": require('../assets/img/re2/files/mail-to-chris/mail-to-chris.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-2/files#!mail-to-chris",
            "location": [
              {
                "txt": "Location (Claire A+B)",
                "src": require('../assets/img/re2/files/mail-to-chris/location/mail-to-chris-location.webp'),
                "map": require('../assets/img/re2/files/mail-to-chris/map/mail-to-chris-map.png'),
                "src_source_link": "https://residentevil.fandom.com/wiki/Mail_to_Chris",
                "src_source": "Resident Evil Wiki",
                "map_source_link": "https://www.evilresource.com/resident-evil-2/maps/police-station/police-station-2f/stars-office",
                "map_source": "Evil Resource",
              }
            ],
            "url": "mail-to-chris",
            "title": "Mail to Chris",
            "og_content":[
              {
                "para": "Mr. Chris Redfield",
                "dir": "left"
              },
              {
                 "para": "Raccoon City Police Dept.",
                "dir": "left"
              },
              {
                "para": "S.T.A.R.S. division",
                "dir": "left"
              },
              {
                "para": "As per your request, we have conducted our internal investigation and discovered the following information:",
                "dir": "left"
              },
              {
                "para": "1. Regarding the G-virus currently under development by Umbrella Inc.",
                "dir": "left"
              },
              {
                "para": "So far it is unconfirmed that the G-virus even exists. We're continuing with our investigation.",
                "dir": "left"
              },
              {
                "para": "2. Regarding Mr. Brian Irons, Chief of the Raccoon City Police Dept.",
                "dir": "left"
              },
              {
                "para": "Mr. Irons has allegedly received a large sum of funds in bribes from Umbrella Inc. over the last five years. He was apparently involved in the cover up of the mansion lab case along with several other incidents in which Umbrella appears to have direct involvement.",
                "dir": "left"
              },
              {
                "para": "Mr. Irons had been arrested under suspicion of rape on two separate counts during his years as a university student. He underwent psychiatric evaluation as a result of the charges but was released due to circumstantial evidence as well as his phenomenal academic standing.",
                "dir": "left"
              },
              {
                "para": "As such, extreme caution is advised when dealing with him.",
                "dir": "left"
              },
              {
                "para": "Jack Hamilton,",
                "dir": "left"
              },
              {
                "para": "Section Chief",
                "dir": "left"
              },
              {
                "para": "Internal Investigations",
                "dir": "left"
              },
              {
                "para": "United States Federal Police Department",
                "dir": "left"
              }
            ],
            "tr_content":[
              {
                "para": "آقای کریس ردفیلد",
                "dir": "right"
              },
              {
                "para": "اداره‌ی پلیس شهر راکون",
                "dir": "right"
              },
              {
                "para": "بخش استارز",
                "dir": "right"
              },
              {
                "para": "بنا به درخواست‌تان، تحقیقات داخلی خود را به انجام رساندیم، و به اطلاعات پیشِ رو دست پیدا کردیم:",
                "dir": "right"
              },
              {
                "para": "۱. در مورد ویروس جی که هم‌اکنون توسط آمبرلا در دست توسعه است",
                "dir": "right"
              },
              {
                "para": "تا به اکنون تایید نشده که آیا ویروس جی وجود دارد. اما ما به تحقیقات خود ادامه می‌دهیم.",
                "dir": "right"
              },
              {
                "para": "۲. راجع به جناب برایان آیرونز، رئیس کل اداره‌ی پلیس شهر راکون",
                "dir": "right"
              },
              {
                "para": "ادعا می‌شود که آقای آیرونز، طی پنج سال گذشته، مبلغ هنگفتی از بودجه‌ی آمبرلا را، در قالب رشوه، دریافت می‌کند. از قرار معلوم نیز او در لاپوشانیِ پرونده‌ی آزمایشگاه عمارت، و همچنین دیگر وقایعی که آمبرلا در آن مستقیما دست داشته، مشارکت می‌کند.",
                "dir": "right"
              },
              {
                "para": "آقای آیرونز به ظن تجاوز به دو نفر، طی سال‌های دانشجویی‌اش، دستگیر می‌شود. به دلیل اتهامات وارده اما، او تحت ارزیابی روانپزشک قرار می‌گیرد، ولی به واسطه‌ی شواهد ناکافی و جایگاه علمی شگفت‌انگیزش، آزاد می‌شود.",
                "dir": "right"
              },
              {
                "para": "از این رو، توصیه می‌شود تا هنگام رویارویی با وی، نهایت احتیاط را به کار گیرید.",
                "dir": "right"
              },
              {
                "para": "جک همیلتون",
                "dir": "right"
              },
              {
                "para": "رئیس بخش",
                "dir": "right"
              },
              {
                "para": "تحقیقات داخلی",
                "dir": "right"
              },
              {
                "para": "اداره‌ی پلیس فدرال ایاالات متحده‌ی آمریکا",
                "dir": "right"
              }
            ]
          },
          {
            "id": 4,
            "src": require('../assets/img/re2/files/operation-report-1/operation-report-1.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-2/files#!operation-report-1",
            "location": [
              {
                "txt": "Location (Leon A, Claire A)",
                "src": require('../assets/img/re2/files/operation-report-1/location/operation-report-1-location-a.webp'),
                "map": require('../assets/img/re2/files/operation-report-1/map/operation-report-1-map-a.png'),
                "src_source_link": "https://residentevil.fandom.com/wiki/Operation_report_1",
                "src_source": "Resident Evil Wiki",
                "map_source_link": "https://www.evilresource.com/resident-evil-2/maps/police-station/police-station-1f/operations-room",
                "map_source": "Evil Resource",
              },
              {
                "txt": "Location (Leon B, Claire B)",
                "src": require('../assets/img/re2/files/operation-report-1/location/operation-report-1-location-b.webp'),
                "map": require('../assets/img/re2/files/operation-report-1/map/operation-report-1-map-b.png'),
                "src_source_link": "https://residentevil.fandom.com/wiki/Operation_report_1",
                "src_source": "Resident Evil Wiki",
                "map_source_link": "https://www.evilresource.com/resident-evil-2/maps/police-station/police-station-1f/operations-room",
                "map_source": "Evil Resource",
              }
            ],
            "url": "operation-report-1",
            "title": "Operation Report 1",
            "og_content":[
              {
                "para": "- Operation Report -",
                "dir": "center"
              },
              {
                 "para": "September 26th",
                "dir": "right"
              },
              {
                "para": "The Raccoon Police Dept. was unexpectedly attacked by zombies. Many have been injured. Even more were killed. During the attack, our communications equipment was destroyed and we longer have contact with the outside.",
                "dir": "left"
              },
              {
                "para": "We have decided to carry out an operation with the intent of rescuing any possible survivors as well as to prevent this disaster from spreading beyond Raccoon City. The details of the operation are as follows:",
                "dir": "left"
              },
              {
                "para": "Security of armaments and ammunition.",
                "dir": "left"
              },
              {
                "para": "Chief Irons has voiced concern regarding the issue of terrorism due to a series of recent unresolved incidents. On the very day before the zombies' attack, he made the decision to relocate all weapons to scattered intervals throughout the building as a temporary measure to prevent their possible seizure. Unfortunately, this decision made it extremely difficult for us to locate all ammunition caches.",
                "dir": "left"
              },
              {
                "para": "It has become our top priority to recover these scattered munitions.",
                "dir": "left"
              },
              {
                "para": "As stated earlier, it will be extremely difficult to secure all the ammunition. However, a considerable supply still remains in the underground weapon storage. Unfortunately, the person in charge of the card key used to access the weapon storage is missing and we have been unable to locate the key. One of the breakers went down during the battle and the electronic locks are not functioning in certain areas. It has become a top priority to restore the power in the power room and secure those locks.",
                "dir": "left"
              },
              {
                "para": "Recorder: David Ford",
                "dir": "right"
              },
              {
                "para": "- Operation Report -",
                "dir": "center"
              },
              {
                "para": "September 27th",
                "dir": "right"
              },
              {
                "para": "1:00PM. The west barricade has been broken through and another exchange ensued. We sheltered the injured in the confiscation room on the first floor temporarily. Twelve more people were injured in the battle.",
                "dir": "left"
              },
              {
                "para": "Recorder: David Ford",
                "dir": "right"
              },
              {
                "para": "- Additional Report -",
                "dir": "center"
              },
              {
                "para": "Three additional people were killed following the sudden appearance of an as of yet unknown creature.",
                "dir": "left"
              },
              {
                "para": "This creature is identified by missing patches of skin and razor-like claws. However, its most distinguishing characteristic is its lance-like tongue, capable of piercing a human torso in an instant.",
                "dir": "left"
              },
              {
                "para": "Their numbers as well as their location remains unknown. We have tentatively named this creature the \"licker\" and are currently in the process of developing countermeasures to deal with this new threat.",
                "dir": "left"
              }
            ],
            "tr_content":[
              {
                "para": "- گزارش عملیات -",
                "dir": "center"
              },
              {
                "para": "۲۶ سپتامبر",
                "dir": "left"
              },
              {
                "para": "اداره‌ی پلیس شهر راکون به طور غیر منتظره‌ای مورد حمله‌ی زامبی‌ها قرار می‌گیره. این وسط خیلی‌ها زخمی می‌شن و بیشتر از اینا هم به قتل می‌رسن. طی این حمله تجهیزات ارتباطاتی‌مون می‌پوکه می‌ره و ارتباطمون با محیط بیرون قطع می‌شه.",
                "dir": "right"
              },
              {
                "para": "تصمیم بر این شد تا با هدف نجات حداکثری بازمانده‌ها و جلوگیری از گسترش این فاجعه از مرزهای راکون، یه عملیات رو با جزئیات زیر به انجام برسونیم:",
                "dir": "right"
              },
              {
                "para": "امنیت جنگ‌افزارها و مهمات",
                "dir": "right"
              },
              {
                "para": "ریس آیرونز به واسطه‌ی مجموعه‌ای از حوادث حل‌نشده، در مورد موضوع تروریسم، ابراز نگرانی می‌کنه. درست یک روز قبلِ حمله‌ی زامبی‌ها، اون تصمیم می‌گیره تا به عنوان اقدامی موقت برای جلوگیری از تصرف سلاح‌ها، اون‌ها رو به فواصل زمانی پراکنده، تو سرتاسر ساختمون، انتقال بده. بدبختانه ولی، این تصمیم باعث شد تا پیدا کردن تمامی انبارهای مهمات برای ما خیلی دشوار بشه.",
                "dir": "right"
              },
              {
                "para": "اولویت اول ما هم این شد تا به بازیابی این تسلیحاتِ پخش‌وپَلاشده بپردازیم.",
                "dir": "right"
              },
              {
                "para": "همونطور که قبلا هم گفته شد، ایمن‌سازیِ تمام مهمات قراره خیلی سخت باشه. با وجود این ولی، تو انبار زیرزمینی تسلیحات، هنوزم مقدار قابل توجهی تجهیزات داریم. ولی بدبختی اینجاست که شخصی که مسئول کلید کارتی مد نظر، برای باز کردن در انبار تسلیحات هست رو، گم کردیم و نشد کلید کارتی رو پیداش کنیم. طی این نبرد، یکی از مدارشکنا ترکید رفت، و قفلای الکترونیکی، توی یه سری محیط‌ها، کارشون رو درست انجام نمی‌دن. برگردوندن برق، توی اتاق مربوطه، به همراه ایمن‌سازی قفلا، اولویت اول ماس.",
                "dir": "right"
              },
              {
                "para": "ثبت‌وضبط: دیوید فورد",
                "dir": "left"
              },
              {
                "para": "- گزارش عملیات -",
                "dir": "center"
              },
              {
                "para": "۲۷ سپتامبر",
                "dir": "left"
              },
              {
                "para": "ساعت ۱۳:۰۰‌ـه؛ به سنگر غربی رخنه شده و به دنبالش، با یه جابجایی روبه‌روییم. به مجروحین موقتا تو طبقه‌ی اولِ اتاق مصادره، پناه داده شده. تو این مبارزه، دوازده نفر دیگه هم مجروح شدن.",
                "dir": "right"
              },
              {
                "para": "ثبت‌وضبط: دیوید فورد",
                "dir": "left"
              },
              {
                "para": "- گزارش تکمیلی -",
                "dir": "center"
              },
              {
                "para": "سه نفر دیگه به دنبال پیدایش ناگهانی یه موجود ناشناخته کشته شدن.",
                "dir": "right"
              },
              {
                "para": "این موجود به واسطه‌ی تیکه‌های پوست و چنگال‌های تیغه‌مانندش شناسایی می‌شه. اگرچه که بارزترین ویژگی‌ش، زبون نیزه‌مانندش‌ـه که می‌تونه تو یه چشم‌به‌هم‌زدن، نیم‌تنه‌ی انسان رو سوراخ کنه.",
                "dir": "right"
              },
              {
                "para": "تعداد و جاومکانش هم که نامشخصه. ما به صورت آزمایشی، اسمش رو گذاشتیم «لیکر»، و الآن هم مشغول اقدام متقابل با این تهدید جدیدیم.",
                "dir": "right"
              }
            ]
          },
          {
            "id": 5,
            "src": require('../assets/img/re2/files/memo-to-leon/memo-to-leon.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-2/files#!memo-to-leon",
            "location": [
              {
                "txt": "Location (Leon A+B, Claire A+B)",
                "src": require('../assets/img/re2/files/memo-to-leon/location/memo-to-leon-location.webp'),
                "map": require('../assets/img/re2/files/memo-to-leon/map/memo-to-leon-map.png'),
                "src_source_link": "https://residentevil.fandom.com/wiki/Memo_to_LEON",
                "src_source": "Resident Evil Wiki",
                "map_source_link": "https://www.evilresource.com/resident-evil-2/maps/police-station/police-station-1f/information-office",
                "map_source": "Evil Resource",
              }
            ],
            "url": "memo-to-leon",
            "title": "Memo to Leon",
            "og_content":[
              {
                "para": "To Leon S. Kennedy,",
                "dir": "left"
              },
              {
                 "para": "Congratulations on your assignment to the Raccoon City police department.",
                "dir": "left"
              },
              {
                "para": "We all look forward to having you as part of our team and promise to take good care of you.",
                "dir": "left"
              },
              {
                "para": "Welcome aboard!",
                "dir": "left"
              },
              {
                "para": "From all the guys at the R.P.D.",
                "dir": "left"
              }
            ],
            "tr_content":[
              {
                "para": "به لیان اس. کندی",
                "dir": "right"
              },
              {
                "para": "پیوستن‌ات به اداره‌ی پلیس شهر راکون رو تبریک می‌گیم.",
                "dir": "right"
              },
              {
                "para": "مشتاقانه منتظریم تا حضورت رو به عنوان بخشی از تیم‌مون شاهد باشیم، با تعهد به اینکه به خوبی ازت مراقبت کنیم.",
                "dir": "right"
              },
              {
                "para": "به جمع ما خوش اومدی!",
                "dir": "right"
              },
              {
                "para": "از طرف همه‌ی اعضای اداره‌ی پلیس شهر راکون",
                "dir": "right"
              }
            ]
          },
          {
            "id": 6,
            "src": require('../assets/img/re2/files/operation-report-2/operation-report-2.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-2/files#!operation-report-2",
            "location": [
              {
                "txt": "Location (Leon A+B, Claire A+B)",
                "src": require('../assets/img/re2/files/operation-report-2/location/operation-report-2-location.webp'),
                "map": require('../assets/img/re2/files/operation-report-2/map/operation-report-2-map.png'),
                "src_source_link": "https://residentevil.fandom.com/wiki/Operation_report_2",
                "src_source": "Resident Evil Wiki",
                "map_source_link": "https://www.evilresource.com/resident-evil-2/maps/police-station/police-station-1f/dark-room",
                "map_source": "Evil Resource",
              }
            ],
            "url": "operation-report-2",
            "title": "Operation Report 2",
            "og_content":[
              {
                "para": "- Operation Report -",
                "dir": "center"
              },
              {
                 "para": "September 28th",
                "dir": "right"
              },
              {
                "para": "Early morning 2:30AM. Zombies overran the operation room and another battle broke out. We lost four more people, including David.",
                "dir": "left"
              },
              {
                "para": "We're down to four people, including myself. We failed to secure the weapons cache and hope for our survival continues to diminish.",
                "dir": "left"
              },
              {
                "para": "We won't last much longer... We agreed upon a plan to escape through the sewer. There's a path leading from the precinct underground to the sewage disposal plant. We should be able to access the sewers through there. The only drawback is that there is now guarantee the sewage disposal plant is free of any possible dangers. We know our chances in the sewers are slim, but anything would be better than simply waiting here to die.",
                "dir": "left"
              },
              {
                "para": "In order to buy more time, we locked the only door leading to the underground, which is located in the eastern office. We left the key behind in the western office since it's unlikely that any of those creatures have the intelligence to find it and unlock the door.",
                "dir": "left"
              },
              {
                "para": "I pray that this operation report will be helpful to whoever may find it.",
                "dir": "left"
              },
              {
                "para": "Recorder: Elliot Edward",
                "dir": "right"
              }
            ],
            "tr_content":[
              {
                "para": "- گزارش عملیات -",
                "dir": "center"
              },
              {
                "para": "۲۸ سپتامبر",
                "dir": "left"
              },
              {
                "para": "صبح زوده، ساعت هم ۲:۳۰. زامبی‌ها توی اتاقِ عملیات، تاخت‌وتاز راه می‌ندازن و یه مبارزه‌ی دیگه رو رقم می‌زنن. ما هم چهار نفر دیگه رو از دست می‌دیم، از جمله دیوید رو.",
                "dir": "right"
              },
              {
                "para": "با احتساب من، همه‌ش شدیم چهار نفر. تو ایمن‌سازی انبار تسلیحات هم به شکست خوردیم و امیدمون برای بقا هم کمرنگ شده.",
                "dir": "right"
              },
              {
                "para": "بیشتر از این دووم نمیاریم... سرِ نقشه‌ی فرار از طریق فاضلاب هم توافق کردیم. یه مسیری از زیرزمین کلانتری هست که ما رو به کارخونه‌ی دفع فاضلاب می‌رسونه؛ و باید بتونیم به این واسطه، به فاضلاب دسترسی پیدا کنیم. اشکال کار ولی اینجاست که هیچ تضمینی نیست که اونجا هم خالی از خطرات احتمالی باشه. می‌دونیم که شانس کمی تو فاضلاب داریم، اما هر چی باشه بهتر از اینه که اینجا بشینیم و منتظر مرگ بمونیم.",
                "dir": "right"
              },
              {
                "para": "برای اینکه وقت بیشتری رو بخریم، ما تنها درِ منتهی به زیرزمین، واقع تو دفتر شرقی رو، قفل کردیم. کلید هم گذاشتیم توی دفتر غربی، و بعیده که این موجودات اونقدر هوشیار باشن تا کلید رو برای باز کردن در، پیدا کنن.",
                "dir": "right"
              },
              {
                "para": "دعا می‌کنم این گزارش از عملیات به درد هر کی که پیداش می‌کنه بخوره.",
                "dir": "right"
              },
              {
                "para": "ثبت‌وضبط: الیوت ادوارد",
                "dir": "left"
              }
            ]
          },
          {
            "id": 7,
            "src": require('../assets/img/re2/files/chief-s-diary/chief-s-diary.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-2/files#!chiefs-diary",
            "location": [
              {
                "txt": "Location (Leon B, Claire A+B)",
                "src": require('../assets/img/re2/files/chief-s-diary/location/chief-s-diary-location.webp'),
                "map": require('../assets/img/re2/files/chief-s-diary/map/chief-s-diary-map.png'),
                "src_source_link": "https://residentevil.fandom.com/wiki/Chief%27s_diary",
                "src_source": "Resident Evil Wiki",
                "map_source_link": "https://www.evilresource.com/resident-evil-2/maps/police-station/police-station-2f/chief-irons-office",
                "map_source": "Evil Resource",
              }
            ],
            "url": "chief-s-diary",
            "title": "Chief's Diary",
            "og_content":[
              {
                "para": "September 23rd",
                "dir": "left"
              },
              {
                 "para": "It's all over. Those imbeciles from Umbrella have finally done it... Despite all their promises, they've ruined my town. Soon the streets will be infested with zombies. I'm beginning to think that I may be infected myself. I'll kill everyone in town if this turns out to be true!!!",
                "dir": "left"
              },
              {
                "para": "September 24th",
                "dir": "left"
              },
              {
                "para": "I was successful in spreading confusion among the police as planned. I've made sure that no one from the outside will come to help.",
                "dir": "left"
              },
              {
                "para": "With the delays in police actions, no one will have the chance to escape my city alive. I've seen to it personally that all escape routes from inside the precinct have been cut off as well.",
                "dir": "left"
              },
              {
                "para": "There are several survivors still attempting to escape through the lower levels, but I'll make sure no one gets out.",
                "dir": "left"
              },
              {
                "para": "September 26th",
                "dir": "left"
              },
              {
                "para": "I've had a change of heart about the remaining survivors inside the precinct. I've decided to hunt them down myself.",
                "dir": "left"
              },
              {
                "para": "I shot Ed in the back through the heart less than an hour ago. I watched him writhe in pain upon the floor in a pool of his own blood. The expression on his face was positively exquisite. He died with his eyes wide open, staring up at me. It was beautiful.",
                "dir": "left"
              },
              {
                "para": "I wonder if the mayor's daughter is still alive? I let her escape so I could enjoy hunting her down later...",
                "dir": "left"
              },
              {
                "para": "I'm going to enjoy my new trophy. Yes, frozen forever in the pose I choose to give her.",
                "dir": "left"
              }
            ],
            "tr_content":[
              {
                "para": "۲۳ سپتامبر",
                "dir": "right"
              },
              {
                "para": "دیگه تموم شد. احمقای آمبرلا بالاخره کارشون رو کردن. علی‌رغم تعهدات‌شون، شهر منو به فنا دادن. به زودی زامبی‌ها به خیابونا حمله‌ور می‌شن. دارم به این فکر می‌کنم که نکنه منم آلوده شم. اگه این قضیه درست باشه، من یکی که همه‌ی آدمای تو شهرو به کشتن می‌دم!!!",
                "dir": "right"
              },
              {
                "para": "۲۴ سپتامبر",
                "dir": "right"
              },
              {
                "para": "طبق نقشه، با موفقیت بین پلیسا سردرگمی ایجاد کردم. مطمئن هم شدم که هیچکی قرار نیست به دادشون برسه.",
                "dir": "right"
              },
              {
                "para": "تاخیر تو امور پلیس، این شانسو به هیچ‌کس نمی‌ده که زنده از شهر بیرون بیاد. من حتی اطمینان خاطر دارم که راه‌های فرار از داخل کلانتری، از دسترس خارج شدن.",
                "dir": "right"
              },
              {
                "para": "هنوز چندتا بازمانده داریم که در تلاش برای فرار از طبقات زیرزمینی‌ان، اما من می‌خوام مطمئن بشم که هیچکی خروج نمی‌کنه.",
                "dir": "right"
              },
              {
                "para": "۲۶ سپتامبر",
                "dir": "right"
              },
              {
                "para": "نظرم راجع به تنها بازمانده‌های داخل کلانتری تغییر کرد و تصمیم گرفتم خودم گیرشون بیارم.",
                "dir": "right"
              },
              {
                "para": "یه ساعت نمی‌شه که از پشت به قلبِ اِد شلیک کردم. از درد روی زمین، توی حوضی از خون خودش، می‌پیچید. حالت چهره‌ش ولی پر از حس بود. و با چشمای بازی که به من خیره شده بود مُرد. زیبایی یعنی این.",
                "dir": "right"
              },
              {
                "para": "برام سواله که هنوز دختر شهردار زنده‌ست یا نه؟ من که گذاشتم فرار کنه، تا بعد، گیر بندازمش و لذت ببرم...",
                "dir": "right"
              },
              {
                "para": "با این یادگاری جدید قراره به خودم حالی بدم. صد البته، بصورت یخ‌زده، تو حالتی که قراره بهش تقدیم کنم.",
                "dir": "right"
              }
            ]
          },
          {
            "id": 8,
            "src": require('../assets/img/re2/files/film-a/film-a.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-2/files#!film-a",
            "location": [
              {
                "txt": "Location (Leon A, Claire A)",
                "src": require('../assets/img/re2/files/film-a/location/film-a-location.webp'),
                "map": require('../assets/img/re2/files/film-a/map/film-a-map.png'),
                "src_source_link": "https://residentevil.fandom.com/wiki/Film_A",
                "src_source": "Resident Evil Wiki",
                "map_source_link": "https://www.evilresource.com/resident-evil-2/maps/police-station/police-station-1f/evidence-room",
                "map_source": "Evil Resource",
              }
            ],
            "url": "film-a",
            "title": "Film A",
            "og_content":[
              {
                "para": "Code G Human Body Experiment",
                "dir": "center"
              },
              {
                 "para": "9/15 15:24",
                "dir": "center"
              }
            ],
            "tr_content":[
              {
                "para": "رمز جی، آزمایش بر روی بدن انسان",
                "dir": "center"
              },
              {
                "para": "۱۵ سپتامبر، ۱۵:۲۴",
                "dir": "center"
              }
            ]
          },
          {
            "id": 9,
            "src": require('../assets/img/re2/files/film-b/film-b.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-2/files#!film-b",
            "location": [
              {
                "txt": "Location (Leon A, Claire A)",
                "src": require('../assets/img/re2/files/film-b/location/film-b-location-a.webp'),
                "map": require('../assets/img/re2/files/film-b/map/film-b-map-a.png'),
                "src_source_link": "https://residentevil.fandom.com/wiki/Film_B",
                "src_source": "Resident Evil Wiki",
                "map_source_link": "https://www.evilresource.com/resident-evil-2/maps/police-station/police-station-1f/press-room",
                "map_source": "Evil Resource",
              },
              {
                "txt": "Location (Leon B, Claire B)",
                "src": require('../assets/img/re2/files/film-b/location/film-b-location-b.webp'),
                "map": require('../assets/img/re2/files/film-b/map/film-b-map-b.png'),
                "src_source_link": "https://residentevil.fandom.com/wiki/Film_B",
                "src_source": "Resident Evil Wiki",
                "map_source_link": "https://www.evilresource.com/resident-evil-2/maps/police-station/police-station-1f/evidence-room",
                "map_source": "Evil Resource",
              },
            ],
            "url": "film-b",
            "title": "Film B",
            "og_content":[
              {
                "para": "Pictured in front of the Arukas tailor.",
                "dir": "left"
              },
              {
                "para": "Regressed into a zombie within two hours.",
                "dir": "left"
              },
              {
                "para": "Subject repeatedly complained about severe agitation of the epidermis in addition to feelings of nausea.",
                "dir": "left"
              },
              {
                "para": "This happened up to the moment he lost conscience.",
                "dir": "left"
              },
              {
                "para": "Picture by R.Lambert",
                "dir": "right"
              }
            ],
            "tr_content":[
              {
                "para": "تصویر از روبه‌روی خیاطی آروکاس‌ـه.",
                "dir": "right"
              },
              {
                "para": "طرف ظرف دو ساعت تبدیل به زامبی شد.",
                "dir": "right"
              },
              {
                "para": "سوژه مرتبا از تحریک شدیدِ پوستی به همراه حالت تهوع شکایت می‌کرد.",
                "dir": "right"
              },
              {
                "para": "قضیه مال قبل از دست دادن وجدانش‌ـه.",
                "dir": "right"
              },
              {
                "para": "تصویر ارسالی از ر.لمبرت",
                "dir": "left"
              }
            ]
          },
          {
            "id": 10,
            "src": require('../assets/img/re2/files/film-c/film-c.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-2/files#!film-c",
            "location": [
              {
                "txt": "Location (Leon B, Claire B)",
                "src": require('../assets/img/re2/files/film-c/location/film-c-location.webp'),
                "map": require('../assets/img/re2/files/film-c/map/film-c-map.png'),
                "src_source_link": "https://residentevil.fandom.com/wiki/Film_C",
                "src_source": "Resident Evil Wiki",
                "map_source_link": "https://www.evilresource.com/resident-evil-2/maps/police-station/police-station-b1/cell-block-entrance",
                "map_source": "Evil Resource",
              }
            ],
            "url": "film-c",
            "title": "Film C",
            "og_content":[
              {
                "para": "Development Code: T-103",
                "dir": "left"
              },
              {
                "para": "Due to accelerated metabolism relative to the earlier 00 series, this subject possesses exemplary regenerative capabilities.",
                "dir": "left"
              },
              {
                "para": "PH-X016 File Data",
                "dir": "right"
              }
            ],
            "tr_content":[
              {
                "para": "کد توسعه: تی-۱۰۳",
                "dir": "right"
              },
              {
                "para": "بخاطر متابولیسم شتاب‌یافته، در مقایسه با سری ۰۰، این سوژه توانایی‌های نوزاییِ مثال‌زدنی‌ای داره.",
                "dir": "right"
              },
              {
                "para": "داده‌های مربوط به فایلِ پی‌اچ-اکس۰۱۶",
                "dir": "left"
              }
            ]
          },
          {
            "id": 11,
            "src": require('../assets/img/re2/files/patrol-report/patrol-report.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-2/files#!patrol-report",
            "location": [
              {
                "txt": "Location (Leon A+B, Claire A+B)",
                "src": require('../assets/img/re2/files/patrol-report/location/patrol-report-location.webp'),
                "map": require('../assets/img/re2/files/patrol-report/map/patrol-report-map.png'),
                "src_source_link": "https://residentevil.fandom.com/wiki/Patrol_report",
                "src_source": "Resident Evil Wiki",
                "map_source_link": "https://www.evilresource.com/resident-evil-2/maps/police-station/police-station-1f/file-storage",
                "map_source": "Evil Resource",
              }
            ],
            "url": "patrol-report",
            "title": "Patrol Report",
            "og_content":[
              {
                "para": "-Patrol Report-",
                "dir": "center"
              },
              {
                "para": "September 20th 9:30 PM",
                "dir": "center"
              },
              {
                "para": "Reporter: Sgt. Neil Carlsen",
                "dir": "center"
              },
              {
                "para": "We received a report of a suspicious individual skulking around the sewers in the outskirts of Raccoon City. I searched the area and located the individual, but he ran away before I was able to question him.",
                "dir": "left"
              },
              {
                "para": "I recovered the following items:",
                "dir": "left"
              },
              {
                "para": "A small amount of C4 plastic explosive.",
                "dir": "left"
              },
              {
                "para": "An electronic detonator.",
                "dir": "left"
              },
              {
                "para": "9x19 parabellum rounds.",
                "dir": "left"
              },
              {
                "para": "Infrared scope [broken].",
                "dir": "left"
              },
              {
                "para": "End of report.",
                "dir": "right"
              }
            ],
            "tr_content":[
              {
                "para": "- گزارش گشت -",
                "dir": "center"
              },
              {
                "para": "۲۰ سپتامبر، ۲۱:۳۰",
                "dir": "center"
              },
              {
                "para": "گزارش: گورهبان نیل کارلسن",
                "dir": "center"
              },
              {
                "para": "ما گزارشی رو دریافت کردیم که حاکی از پرسه‌زدن یه شخص مشکوک تو حوالی فاضلابِ حومه‌ی شهر راکونه. محیط رو هم بازرسی کردم و شخص مورد نظر رو مکان‌یابی، اما قبل اینکه بتونم ازش سوالی بپرسم، فلنگ رو بست رفت.",
                "dir": "right"
              },
              {
                "para": "من موارد زیر رو بازیابی کردم:",
                "dir": "right"
              },
              {
                "para": "یه مقدار ماده‌ی منفجره‌ی پلاستیکی سی۴",
                "dir": "right"
              },
              {
                "para": "منفجرکننده‌ی الکترونیکی",
                "dir": "right"
              },
              {
                "para": "گلوله‌های ۹ در ۱۹ پارابلوم",
                "dir": "right"
              },
              {
                "para": "دوربینِ روی اسلحه‌ی مادون قرمز (خراب)",
                "dir": "right"
              },
              {
                "para": "پایان گزارش",
                "dir": "left"
              }
            ]
          },
          {
            "id": 12,
            "src": require('../assets/img/re2/files/secretary-s-diary-a/secretary-s-diary-a.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-2/files#!secretarys-diary-a",
            "location": [
              {
                "txt": "Location (Leon A+B, Claire A+B)",
                "src": require('../assets/img/re2/files/secretary-s-diary-a/location/secretary-s-diary-a-location.webp'),
                "map": require('../assets/img/re2/files/secretary-s-diary-a/map/secretary-s-diary-a-map.png'),
                "src_source_link": "https://residentevil.fandom.com/wiki/Secretary%27s_diary_A",
                "src_source": "Resident Evil Wiki",
                "map_source_link": "https://www.evilresource.com/resident-evil-2/maps/police-station/police-station-2f/waiting-room-2f",
                "map_source": "Evil Resource",
              }
            ],
            "url": "secretary-s-diary-a",
            "title": "Secretary's Diary A",
            "og_content":[
              {
                "para": "April 6th",
                "dir": "left"
              },
              {
                "para": "I accidentally moved one of the stone statues on the second floor when I leaned against it. When the chief found out about it, he was furious. I swear the guy nearly bit my head off, screaming at me never to touch the statue again. If it's so important, then maybe he shouldn't have put it out in the open like that...",
                "dir": "left"
              },
              {
                "para": "April 7th",
                "dir": "left"
              },
              {
                "para": "I heard that all the art pieces from the chief's collection are rare items, literally worth hundreds of thousand of dollars. I don't know which is the bigger mystery: where he finds those tacky things, or where he's getting the money to pay for them.",
                "dir": "left"
              },
              {
                "para": "May 10th",
                "dir": "left"
              },
              {
                "para": "I wasn't surprised to see the chief come in today with yet another large picture frame in his hands. This time it was a really disturbing painting depicting a nude person being hanged. I was appalled by the expression on the chief's face as he leered at that painting.",
                "dir": "left"
              },
              {
                "para": "Why anyone would consider something like that to be a work of art is beyond my comprehension...",
                "dir": "left"
              }
            ],
            "tr_content":[
              {
                "para": "۶ آوریل",
                "dir": "right"
              },
              {
                "para": "به یکی از مجسمه‌های طبقه‌ی دوم که تکیه داده بودم، اتفاقی جابجا شد رفت. وقتی هم که رئیس کل فهمید، از کوره در رفت. قسم می‌خورم که نزدیک بود الم‌شنگه راه بندازه، سرم داد می‌زد که دیگه نباید به مجسمه دست بزنی. اگه قضیه اینقد مهمه، پس نباید در معرض عموم می‌ذاشتش...",
                "dir": "right"
              },
              {
                "para": "۷ آوریل",
                "dir": "right"
              },
              {
                "para": "به گوشم خورده که آثار هنریِ کلکسیون رئیس کل، همگی اقلام کمیابی‌ان، که به معنای واقعی، صدها یا هزاران دلار ارزش مالی دارن. من که نفهمیدم کدوم یکی معمای بزرگتری‌ـه: اینکه از کجا این چیزای خزوخیل رو پیدا می‌کنه، یا اینکه از کجا پولِ پرداخت اینا رو میاره.",
                "dir": "right"
              },
              {
                "para": "۱۰ مه",
                "dir": "right"
              },
              {
                "para": "از اینکه دیدم رئیس کل یه روز دیگه با یه قاب عکس بزرگ از راه میاد، تعجب نکردم. این بار اما تصویر، تصویرِ یه شخص برهنه بود که به دار آوریخته شده. از اونجایی هم که چشم‌چرونی‌ش به تصویر رو دیدم، از حالت چهره‌ای که به خودش گرفته بود بهتم زد.",
                "dir": "right"
              },
              {
                "para": "اینکه چرا یکی باید اینو اثر هنری بدونه، از درک من خارجه...",
                "dir": "right"
              }
            ]
          },
          {
            "id": 13,
            "src": require('../assets/img/re2/files/secretary-s-diary-b/secretary-s-diary-b.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-2/files#!secretarys-diary-b",
            "location": [
              {
                "txt": "Location (Leon B, Claire A+B)",
                "src": require('../assets/img/re2/files/secretary-s-diary-b/location/secretary-s-diary-b-location.webp'),
                "map": require('../assets/img/re2/files/secretary-s-diary-b/map/secretary-s-diary-b-map.png'),
                "src_source_link": "https://residentevil.fandom.com/wiki/Secretary%27s_diary_B",
                "src_source": "Resident Evil Wiki",
                "map_source_link": "https://www.evilresource.com/resident-evil-2/maps/police-station/police-station-2f/taxidermy-display-room",
                "map_source": "Evil Resource",
              }
            ],
            "url": "secretary-s-diary-b",
            "title": "Secretary's Diary B",
            "og_content":[
              {
                "para": "June 8th",
                "dir": "left"
              },
              {
                "para": "As I was straightening up the chief's room, he burst through the door with a furious look on his face. It's only been 2 months since I've started working here, but that was the second time I've seen him like this. The last time was when I bumped into that statue, only this time he looked even more agitated than ever. I seriously thought for a moment that he was going to hurt me.",
                "dir": "left"
              },
              {
                "para": "June 15th",
                "dir": "left"
              },
              {
                "para": "I finally discovered what the chief has been hiding all along... If he finds out that I know, my life will be in serious danger.",
                "dir": "left"
              },
              {
                "para": "It's getting late already. I'm just going to have to take this a day at a time...",
                "dir": "left"
              }
            ],
            "tr_content":[
              {
                "para": "۸ ژوئن",
                "dir": "right"
              },
              {
                "para": "داشتم اتاق رئیس کل رو تمیز می‌کردم که یهو با یه چهره‌ی خشمگین، سروکله‌ش پیدا شد. همه‌ش هم ۲ ماهه که اینجا شروع به کار کردم، و این دفعه‌ی دومی‌ـه که اونو اینجوری می‌بینم. دفعه‌ی قبلی، موقعی بود که به مجسمه خورده بودم؛ اینبار ولی اون تحریک‌پذیرتر از همیشه به نظر می‌رسید. یه لحظه، به جد فکر کردم قراره بهم آسیب بزنه.",
                "dir": "right"
              },
              {
                "para": "۱۵ ژوئن",
                "dir": "right"
              },
              {
                "para": "آخرسر فهمیدم که رئیس کل از اول داشت چه چیزی رو پنهان می‌کرد... اگه متوجه بشه که منم باخبرم، زندگی‌م تو خطر میفته.",
                "dir": "right"
              },
              {
                "para": "دیگه دیر شده. من که می‌رم به زندگی‌م برسم...",
                "dir": "right"
              }
            ]
          },
          {
            "id": 14,
            "src": require('../assets/img/re2/files/watchman-s-diary/watchman-s-diary.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-2/files#!watchmans-diary",
            "location": [
              {
                "txt": "Location (Leon A+B, Claire A+B)",
                "src": require('../assets/img/re2/files/watchman-s-diary/location/watchman-s-diary-location.webp'),
                "map": require('../assets/img/re2/files/watchman-s-diary/map/watchman-s-diary-map.png'),
                "src_source_link": "https://residentevil.fandom.com/wiki/Watchman%27s_diary",
                "src_source": "Resident Evil Wiki",
                "map_source_link": "https://www.evilresource.com/resident-evil-2/maps/police-station/police-station-1f/watchmans-room",
                "map_source": "Evil Resource",
              }
            ],
            "url": "watchman-s-diary",
            "title": "Watchman's Diary",
            "og_content":[
              {
                "para": "August 11th",
                "dir": "left"
              },
              {
                "para": "I finally had the chance to see blue skies for the first time in ages, but it did little to lift my spirits. I was reprimanded by the chief for neglecting my duties while I was up on the clock tower.",
                "dir": "left"
              },
              {
                "para": "There's only one thing I still don't understand: the chief seemed to be more concerned about the fact that I was up on the tower rather than that I was neglecting my duties.",
                "dir": "left"
              },
              {
                "para": "Why was access to the tower prohibited in the first place anyway?",
                "dir": "left"
              },
              {
                "para": "September 5th",
                "dir": "left"
              },
              {
                "para": "I recently talked to the old man who works in the scrap yard out back. His name is Thomas. He's a quiet man and really seems to enjoy chess. He even went so far as to design a special key and lock engraved with chess pieces on them for one of the doors in the disposal yard.",
                "dir": "left"
              },
              {
                "para": "We made plans to play chess tomorrow night. I can't help but wonder how good he is. One thing that's been bothering me about him is the way that he's always scratching himself... Does he have some sort of skin disease or is he just rude?",
                "dir": "left"
              },
              {
                "para": "September 9th",
                "dir": "left"
              },
              {
                "para": "Thomas was a much better player than I has imagined. I used to think of myself as a fairly decent player, but he did a pretty good job of humbling me.",
                "dir": "left"
              },
              {
                "para": "About the only thing I imagine that could match his skills in chess is his appetite. All the guy did was talk about food throughout the entire game. He sounded fairly healthy, but he didn't look quite right...",
                "dir": "left"
              },
              {
                "para": "I wonder if he's okay.",
                "dir": "left"
              },
              {
                "para": "September 12th",
                "dir": "left"
              },
              {
                "para": "I was supposed to play another game of chess with Thomas, but we had to cancel because he hasn't been feeling too well.",
                "dir": "left"
              },
              {
                "para": "He stopped by to see me, but I told him to go back and rest since he literally looked like the walking dead.",
                "dir": "left"
              },
              {
                "para": "He insisted he was just fine, but I could tell he was really having problems.",
                "dir": "left"
              },
              {
                "para": "Come to think of it, I haven't been feeling too good myself lately...",
                "dir": "left"
              }
            ],
            "tr_content":[
              {
                "para": "۱۱ اوت",
                "dir": "right"
              },
              {
                "para": "بالاخره این شانس رو پیدا کردم تا رنگ آسمون رو بعد مدت‌ها، برای اولین بار ببینم، هر چند که این قضیه حس‌وحالی برام ایجاد نکرد. وقتی هم که بالای برج ساعت بودم، بخاطر سرباززدن از وظایفم، توسط رئیس کل، توبیخ شدم.",
                "dir": "right"
              },
              {
                "para": "فقط یه چیزی هست که مطمئن نیستم: رئیس کل به نظر بیشتر نگران این قضیه‌ست که من رفتم بالای برج ساعت، نه اینکه وظایفم رو ندید گرفتم.",
                "dir": "right"
              },
              {
                "para": "بگذریم، ولی چرا از همون اول، دسترسی به برج ممنوع بود؟",
                "dir": "right"
              },
              {
                "para": "۵ سپتامبر",
                "dir": "right"
              },
              {
                "para": "تازگی‌ها با اون پیرمرده که تو قبرستونِ دورافتاده‌ی ماشینا کار می‌کرد، صحبت داشتم. اسمش توماسه. بی‌سروصداس و گویا که از شطرنج، لذت می‌بره. اون تا اونجا پیش می‌ره که برای یکی از دَرای محوطه‌ی دفع زباله، کلید و قفل مخصوصی رو طراحی می‌کنه که روشون مهره‌های شطرنج حک شده.",
                "dir": "right"
              },
              {
                "para": "برنامه ریختیم که فردا شب بریم شطرنج. فقط از بازیِ خوبش دهنم وا مونده. یه چیز که منو تو این مدت آزارم داد ولی اینه که طرف همیشه خودشو می‌خارونه. آیا اون یه نوع بیماری پوستی داره، یا فقط داره پرروگری می‌کنه؟",
                "dir": "right"
              },
              {
                "para": "۹ سپتامبر",
                "dir": "right"
              },
              {
                "para": "توماس تو بازی بهتر از چیزی بود که متصور بودم. قبلاها پیش خودم فکر می‌کردم که بازیکن نسبتا قابل قبولی‌ام، اما اون کارش تو تنزل سطح من حرف نداشت.",
                "dir": "right"
              },
              {
                "para": "تنها چیزی هم که با مهارت‌های شطرنج‌اش جور در میاد، فکر می‌کنم اشتهاش باشه. کل کاری هم که می‌کرد، حرف‌زدن درباره‌ی غذا تو کل بازی‌مون بود. اون به نظر سالم بود، اما بوش نمیومد که اینطور باشه...",
                "dir": "right"
              },
              {
                "para": "موندم که روبه‌راهه یا نه.",
                "dir": "right"
              },
              {
                "para": "۱۲ سپتامبر",
                "dir": "right"
              },
              {
                "para": "قرار بود یه دست شطرنجِ دیگه با توماس داشته باشیم، ولی مجبور شدیم بیخیال‌اش بشیم، چون اون حال خوشی نداشت.",
                "dir": "right"
              },
              {
                "para": "یه نگاه اجمالی هم بهم انداخت، اما بهش گفتم که برگرده و استراحت کنه، چون رسما شبیه یه مرده‌ی زنده شده بود.",
                "dir": "right"
              },
              {
                "para": "اصرار داشت که حالش خوبه، اما به جرات می‌تونم بگم که کلی مشکل داشت.",
                "dir": "right"
              },
              {
                "para": "الآن که فکرشو می‌کنم، این اواخر خودمم حس خوبی نداشتم...",
                "dir": "right"
              },
            ]
          },
          {
            "id": 15,
            "src": require('../assets/img/re2/files/mail-to-the-chief/mail-to-the-chief.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-2/files#!mail-to-the-chief",
            "location": [
              {
                "txt": "Location (Leon A+B)",
                "src": require('../assets/img/re2/files/mail-to-the-chief/location/mail-to-the-chief-location-leon.webp'),
                "map": require('../assets/img/re2/files/mail-to-the-chief/map/mail-to-the-chief-map-leon.png'),
                "src_source_link": "https://residentevil.fandom.com/wiki/Mail_to_the_chief",
                "src_source": "Resident Evil Wiki",
                "map_source_link": "https://www.evilresource.com/resident-evil-2/maps/police-station/police-station-b1/cells",
                "map_source": "Evil Resource",
              },
              {
                "txt": "Location (Claire A+B)",
                "src": require('../assets/img/re2/files/mail-to-the-chief/location/mail-to-the-chief-location-claire.webp'),
                "map": require('../assets/img/re2/files/mail-to-the-chief/map/mail-to-the-chief-map-claire.png'),
                "src_source_link": "https://residentevil.fandom.com/wiki/Mail_to_the_chief",
                "src_source": "Resident Evil Wiki",
                "map_source_link": "https://www.evilresource.com/resident-evil-2/maps/police-station/police-station-2f/chief-irons-office",
                "map_source": "Evil Resource",
              }
            ],
            "url": "mail-to-the-chief",
            "title": "Mail to the Chief",
            "og_content":[
              {
                "para": "To: Mr. Brian Irons, Chief of the Raccoon City Police Dept.",
                "dir": "left"
              },
              {
                "para": "We have lost the mansion lab facility due to the renegade operative, Albert Wesker.",
                "dir": "left"
              },
              {
                "para": "Fortunately, his interference will have no lasting effects upon our continued virus research.",
                "dir": "left"
              },
              {
                "para": "Our only present concern is the presence of the remaining S.T.A.R.S. members: Redfield, Valentine, Burton, Chambers and Vickers.",
                "dir": "left"
              },
              {
                "para": "If it comes to light that S.T.A.R.S. have any evidence as to the activities of our research, dispose of them in a way that would appear to be purely accidental. Continue to monitor their progress and make certain their knowledge does not go public.",
                "dir": "left"
              },
              {
                "para": "Annette will continue to be your contact throughout this affair.",
                "dir": "left"
              },
              {
                "para": "William Birkin",
                "dir": "right"
              },
              {
                "para": "To: Mr. Brian Irons, Chief of the Raccoon City Police Dept.",
                "dir": "left"
              },
              {
                "para": "I have deposited the amount of US $10,000 to the account for your services this term as per our agreement.",
                "dir": "left"
              },
              {
                "para": "The development of the G-virus scheduled to replace the T-virus, is near completion. Once completed, I am certain that I will be appointed to be a member of the executive board for Umbrella Inc.",
                "dir": "left"
              },
              {
                "para": "It is imperative that we proceed with extreme caution. Redfield and the remaining S.T.A.R.S. members are still attempting to uncover information on the project. Continue to monitor their activities and block all attempts to investigate the underground research facilities.",
                "dir": "left"
              },
              {
                "para": "William Birkin",
                "dir": "right"
              },
              {
                "para": "To: Mr. Brian Irons, Chief of the Raccoon City Police Dept.",
                "dir": "left"
              },
              {
                "para": "We have a problem. I have received information informing me that Umbrella HQ has sent spies to recover my research on the G-virus. There are an unknown number of agents involved. They must not be allowed to take this project away from me as it represents my entire life's work.",
                "dir": "left"
              },
              {
                "para": "Search the city thoroughly for any suspicious persons. Detain any such individuals by whatever means deemed necessary and contact me immediately through Annette. With these precautions, any possible threat should be eliminated.",
                "dir": "left"
              },
              {
                "para": "I will not allow anyone to steal my work on the G-virus. Not even Umbrella...",
                "dir": "left"
              },
              {
                "para": "William Birkin",
                "dir": "right"
              }
            ],
            "tr_content":[
              {
                "para": "گیرنده: جناب برایان آیرونز، رئیس کل اداره‌ی پلیس شهر راکون",
                "dir": "right"
              },
              {
                "para": "به واسطه‌ی جاسوس خائن، آلبرت وسکر، تاسیسات آزمایشگاهی عمارت را از دست دادیم.",
                "dir": "right"
              },
              {
                "para": "خوشبختانه اما، مداخله‌ی او، تاثیر ماندگاری بر تحقیقات ادامه‌دارِ ویروس ما نخواهد داشت.",
                "dir": "right"
              },
              {
                "para": "تنها نگرانی ما، حضور اعضای باقی‌مانده‌ی استارز است: ردفیلد، ولنتاین، برتن، چمبرز، و ویکرز.",
                "dir": "right"
              },
              {
                "para": "اگر استارز، شواهدی از فعالیت‌های تحقیقات ما در دست داشته باشد، جوری آن‌ها را حذف کنید که کاملا تصادفی به نظر برسد. بر روند کاری‌شان نظارت داشته باشید و اطمینان حاصل کنید که دانسته‌هایشان عمومی نمی‌شود.",
                "dir": "right"
              },
              {
                "para": "آنت به آچارفرانسه‌بودنش برای شما ادامه می‌دهد.",
                "dir": "right"
              },
              {
                "para": "ویلیام برکین",
                "dir": "left"
              },
              {
                "para": "گیرنده: جناب برایان آیرونز، رئیس کل اداره‌ی پلیس شهر راکون",
                "dir": "right"
              },
              {
                "para": "طبق توافق‌نامه، این بار ۱۰.۰۰۰ دلار، بابت خدمات‌تان به حساب واریز نمودم.",
                "dir": "right"
              },
              {
                "para": "توسعه‌ی ویروس جی که قرار است جایگزینی بر ویروس تی باشد، رو به اتمام است. به محض تکمیل، مطمئن هستم که به عنوان یکی از اعضای هیئت اجرایی آمبرلا منصوب می‌شوم.",
                "dir": "right"
              },
              {
                "para": "ضروری‌ست که با نهایت احتیاط پیش برویم. ردفیلد و دیگر اعضای استارز همچنان در تلاش برای روکردن اطلاعات پشت پروژه هستند. فعالیت‌هایشان را رصد کرده و از تمامی تلاش‌هایشان در جهت بررسی تاسیسات تحقیقاتی زیرزمینی، جلوگیری کنید.",
                "dir": "right"
              },
              {
                "para": "ویلیام برکین",
                "dir": "left"
              },
              {
                "para": "گیرنده: جناب برایان آیرونز، رئیس کل اداره‌ی پلیس شهر راکون",
                "dir": "right"
              },
              {
                "para": "مشکلی پیش آمده. اطلاعاتی مبنی بر این به دستم رسیده که مقر آمبرلا، در جهت بازپس‌گیریِ تحقیقات من در مورد ویروس جی، چندین جاسوس را اعزام نموده. صحبت از تعداد نامشخصی مامور است. آن‌ها نباید اجازه داشته باشند تا این پروژه را از من بگیرند، چرا که این پروژه، نمایانگر تمام زندگیِ کاری من است.",
                "dir": "right"
              },
              {
                "para": "جستجوی کامل در شهر را، به منظور یافتن افراد مشکوک، آغاز کنید. جلوی این افراد، با هر آن چیزی که لازم دانستید سد بکشید، و سپس بلافاصله از طریق آنت با من تماس بگیرید. با چنین پیش‌بینی‌هایی، تهدیدات احتمالی از بین خواهند رفت.",
                "dir": "right"
              },
              {
                "para": "به هیچ‌کس اجازه نمی‌دهم تا زحمتی که بر روی ویروس جی کشیده‌ام را بدزدد، حتی آمبرلا...",
                "dir": "right"
              },
              {
                "para": "ویلیام برکین",
                "dir": "left"
              }
            ]
          },
          {
            "id": 16,
            "src": require('../assets/img/re2/files/sewer-manager-fax/sewer-manager-fax.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-2/files#!sewer-manager-fax",
            "location": [
              {
                "txt": "Location (Leon A+B)",
                "map": require('../assets/img/re2/files/sewer-manager-fax/map/sewer-manager-fax-map-leon.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil-2/maps/raccoon-sewers/sewer-b1/control-room-2",
                "map_source": "Evil Resource",
              },
              {
                "txt": "Location (Claire A+B)",
                "src": require('../assets/img/re2/files/sewer-manager-fax/location/sewer-manager-fax-location-claire.webp'),
                "map": require('../assets/img/re2/files/sewer-manager-fax/map/sewer-manager-fax-map-claire.png'),
                "src_source_link": "https://residentevil.fandom.com/wiki/Sewer_manager_fax",
                "src_source": "Resident Evil Wiki",
                "map_source_link": "https://www.evilresource.com/resident-evil-2/maps/raccoon-sewers/sewer-b1/control-room-1",
                "map_source": "Evil Resource",
              }
            ],
            "url": "sewer-manager-fax",
            "title": "Sewer Manager Fax",
            "og_content":[
              {
                "para": "-User List of the Connecting Facility-",
                "dir": "center"
              },
              {
                "para": "On the first and third Wednesdays of the month, Angelica Margaret, chief of maintenance, will make use of the facilities. Be sure to reduce the moisture levels in the facility by activating the fan, as the equipment she will be using is susceptible to the effects of water vapors.",
                "dir": "left"
              },
              {
                "para": "On the 28th of every month, the chemical transporter Don Weller will use the facility. The chemicals he will be transporting are extremely volatile. Extreme caution should be observed throughout their transport.",
                "dir": "left"
              },
              {
                "para": "On the 6th and 16th of every month, police chief Brian Irons will visit the facility to attend the regular meeting that take place in the lab.",
                "dir": "left"
              },
              {
                "para": "On the fourth Friday of every other month, William Birkin will use the facility to conduct a training seminar for the Chicago branch of Umbrella Inc. As the probability of an attack upon William Birkin will be high, take every measure conceivable to guard his life.",
                "dir": "left"
              },
              {
                "para": "You will be informed of all other potential visitors and the times they will arrive as needed. Guide these individuals to their destination safely. We expect nothing but the best from you.",
                "dir": "left"
              },
              {
                "para": "Charles Coleman",
                "dir": "left"
              },
              {
                "para": "Secretary Chief",
                "dir": "left"
              },
              {
                "para": "Umbrella Headquarters",
                "dir": "left"
              }
            ],
            "tr_content":[
              {
                "para": "- فهرست تاسیسات اتصال -",
                "dir": "center"
              },
              {
                "para": "تو اولین و سومین چهارشنبه‌ی هر ماه، آنجلیکا مارگارت، رئیس بخش نگهداری، تاسیسات رو به کار می‌گیره. مطمئن شین که سطح رطوبت تاسیسات رو، با روشن‌کردنِ فن، کم می‌کنین، چون تجهیزاتی که اون استفاده می‌کنه تحت تاثیر بخار آبه.",
                "dir": "right"
              },
              {
                "para": "۲۸اُم هر ماه، انتقال‌دهنده‌ی شیمیایی، جناب دان ولر، می‌ره که از تاسیسات استفاده بکنه. مواد شیمیایی‌ای که اون حمل می‌کنه خیلی فرارن. و در طول حمل‌ونقل باید خیلی احتیاط بشه.",
                "dir": "right"
              },
              {
                "para": "تو ۶اُم و ۱۶اُم هر ماه، رئیس کل اداره‌ی پلیس، آقای برایان آیرونز، می‌ره به تاسیسات سر بزنه، برای حضور تو جلسه‌ی همیشگی‌ای که توی آزمایشگاه تشکیل می‌شه.",
                "dir": "right"
              },
              {
                "para": "تو چهارمین جمعه‌ی هر ماه، ویلیام برکین می‌ره سراغ تاسیسات، برای برگزاری یه سمینار آموزشیِ شعبه‌ی شیکاگوی آمبرلا. از اونجایی هم که احتمال حمله به ویلیام برکین زیاده، هر کاری برای محافظتش می‌شه انجام داد رو انجام بدین.",
                "dir": "right"
              },
              {
                "para": "اگه لازم بشه، از بقیه‌ی افراد بازدیدکننده، به همراه زمان ورودشون، مطلع می‌شین. این افرادو صحیح‌وسالم به سمت مقصد هدایت کنین. از شما، جز بهترینا، انتظار دیگه‌ای نمی‌ره.",
                "dir": "right"
              },
              {
                "para": "چارلز کلمن",
                "dir": "right"
              },
              {
                "para": "رئیس منشی",
                "dir": "right"
              },
              {
                "para": "مقر آمبرلا",
                "dir": "right"
              }
            ]
          },
          {
            "id": 17,
            "src": require('../assets/img/re2/files/sewer-manager-diary/sewer-manager-diary.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-2/files#!sewer-manager-diary",
            "location": [
              {
                "txt": "Location (Leon A+B, Claire A+B)",
                "src": require('../assets/img/re2/files/sewer-manager-diary/location/sewer-manager-diary-location.webp'),
                "map": require('../assets/img/re2/files/sewer-manager-diary/map/sewer-manager-diary-map.png'),
                "src_source_link": "https://residentevil.fandom.com/wiki/Sewer_manager_diary",
                "src_source": "Resident Evil Wiki",
                "map_source_link": "https://www.evilresource.com/resident-evil-2/maps/raccoon-sewers/sewer-b1/upper-walkway",
                "map_source": "Evil Resource",
              }
            ],
            "url": "sewer-manager-diary",
            "title": "Sewer Manager Diary",
            "og_content":[
              {
                "para": "June 28th",
                "dir": "left"
              },
              {
                "para": "It's been a while, but I saw Don today and we talked after completing our work. He told me he had been sick in bed until yesterday.",
                "dir": "left"
              },
              {
                "para": "It really doesn't come as much of a surprise given how long he's been working here.",
                "dir": "left"
              },
              {
                "para": "He was sweating like a horse and kept scratching his body while we were talking. I asked if he was hot, but he just looked at me funny.",
                "dir": "left"
              },
              {
                "para": "What's wrong with him anyway?",
                "dir": "left"
              },
              {
                "para": "July 7th",
                "dir": "left"
              },
              {
                "para": "Chief Irons has been visiting the lab quite often lately. I don't know what he's doing over there but he always looks grim.",
                "dir": "left"
              },
              {
                "para": "The expression on his face has been even more unsettling than usual...",
                "dir": "left"
              },
              {
                "para": "My guess is that it's because of Dr. Birkin's impossible requests. The chief has my sympathies though. After all he's done for the town, he doesn't deserve this.",
                "dir": "left"
              },
              {
                "para": "July 21st",
                "dir": "left"
              },
              {
                "para": "I rarely drink because I'm on the graveyard shift, but I don't suppose I have much to complain about it since this is how I make my living.",
                "dir": "left"
              },
              {
                "para": "August 16th",
                "dir": "left"
              },
              {
                "para": "Chief Irons came in late today, looking grimmer than his usual self. I tried to joke with him to cheer him up but he wasn't amused. He pulled his gun and threatened to shoot me! I was able to calm him down, but that guy must have some serious problems. He knows he can't enter the lab without my help and my medal.",
                "dir": "left"
              },
              {
                "para": "This is what it means for the chief \"to serve and protect\"!?",
                "dir": "left"
              },
              {
                "para": "August 21st",
                "dir": "left"
              },
              {
                "para": "William informed me that the police and media have begun their investigation on Umbrella's affairs. He said that the investigation will be citywide and that there is a possibility they'll even search through the sewers. He asked me to suspend all Umbrella sewer facility operations until the investigation has concluded. The sewer will still be used for passage, but he stressed that I have to be extremely cautious and that I'd lose my job if anyone finds out about this operation.",
                "dir": "left"
              }
            ],
            "tr_content":[
              {
                "para": "۲۸ ژوئن",
                "dir": "right"
              },
              {
                "para": "مدت زیادی بود که دان رو ندیده بودم، امروز ولی این اتفاق افتاد، و بعد انجام کار، با هم صحبت داشتیم. اون گفت که تا دیروز از مریضی تو رخت خواب بوده.",
                "dir": "right"
              },
              {
                "para": "با در نظر گرفتن اینکه چه مدت اینجا کار می‌کرده هم، خیلی نباید تعجب کرد.",
                "dir": "right"
              },
              {
                "para": "اون مثل چی داشت عرق می‌کرد، و به خاروندن خودش، طی صحبت‌مون، ادامه می‌داد. ازش پرسیدم گرمته؟ و اون فقط یه نگاه احمقانه بهم انداخت.",
                "dir": "right"
              },
              {
                "para": "گذشته از این حرفا، واقعا چش بود؟",
                "dir": "right"
              },
              {
                "para": "۷ ژوئیه",
                "dir": "right"
              },
              {
                "para": "رئیس آیرونز، اخیرا مرتب به آزمایشگاه سر می‌زنه. نمی‌دونم اونجا چی کار می‌کنه، ولی قیافه‌ش که همه‌ش عبوسه.",
                "dir": "right"
              },
              {
                "para": "حالت صورتش هم حتی پریشون‌تر از همیشه بود...",
                "dir": "right"
              },
              {
                "para": "غلط نکنم باید بخاطر درخواست‌های غیر ممکن دکتر برکین باشه. رئیس ولی، همدردی منو داره. بعد اون همه کاری که برای شهر کرد، لیاقتش این نبود.",
                "dir": "right"
              },
              {
                "para": "۲۱ ژوئیه",
                "dir": "right"
              },
              {
                "para": "کم پیش میاد به خوردن مایعات بپردازم، چون توی شیفت قبرستون‌ام، ولی خیلی هم نمیشه شکایتی کرد، چون زندگی‌م از همین راه می‌گذره.",
                "dir": "right"
              },
              {
                "para": "۱۶ اوت",
                "dir": "right"
              },
              {
                "para": "رئیس آیرونز امروز دیر از راه رسید، اونم عبوس‌تر از همیشه. سعی کردم باهاش شوخی کنم تا انرژی بهش بدم، اما حس‌وحالش تغییری نکرد. اون اسلحه کشید و منو تهدید به شلیک کرد! با اینکه تونستم آرومش کنم، اما مطمئنا باید از مشکلات جدی‌ای رنج ببره. اون متوجه این موضوع هست که بدون من و مدالم، نمی‌تونه وارد آزمایشگاه بشه.",
                "dir": "right"
              },
              {
                "para": "معنی رئیسِ «خدمت و محافظت» اینه آخه؟!",
                "dir": "right"
              },
              {
                "para": "۲۱ اوت",
                "dir": "right"
              },
              {
                "para": "ویلیام بهم گفت که پلیس و رسانه‌ها، تحقیقات‌شون رو در مورد قضیه‌ی آمبرلا شروع کردن. اون گفت که تحقیقات، تو سطحِ شهر انجام می‌شه و حتی ممکنه کار به فاضلاب هم برسه. اون ازم خواست تا موقعی که تحقیقات به سرانجام می‌رسه، همه‌ی عملیات‌های تاسیسات فاضلاب آمبرلا رو به تعویق بندازم. از فاضلاب همچنان به عنوان گذرگاه استفاده می‌شه، ولی ویلیام تاکید داشت که خیلی احتیاط کنم، اگه کسی هم از این ماجرا بو ببره، شغلم رو از دست می‌دم.",
                "dir": "right"
              }
            ]
          },
          {
            "id": 18,
            "src": require('../assets/img/re2/files/lab-security-manual/lab-security-manual.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-2/files#!lab-security-manual",
            "location": [
              {
                "txt": "Location (Leon A+B, Claire A+B)",
                "src": require('../assets/img/re2/files/lab-security-manual/location/lab-security-manual-location.webp'),
                "map": require('../assets/img/re2/files/lab-security-manual/map/lab-security-manual-map.png'),
                "src_source_link": "https://residentevil.fandom.com/wiki/Lab_security_manual",
                "src_source": "Resident Evil Wiki",
                "map_source_link": "https://www.evilresource.com/resident-evil-2/maps/underground-laboratory/laboratory-b4/sleeping-quarters-a",
                "map_source": "Evil Resource",
              }
            ],
            "url": "lab-security-manual",
            "title": "Lab Security Manual",
            "og_content":[
              {
                "para": "Laboratory Security Manual",
                "dir": "left"
              },
              {
                "para": "-Security measures in case of an emergency-",
                "dir": "left"
              },
              {
                "para": "In the instance of an uncontainable biohazardous breakout, all security measures will be directed toward the underground transport facility.",
                "dir": "left"
              },
              {
                "para": "In the instance that any abnormalities are detected among cargo in transit, all materials will automatically be transported from the loading zone to the designated high-speed train. At which point, all materials will be isolated and disposed of immediately.",
                "dir": "left"
              },
              {
                "para": "In the instance of a Class 1 emergency, the entire train will be purged and disposed of without delay.",
                "dir": "left"
              },
              {
                "para": "In the instance that the lab itself becomes contaminated, the northern most route currently used to transport materials to and from the facility will be designated as the emergency escape route. This route will secure passage to the relay point outside the city limits.",
                "dir": "left"
              },
              {
                "para": "Disclosure about any information regarding research conducted here, or the existence of this facility, is strictly prohibited. Since it is top priority to keep all research classified, escape access may be denied under certain extenuating circumstances.",
                "dir": "left"
              }
            ],
            "tr_content":[
              {
                "para": "راهنمای امنیتی آزمایشگاه",
                "dir": "right"
              },
              {
                "para": "- تمهیدات امنیتی، در مواقع اورژانسی -",
                "dir": "right"
              },
              {
                "para": "در صورت شیوع یک زیست‌آسیب مهارنشدنی، تمامی تمهیدات امنیتی، به تاسیسات حمل‌ونقل زیرزمینی معطوف می‌شود.",
                "dir": "right"
              },
              {
                "para": "در صورت شناسایی ناهنجاری در میان محموله‌ها، تمامی مصالح، از منطقه‌ی بارگیری به قطاری پرسرعت و تخصیص‌یافته انتقال می‌یابند. سپس تمامی آن‌ها، جدا شده و بلافاصله دفع می‌شوند.",
                "dir": "right"
              },
              {
                "para": "در مواقع اضطراری سطح ۱، تمامی قطار، پاکسازی شده و بدون تاخیر، دفع می‌شود.",
                "dir": "right"
              },
              {
                "para": "در مواردی که خودِ آزمایشگاه آلوده شود، شمالی‌ترین مسیر که برای انتقال مصالح به آن، از طرف تاسیسات است، به عنوان مسیر خروج اضطراری تعیین می‌گردد. این مسیر، گذرگاه منتهی به نقطه‌ی ارتباطی را، خارج از محدوده‌ی شهر، ایمن می‌سازد.",
                "dir": "right"
              },
              {
                "para": "افشاسازی هرگونه اطلاعات، درباره‌ی تحقیقات انجام‌شده و وجود این تاسیسات، اکیدا ممنوع است. اگرچه که سری‌سازیِ تمامی این تحقیقات، اولین اولویت ماست، دسترسی برای فرار ممکن است تحت شرایط موجه خاصی رد شود.",
                "dir": "right"
              },
            ]
          },
          {
            "id": 19,
            "src": require('../assets/img/re2/files/p-epsilon-gas-report/p-epsilon-gas-report.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-2/files#!p-epsilon-report",
            "location": [
              {
                "txt": "Location (Leon B, Claire B)",
                "src": require('../assets/img/re2/files/p-epsilon-gas-report/location/p-epsilon-gas-report-location.webp'),
                "map": require('../assets/img/re2/files/p-epsilon-gas-report/map/p-epsilon-gas-report-map.png'),
                "src_source_link": "https://residentevil.fandom.com/wiki/P-Epsilon_Gas_Report",
                "src_source": "Resident Evil Wiki",
                "map_source_link": "https://www.evilresource.com/resident-evil-2/maps/underground-laboratory/laboratory-b2/steam-room",
                "map_source": "Evil Resource",
              }
            ],
            "url": "p-epsilon-gas-report",
            "title": "P-Epsilon Gas Report",
            "og_content":[
              {
                "para": "-This report demands immediate attention-",
                "dir": "left"
              },
              {
                "para": "The P-epsilon gas has been proven capable of incapacitating all know B.O.W.s (Bio Organic Weapon). As such, it has been designated for emergency usage in the event of a B.O.W. escape. Reports based on data collected during prior incidents indicate the potential for negative side effects.",
                "dir": "left"
              },
              {
                "para": "The P-eplison gas has proven to weaken the B.O.W.s' cellular functions. However, prolonged or repeated exposures will result in the creation of adaptive antibodies to the agent.",
                "dir": "left"
              },
              {
                "para": "Furthermore, some species have been observed to absorb the P-eplison gas as a source of nutrition and use the toxins extracted against anything perceived as a threat.",
                "dir": "left"
              },
              {
                "para": "Use of P-eplison gas should be severely limited to extreme cases only.",
                "dir": "left"
              },
              {
                "para": "We strongly request the authority to re-evaluate the P-eplison gas deployment system. We would like this re-evaluation to take place immediately.",
                "dir": "left"
              },
              {
                "para": "2nd R&D Room/Security Team",
                "dir": "right"
              }
            ],
            "tr_content":[
              {
                "para": "- این گزارش نیازمند توجه فوری‌ـه -",
                "dir": "right"
              },
              {
                "para": "ثابت شده که گاز پی-اپسیلون قادر به از کار انداختنِ تمام بی.او.دابلیوهای (سلاح‌های بیو ارگانیکِ) شناخته‌شده‌ست. بر این اساس، این گاز اختصاصا برای کاربرد اورژانسی، اونم موقع خروج یه بی.او.دابلیو‌ـه. گزارشای مبنی بر داده‌های جمع‌آوری‌شده، طی حوادث قبلی، پتانسیلِ تاثیرات جانبی منفی رو مشخص می‌کنن.",
                "dir": "right"
              },
              {
                "para": "ثابت شده که این گاز، عملکرد سلولیِ بی.او.دابلیوها رو ضعیف می‌کنه. با این وجود، در معرض خطر قرار گرفتن طولانی یا مکرر، به تولید آنتی‌بادی‌های سازگار با عامل ختم می‌شه.",
                "dir": "right"
              },
              {
                "para": "گذشته از اینا، یه سری از گونه‌ها هستن که گاز پی-اپسیلون رو به عنوان منبع تغذیه جذب می‌کنن، و از سموم استخراج‌شده بر علیه هر چیزی که حس کنن تهدیده استفاده می‌کنن.",
                "dir": "right"
              },
              {
                "para": "استفاده از گاز پی-اپسیلون فقط باید به موارد استثنایی محدود شه.",
                "dir": "right"
              },
              {
                "para": "ما قویا از مسئولا می‌خوایم که سیستم استقرارِ گاز پی-اپسیلون رو مجدد، ارزیابی کنن. تمایل داریم که این قضیه هر چه زودتر اتفاق بیفته.",
                "dir": "right"
              },
              {
                "para": "اتاق دوم تحقیق‌وتوسعه، تیم امنیتی",
                "dir": "left"
              }
            ]
          },
          {
            "id": 20,
            "src": require('../assets/img/re2/files/user-registration/user-registration.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-2/files#!user-registration",
            "location": [
              {
                "txt": "Location (Leon A+B, Claire A+B)",
                "src": require('../assets/img/re2/files/user-registration/location/user-registration-location.webp'),
                "map": require('../assets/img/re2/files/user-registration/map/user-registration-map.png'),
                "src_source_link": "https://residentevil.fandom.com/wiki/User_registration",
                "src_source": "Resident Evil Wiki",
                "map_source_link": "https://www.evilresource.com/resident-evil-2/maps/underground-laboratory/laboratory-b4/sleeping-quarters-a",
                "map_source": "Evil Resource",
              }
            ],
            "url": "user-registration",
            "title": "User Registration",
            "og_content":[
              {
                "para": "Temporary User Registration for the Culture Experiment Room.",
                "dir": "left"
              },
              {
                "para": "User Name: \"GUEST\"",
                "dir": "left"
              },
              {
                "para": "Password: None",
                "dir": "left"
              },
              {
                "para": "Valid for 24 hours.",
                "dir": "left"
              }
            ],
            "tr_content":[
              {
                "para": "ثبت موقت کاربر برای اتاق آزمایشگاهی فرهنگی.",
                "dir": "right"
              },
              {
                "para": "نام کاربری: «مهمان»",
                "dir": "right"
              },
              {
                "para": "رمز عبور: خالی",
                "dir": "right"
              },
              {
                "para": "معتبر برای ۲۴ ساعت.",
                "dir": "right"
              }
            ]
          },
          {
            "id": 21,
            "src": require('../assets/img/re2/files/vaccine-synthesis/vaccine-synthesis.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-2/files#!vaccine-synthesis",
            "location": [
              {
                "txt": "Location (Claire A)",
                "src": require('../assets/img/re2/files/vaccine-synthesis/location/vaccine-synthesis-location.webp'),
                "map": require('../assets/img/re2/files/vaccine-synthesis/map/vaccine-synthesis-map.png'),
                "src_source_link": "https://residentevil.fandom.com/wiki/Vaccine_synthesis",
                "src_source": "Resident Evil Wiki",
                "map_source_link": "https://www.evilresource.com/resident-evil-2/maps/underground-laboratory/laboratory-b5/lab-entry-corridor",
                "map_source": "Evil Resource",
              }
            ],
            "url": "vaccine-synthesis",
            "title": "Vaccine Synthesis",
            "og_content":[
              {
                "para": "Any beings infected by the G-virus will reproduce through the impregnation of an embryo within another living being.",
                "dir": "left"
              },
              {
                "para": "Unless rejected by the host, the embryo will undertake a process of gradual cellular invasion, infecting the host's cells on a molecular level as it rewrites their DNA.",
                "dir": "left"
              },
              {
                "para": "Once the metamorphosis is complete, the host will be capable of continuing this cycle of self-replication. The duration of time for the process to run its course will vary from subject to subject. In the early stages of cellular invasion, it is possible to halt progression of the metamorphosis through the administration of the G-vaccine antigen.",
                "dir": "left"
              },
              {
                "para": "The following procedure details its synthesis.",
                "dir": "left"
              },
              {
                "para": "The vaccine creation requires the base vaccine. This can be arranged by the activator VAM. First set the empty cartridge to the VAM and activate it. After several moments the process will be complete and the white-colored base vaccine will be set in the cartridge automatically. Then confirm the green light is on, remove the cartridge and proceed to the next step.",
                "dir": "left"
              },
              {
                "para": "Once the base vaccine has been prepared, set it in the vaccine synthesis machine located in the P-4 level experiment room. The machine is fully automated and only requires the user to push the sequence start switch. At this point, the program will run automatically and synthesis will be complete within approximately 10 seconds.",
                "dir": "left"
              },
              {
                "para": "As the synthesis of DEVIL is an extremely delicate process, the quality will vary with slight shocks or changes in temperature. Careful handling is required for the proper results.",
                "dir": "left"
              }
            ],
            "tr_content":[
              {
                "para": "هر موجودی که به ویروس جی آلوده بشه، داخل یه موجود زنده‌ی دیگه، از طریقِ لقاح یک جنین، تکثیر می‌شه.",
                "dir": "right"
              },
              {
                "para": "جنین در صورتی که توسط میزبان ندید گرفته بشه، فرآیند تدریجی تهاجم سلولی رو طی می‌کنه، و به آلوده‌کردن سلول‌های میزبان تو سطح مولکولی می‌پردازه و دی‌ان‌اِی‌شون رو بازنویسی می‌کنه.",
                "dir": "right"
              },
              {
                "para": "وقتی دگردیسی تموم بشه، میزبان می‌تونه به چرخه‌ی خودتکثیری‌ش ادامه بده. مدت‌زمانِ اجرای فرآیند هم، برای طی‌کردنِ دوره، بسته به سوژه متفاوته. تو مراحل اولیه‌ی تهاجم سلولی، می‌شه توی پیشرفت دگردیسی، طی تجویز آنتی‌ژن واکسن جی، فاصله انداخت.",
                "dir": "right"
              },
              {
                "para": "روش پیش رو، به جزئیات سنتزش می‌پردازه.",
                "dir": "right"
              },
              {
                "para": "ساخت واکسن، نیازمند واکسن پایه‌ست. این رو می‌شه به واسطه‌ی فعال‌کننده‌ی وی‌اِی‌ام ترتیب داد. اول از همه، کارتریج رو داخل وی‌اِی‌ام بذارین و اونو فعال کنین. بعدِ چند لحظه، فرآیند تکمیل می‌شه و واکسن پایه‌ی سفیدرنگ، به طور خودکار، تو کارتریج قرار می‌گیره. بعدش روشن‌بودنِ چراغ سبزو تایید کنین، کارتریج رو بردارین، و برین قدم بعدی.",
                "dir": "right"
              },
              {
                "para": "به محض اینکه واکسنِ پایه آماده شد، اونو تو دستگاه سنتزِ واسکن، واقع تو سطح ۴ اتاق آزمایش، قرار بدین. دستگاه، تمام‌اتوماته، و فقط نیازمند فشار کلید فعال‌سازی از طرف کاربره. اینجاست که برنامه به طورر اتوماتیک اجرا می‌شه و عملیات سنتز، طی حدودا ۱۰ ثانیه، به اتمام می‌رسه.",
                "dir": "right"
              },
              {
                "para": "از اونجایی هم که سنتز شیطان، پروسه‌ی خیلی حساسی‌ـه، بسته به تغییرات دما و تکون‌های کوچیک، کیفیت کار تغییر می‌کنه. دستیابی به نتایج مناسب، نیازمند بررسی دقیقه.",
                "dir": "right"
              }
            ]
          }
        ]
      },
      {
        id: 3,
        title: 'RE3',
        url: 're3',
        files:
        [
          {
            "id": 1,
            "src": require('../assets/img/re3/files/clock-tower-postcard/clock-tower-postcard.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/files#!clock-tower-postcard",
            "location": [
              {
                "txt": "Location",
                "map": require('../assets/img/re3/files/clock-tower-postcard/map/clock-tower-postcard-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/maps/uptown-and-downtown/uptown/black-jacks-bar",
                "map_source": "Evil Resource",
              }
            ],
            "url": "clock-tower-postcard",
            "title": "Clock Tower Postcard",
            "og_content":[
              {
                "para": "A picture postcard of a clock tower.",
                "dir": "left"
              },
              {
                "para": "The following explanation is printed on the backside:",
                "dir": "left"
              },
              {
                "para": "\"A landmark spot:",
                "dir": "left"
              },
              {
                "para": "Saint Michael Clock Tower.\"",
                "dir": "left"
              }
            ],
            "tr_content":[
              {
                "para": "این یه کارت‌پستال از برج ساعته.",
                "dir": "right"
              },
              {
                "para": "پشتش هم یه چنین چیزی پرینت شده:",
                "dir": "right"
              },
              {
                "para": "«موقعیت مکانی:",
                "dir": "right"
              },
              {
                "para": "برج ساعت سنت میکائیل.»",
                "dir": "right"
              }
            ]
          },
          {
            "id": 2,
            "src": require('../assets/img/re3/files/photo-a/photo-a.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/files#!photo-a",
            "location": [
              {
                "txt": "Location",
                "map": require('../assets/img/re3/files/photo-a/map/photo-a-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/maps/uptown-and-downtown/uptown/barricaded-back-passage",
                "map_source": "Evil Resource",
              }
            ],
            "url": "photo-a",
            "title": "Photo A",
            "og_content":[
              {
                "para": "The policemen are pressing forward.",
                "dir": "left"
              },
              {
                "para": "It's dated \"September 27\"",
                "dir": "left"
              }
            ],
            "tr_content":[
              {
                "para": "ماموران پلیس، پیش می‌تازند.",
                "dir": "right"
              },
              {
                "para": "تاریخ: «۲۷ سپتامبر»",
                "dir": "right"
              }
            ]
          },
          {
            "id": 3,
            "src": require('../assets/img/re3/files/marvin-s-report/marvin-s-report.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/files#!marvins-report",
            "location": [
              {
                "txt": "Location",
                "map": require('../assets/img/re3/files/marvin-s-report/map/marvin-s-report-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/maps/police-station/police-station-1f/information-room",
                "map_source": "Evil Resource",
              }
            ],
            "url": "marvin-s-report",
            "title": "Marvin's Report",
            "og_content":[
              {
                "para": "\"Report\"",
                "dir": "center"
              },
              {
                "para": "September 24th",
                "dir": "left"
              },
              {
                "para": "There are reports of a theft in the municipal building before dawn. A jewel decorated clock at the main gate was damaged. Two of twelve gems that are installed on the face of the clock are missing.",
                "dir": "left"
              },
              {
                "para": "Due to lack of available officers at this time, I have no choice but to suspend the research of this case.",
                "dir": "left"
              },
              {
                "para": "Signed,",
                "dir": "left"
              },
              {
                "para": "Marvin Branagh",
                "dir": "left"
              },
              {
                "para": "\"Report\"",
                "dir": "center"
              },
              {
                "para": "September 26th",
                "dir": "left"
              },
              {
                "para": "Based upon an autopsy report of a 42 year old restaurant owner, I have discovered that he has one of the missing gems. He apparently took shelter in the police department at about 10 am, where he was shot to death within 10 minutes of having developed the symptoms.",
                "dir": "left"
              },
              {
                "para": "Since the city is currently under martial law, we are forced to suspend this case. At this time, we'll keep the gem as evidence.",
                "dir": "left"
              },
              {
                "para": "Signed,",
                "dir": "left"
              },
              {
                "para": "Marvin Branagh",
                "dir": "left"
              }
            ],
            "tr_content":[
              {
                "para": "«گزارش»",
                "dir": "center"
              },
              {
                "para": "۲۴ سپتامبر",
                "dir": "right"
              },
              {
                "para": "گزارش‌هایی مبنی بر سرقت، توی ساختمون درون‌شهری، اونم قبل سحر، به گوش می‌رسه. جواهری هم که ساعت رو، کنار درِ ورودی، مزین کرده بود، نابود می‌شه می‌ره. دوتا از این جواهر که روی این ساعت نصب می‌شدن الآن گم‌ان.",
                "dir": "right"
              },
              {
                "para": "عدم حضور هیچ افسری هم، انتخابی جز بیخیال‌شدنِ این پرونده برام نذاشته.",
                "dir": "right"
              },
              {
                "para": "امضاء",
                "dir": "right"
              },
              {
                "para": "ماروین برانا",
                "dir": "right"
              },
              {
                "para": "«گزارش»",
                "dir": "center"
              },
              {
                "para": "۲۶ سپتامبر",
                "dir": "right"
              },
              {
                "para": "طی گزارشِ کالبدشکافیِ یه رستوران‌دارِ ۴۲ساله، متوجه شدم که یکی از جواهرای گم‌شده دست اونه؛ از قرار معلوم هم، ساعتای ۱۰ به اداره‌ی پلیس پناه می‌بره، جایی که ظرف ۱۰ دقیقه، ایجادِ علائم می‌کنه و طی اصابت گلوله، کشته می‌شه.",
                "dir": "right"
              },
              {
                "para": "از اونجایی هم که تو شهر، حکومت‌نظامی برقراره، مجبور شدیم بیخیال پرونده بشیم. و در حال حاضر، جواهر رو به عنوان مدرک در نظر می‌گیریم.",
                "dir": "right"
              },
              {
                "para": "امضاء",
                "dir": "right"
              },
              {
                "para": "ماروین برانا",
                "dir": "right"
              }
            ]
          },
          {
            "id": 4,
            "src": require('../assets/img/re3/files/david-s-memo/david-s-memo.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/files#!davids-memo",
            "location": [
              {
                "txt": "Location",
                "map": require('../assets/img/re3/files/david-s-memo/map/david-s-memo-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/maps/police-station/police-station-1f/dark-room",
                "map_source": "Evil Resource",
              }
            ],
            "url": "david-s-memo",
            "title": "David's Memo",
            "og_content":[
              {
                "para": "My sanity is at its end... I still can't believe this is happening. We lost another man yesterday. Meyer; one of our better marksmen. He saw me panic once we were overrun by the zombies, but he came back to save me.",
                "dir": "left"
              },
              {
                "para": "But when the time came to return the debt, I ran.",
                "dir": "left"
              },
              {
                "para": "I can still hear him calling out my name. I can still hear the screams coming from behind. The sound of his flesh being stripped from its bones. I was afraid... terrified...",
                "dir": "left"
              },
              {
                "para": "It's the 27th. The fight to stay alive continues. I took out several zombies who managed to break through the barricades. Now I'm cutting through the chill with whisky, unloading my Mossberg on anything undead. That shotgun's become a close friend of mine. I've blasted many a zombie into fertilizer with it.",
                "dir": "left"
              },
              {
                "para": "We've lost 13 men as of yesterday. In 3 hours, we'll bicker over trivial things in the meeting room. It's a total waste of time. When I finish this bottle, my old friend Mossberg will be turning one last body into fertilizer.",
                "dir": "left"
              },
              {
                "para": "Peace at last.",
                "dir": "left"
              },
              {
                "para": "I can hardly wait...",
                "dir": "left"
              }
            ],
            "tr_content":[
              {
                "para": "دیگه سلامت روانی برام نمونده... هنوزم نمی‌تونم باورش کنم. دیروز یه نفر دیگه رو از دست دادیم؛ مِیِر، از بهترین تیراندازامون رو. موقعِ تاخت‌وتاز زامبی‌ها، اون منو تو وحشت دید و اومد تا نجاتم بده.",
                "dir": "right"
              },
              {
                "para": "اما زمان جبرانش که رسید، جا زدم.",
                "dir": "right"
              },
              {
                "para": "هنوزم می‌تونم صداشو بشنوم که اسمم رو داره فریاد می‌زنه. هنوزم می‌تونم صدای جیغ‌های پشت سرم رو بشنوم. صدای کنده‌شدن پوستش از استخونش رو... ترسیده بودم... وحشت ورم داشته بود...",
                "dir": "right"
              },
              {
                "para": "امروز ۲۷اُمه و مبارزه برای زنده‌بودن ادامه داره. یه مشت زامبی که موفق به رخنه‌ی به منطقه شده بودن رو هم پُکوندم. الآن ولی این ویسکی‌ـه که حالمو عوض می‌کنه، که باعث می‌شه روی هر چیزِ غیر مرده‌ای تفنگ موسبرگ‌ام رو، رو کنم. اون شات‌گانه ولی، شده رفیق صمیمی‌م. باهاش هر زامبی‌ای رو به کود تبدیل کردم.",
                "dir": "right"
              },
              {
                "para": "از دیروز، ۱۳ نفرو از دست دادیم. ۳ ساعت بعد هم قراره تو اتاق ملاقات، سر مسائل بی‌اهمیت، جروبحث کنیم. این یه اتلافِ وقتِ تمام‌عیاره. وقتی این قوطی رو تموم کردم، رفیق قدیمی‌م، تفنگ موسبرگ، می‌ره که آخرین نفر رو به کود تبدیل کنه.",
                "dir": "right"
              },
              {
                "para": "صلح در پایان...",
                "dir": "right"
              },
              {
                "para": "سخت می‌شه منتظر موند...",
                "dir": "right"
              }
            ]
          },
          {
            "id": 5,
            "src": require('../assets/img/re3/files/fax-from-kendo-gun-shop/fax-from-kendo-gun-shop.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/files#!fax-from-kendo-gun-shop",
            "location": [
              {
                "txt": "Location",
                "map": require('../assets/img/re3/files/fax-from-kendo-gun-shop/map/fax-from-kendo-gun-shop-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/maps/police-station/police-station-2f/stars-office",
                "map_source": "Evil Resource",
              }
            ],
            "url": "fax-from-kendo-gun-shop",
            "title": "Fax From Kendo Gun Shop",
            "og_content":[
              {
                "para": "To the boys of S.T.A.R.S.,",
                "dir": "left"
              },
              {
                "para": "I have some good news for you from my brother Joe. He has finalized the new hand-gun for official use. It's the M92F S.T.A.R.S. Special, but he calls it the \"Samurai Edge.\" It's the most balanced of the Kendo custom guns. Joe said if you miss the targets with this, you should carry a teething ring instead of a gun in your holster.",
                "dir": "left"
              },
              {
                "para": "The goods will be delivered along with their proper documentation. I'm sure you'll be surprised when you see what kind of excellent parts are used for the M92F. I know that you'll want to thank the good people who developed it.",
                "dir": "left"
              },
              {
                "para": "Sincerely,",
                "dir": "left"
              },
              {
                "para": "Robert Kendo",
                "dir": "left"
              },
              {
                "para": "Kendo Gun Shop",
                "dir": "left"
              }
            ],
            "tr_content":[
              {
                "para": "به بر و بچ استارز",
                "dir": "right"
              },
              {
                "para": "خبرای خوبی از داداشم، جو، براتون دارم. اون سلاحِ دستی جدیدی رو برای استفاده‌ی رسمی نهایی‌سازی کرده؛ اِم۹۲اِف استارز، که بهش می‌گه «تیغه‌ی سامورایی». بین سلاح‌های شخصی‌سازی‌شده‌ی کِندو هم، بالانس‌ترینه. جو می‌گه اگه هدف رو با این سلاح گم کردین، بهتره به جای تفنگ تو غلاف‌تون، دندون‌گیرِ نوزاد همراه داشته باشین.",
                "dir": "right"
              },
              {
                "para": "کالاها، به همراه مستنداتِ مخصوص‌شون، از راه می‌رسن. و من مطمئنم وقتی ببینین از چه قطعات خفنی توی اِم۹۲اِف استفاده شده، شگفت‌زده می‌شین. می‌دونم که می‌خواین از آدمای کاربلدی که ساختنش، تشکر کنین.",
                "dir": "right"
              },
              {
                "para": "با احترام،",
                "dir": "right"
              },
              {
                "para": "رابرت کِندو",
                "dir": "right"
              },
              {
                "para": "اسلحه‌فروشی کِندو",
                "dir": "right"
              }
            ]
          }
        ]
      }
    ],
    game: Object,
    files: Array,
    file: Object,
    isGameSelected: false,
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
