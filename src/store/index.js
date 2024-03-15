import { createStore } from 'vuex'

export default createStore({
  state: {
    games: [
      {
        id: 1,
        title: 'RE1',
        name: 'Resident Evil 1',
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
            "fa_content":[
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
            "fa_content":[
              {
                "para": "۹ مه ۱۹۹۸",
                "dir": "right"
              },
              {
                "para": "شب بود که با نگهبان اسکات، الیاس، و محقق استیو، رفتیم پوکر.",
                "dir": "right"
              },
              {
                "para": "استیو که واقعا خوش‌شانس بود، هرچند که فکر کنم داشت تقلب می‌کرد.",
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
                "para": "اگرچه حس‌وحال خوشی نداشتم، ولی گفتم برم پیش نانسی. این اولین مرخصی من تو این همه مدت بود، ولی محافظی که توی راه خروج بود، جلوم رو گرفت.",
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
            "fa_content":[
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
            "fa_content":[
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
            "fa_content":[
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
            "fa_content":[
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
                "para": "نخست، اگرچه ارائه‌ی آماری دقیق از تعداد واقعیِ افراد دشوار است، اما اینطور که به نظر می‌رسد، بیش از نیمی از محققان، پس از آنکه در معرض «ویروس تی» قرار می‌گیرند، جان می‌بازند. از آنجا که عملا تمامی بازماندگان، علائمی مختص به «ویروس تی» نشان می‌دهند، میزان تلفات احتمالا رو به افزایش خواهد بود.",
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
                "para": "شرایط، بحرانی‌ست. و عملیات ما در دستیابی به لاپوشانیِ این موقعیت نیز دشوار است، هرچند امیدواریم تا این مشکل به زودی حل شود.",
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
            "fa_content":[
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
            "fa_content":[
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
            "fa_content":[
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
            "fa_content":[
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
            "fa_content":[
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
            "fa_content":[
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
            "fa_content":[
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
            "fa_content":[
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
        name: 'Resident Evil 2',
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
            "fa_content":[
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
            "fa_content":[
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
            "fa_content":[
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
            "fa_content":[
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
            "fa_content":[
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
            "fa_content":[
              {
                "para": "- گزارش عملیات -",
                "dir": "center"
              },
              {
                "para": "۲۸ سپتامبر",
                "dir": "left"
              },
              {
                "para": "صبح زوده، ساعت هم ۲:۳۰. زامبی‌ها توی اتاقِ عملیات، تاخت‌وتاز راه می‌ندازن و یه مبارزه‌ی دیگه رو رقم می‌زنن. ما هم چهار نفر دیگه رو از دست دادیم، از جمله دیوید رو.",
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
            "fa_content":[
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
            "fa_content":[
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
            "fa_content":[
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
            "fa_content":[
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
            "fa_content":[
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
            "fa_content":[
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
            "fa_content":[
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
            "fa_content":[
              {
                "para": "۱۱ اوت",
                "dir": "right"
              },
              {
                "para": "بالاخره این شانس رو پیدا کردم تا رنگ آسمون رو بعد مدت‌ها، برای اولین بار ببینم، هرچند که این قضیه حس‌وحالی برام ایجاد نکرد. وقتی هم که بالای برج ساعت بودم، بخاطر سرباززدن از وظایفم، توسط رئیس کل، توبیخ شدم.",
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
            "fa_content":[
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
            "fa_content":[
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
            "fa_content":[
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
            "fa_content":[
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
            "fa_content":[
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
            "fa_content":[
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
            "fa_content":[
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
        title: 'RE3N',
        name: 'Resident Evil 3 Nemesis',
        url: 're3n',
        files:
        [
          {
            "id": 1,
            "src": require('../assets/img/re3n/files/clock-tower-postcard/clock-tower-postcard.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/files#!clock-tower-postcard",
            "location": [
              {
                "txt": "Location",
                "map": require('../assets/img/re3n/files/clock-tower-postcard/map/clock-tower-postcard-map.png'),
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
            "fa_content":[
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
            "src": require('../assets/img/re3n/files/photo-a/photo-a.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/files#!photo-a",
            "location": [
              {
                "txt": "Location",
                "map": require('../assets/img/re3n/files/photo-a/map/photo-a-map.png'),
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
            "fa_content":[
              {
                "para": "مامورای پلیس، پیش می‌تازن.",
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
            "src": require('../assets/img/re3n/files/marvin-s-report/marvin-s-report.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/files#!marvins-report",
            "location": [
              {
                "txt": "Location",
                "map": require('../assets/img/re3n/files/marvin-s-report/map/marvin-s-report-map.png'),
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
            "fa_content":[
              {
                "para": "«گزارش»",
                "dir": "center"
              },
              {
                "para": "۲۴ سپتامبر",
                "dir": "right"
              },
              {
                "para": "گزارش‌هایی مبنی بر سرقت، توی ساختمون شهرداری، اونم قبل سحر، به گوش می‌رسه. جواهری هم که ساعت رو، کنار درِ ورودی، مزین کرده بود، نابود می‌شه می‌ره. دوتا از این جواهر که روی این ساعت نصب می‌شدن الآن گم‌ان.",
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
            "src": require('../assets/img/re3n/files/david-s-memo/david-s-memo.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/files#!davids-memo",
            "location": [
              {
                "txt": "Location",
                "map": require('../assets/img/re3n/files/david-s-memo/map/david-s-memo-map.png'),
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
            "fa_content":[
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
                "para": "امروز ۲۷اُمه و مبارزه برای زنده‌بودن ادامه داره. یه مشت زامبی که موفق به رخنه‌ی به منطقه شده بودن رو هم پُکوندم. الآن ولی این ویسکی‌ـه که حالمو بهتر می‌کنه، و باعث می‌شه روی هر مرده‌ی متحرکی تفنگ موسبرگ‌ام رو، رو نکنم. اون شات‌گانه ولی، شده رفیق صمیمی‌م. باهاش هر زامبی‌ای رو به کود تبدیل کردم.",
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
            "src": require('../assets/img/re3n/files/fax-from-kendo-gun-shop/fax-from-kendo-gun-shop.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/files#!fax-from-kendo-gun-shop",
            "location": [
              {
                "txt": "Location",
                "map": require('../assets/img/re3n/files/fax-from-kendo-gun-shop/map/fax-from-kendo-gun-shop-map.png'),
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
            "fa_content":[
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
          },
          {
            "id": 6,
            "src": require('../assets/img/re3n/files/mercenary-s-diary/mercenary-s-diary.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/files#!mercenarys-diary",
            "location": [
              {
                "txt": "Location",
                "map": require('../assets/img/re3n/files/mercenary-s-diary/map/mercenary-s-diary-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/maps/uptown-and-downtown/uptown/zigzag-alley",
                "map_source": "Evil Resource",
              }
            ],
            "url": "mercenary-s-diary",
            "title": "Mercenary's Diary",
            "og_content":[
              {
                "para": "September 1st",
                "dir": "left"
              },
              {
                "para": "Following six months of intensive training, my body's edge had returned.",
                "dir": "left"
              },
              {
                "para": "I was a good soldier, but they ordered my execution with no reason given. I was tortured and forced to give a false confession.",
                "dir": "left"
              },
              {
                "para": "But on the morning of my execution, a miracle happened. The company had helped me out, giving me a second lease on life.",
                "dir": "left"
              },
              {
                "para": "September 15th",
                "dir": "left"
              },
              {
                "para": "I ended my vacation short and returned to the HQ office. It looks like my UBCS unit's been called into action.",
                "dir": "left"
              },
              {
                "para": "Umbrella maintains its own paramilitary unit to counter corporate terrorism and V.I.P. abduction. In addition, they have nightmen who specialize in handling problems cause by illegal products.",
                "dir": "left"
              },
              {
                "para": "I'm currently a member of the latter.",
                "dir": "left"
              },
              {
                "para": "September 28th",
                "dir": "left"
              },
              {
                "para": "Dawn's here, but we're still slogging through this nightmare. There are no provisions of any kind here. The undead walk the streets feeding upon the flesh of the living.",
                "dir": "left"
              },
              {
                "para": "Given the choice again, I would rather have been executed. Death row was a heavenly asylum compared to this place.",
                "dir": "left"
              },
              {
                "para": "I've chosen to pull the trigger myself, in the hope that my dead body won't come back to life.",
                "dir": "left"
              }
            ],
            "fa_content":[
              {
                "para": "۱ سپتامبر",
                "dir": "right"
              },
              {
                "para": "بعدِ شیش ماه تمرین فشرده، همون گولاخ سابق شدم.",
                "dir": "right"
              },
              {
                "para": "با اینکه سرباز خوبی بودم، ولی حکم اعدامم رو بدون هیچ دلیلی صادر کردن. من مورد شکنجه قرار گرفتم و به اعتراف اجباری مجبور شدم.",
                "dir": "right"
              },
              {
                "para": "ولی درست صبحِ روز اعدام بود که یه معجزه اتفاق افتاد؛ کمپانی بهم دستی رسوند و شانس زندگی بهم داد.",
                "dir": "right"
              },
              {
                "para": "۱۵ سپتامبر",
                "dir": "right"
              },
              {
                "para": "به سرعت به تعطیلاتم پایان دادم و برگشتم سمت دفترِ مقر. گویا که نیروهای یوبی‌سی‌اِس رو اعزام کردن.",
                "dir": "right"
              },
              {
                "para": "آمبرلا واحد شبه‌نظامی‌شو برای مقابله با ربودن افراد به شدت مهم و تروریسمِ سازمانی نگه داشته. به علاوه اینکه کلی آدمِ شب‌کار تو مشتشه که تو مدیریت مشکلات ناشی از محصولات غیر قانونی تخصص دارن.",
                "dir": "right"
              },
              {
                "para": "و من در حال حاضر عضو این آخری‌ام.",
                "dir": "right"
              },
              {
                "para": "۲۸ سپتامبر",
                "dir": "right"
              },
              {
                "para": "سپیده دمه و هنوزم داریم با این کابوس، دست‌وپنجه نرم می‌کنیم. هیچ مدل تمهیداتی هم به چشم نمی‌خوره. مرده‌های متحرک ولی، تو خیابون پرسه می‌زنن و از گوشتِ زنده‌ها تغذیه می‌کنن.",
                "dir": "right"
              },
              {
                "para": "اگه می‌شد که حق انتخاب مجددی داشته باشم، ترجیح می‌دادم تا اعدام بشم. بندِ محکومای به مرگ، در مقایسه با اینجا، یه آسایشگاه بهشتی بود.",
                "dir": "right"
              },
              {
                "para": "انتخاب کردم که خودم ماشه رو بکشم، به این امید که جسدم قرار نیست به زندگی برگرده.",
                "dir": "right"
              }
            ]
          },
          {
            "id": 7,
            "src": require('../assets/img/re3n/files/city-guide/city-guide.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/files#!city-guide",
            "location": [
              {
                "txt": "Location",
                "map": require('../assets/img/re3n/files/city-guide/map/city-guide-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/maps/uptown-and-downtown/downtown/restaurant",
                "map_source": "Evil Resource",
              }
            ],
            "url": "city-guide",
            "title": "City Guide",
            "og_content":[
              {
                "para": "City Guide",
                "dir": "left"
              },
              {
                "para": "The Tracks of Our City",
                "dir": "left"
              },
              {
                "para": "Dear citizens,",
                "dir": "left"
              },
              {
                "para": "Thanks to kind and generous people of Umbrella Inc., this is a peaceful and friendly city. The vast donations from Umbrella Inc., have been used for welfare work, the construction of public utilities, and to help maintain public peace.",
                "dir": "left"
              },
              {
                "para": "In 1992, it was my fifth year as mayor of our beautiful city. It was then that through many donations and hard work our city was able to rebuild the municipal building, create a state of the art hospital.",
                "dir": "left"
              },
              {
                "para": "In honor of these fine accomplishments, I was awarded with a grand statue that same year. The statue rests in the municipal building.",
                "dir": "left"
              },
              {
                "para": "I came to this city as an engineer more than 35 years ago. I made contributions to the electric systems, and to the installation of the cable car. I pledge to follow the tradition of this fine city and will devote my life to its prosperity.",
                "dir": "left"
              },
              {
                "para": "The mayor of the city",
                "dir": "left"
              },
              {
                "para": "Michael Warren",
                "dir": "left"
              }
            ],
            "fa_content":[
              {
                "para": "راهنمای شهر",
                "dir": "right"
              },
              {
                "para": "مسیرای شهرمون",
                "dir": "right"
              },
              {
                "para": "شهروندای گرامی،",
                "dir": "right"
              },
              {
                "para": "به لطف آدمای سخاوت‌مند و مهربونِ آمبرلا، اینجا دیگه یه شهر بدون تنش و دوستانه‌ست. تسهیلات رفاهی، ساخت‌وسازِ شرکت‌های خدمات عمومی، و کمک تو حفظ امنیت عمومی، به واسطه‌ی حمایت‌های مالیِ گسترده از طرف آمبرلا رقم خورده.",
                "dir": "right"
              },
              {
                "para": "۱۹۹۲، پنجمین سالی به شمار می‌رفت که شهردار این شهر زیبا بودم. همون موقع هم بود که طی کلی حمایت مالی و تلاش و پشتکار، شهرمون تونست ساختمون شهرداری رو بازسازی کنه، و یه بیمارستان تمام‌امکانات ایجاد کنه.",
                "dir": "right"
              },
              {
                "para": "به افتخارِ این دستاوردای قابل توجه، ازم با یه مجسمه‌ی بزرگ، توی همون سال، تقدیر شد. و مجسمه هم، داخل همون ساختمون شهرداری می‌مونه.",
                "dir": "right"
              },
              {
                "para": "بیشتر از ۳۵ سال پیش بود که به عنوان یه مهندس، پا به این شهر گذاشتم. و چه توی سیستم‌های الکترونیکی، و چه توی نصب کابل‌های ماشین هم، مشارکت داشتم. و اینکه عهد بستم تا به سنت‌های این شهر زیبا پایبند بمونم و زندگی‌م رو وقفِ رونق‌اش کنم.",
                "dir": "right"
              },
              {
                "para": "شهردارِ اینجا",
                "dir": "right"
              },
              {
                "para": "مایکل وارن",
                "dir": "right"
              }
            ]
          },
          {
            "id": 8,
            "src": require('../assets/img/re3n/files/photo-b/photo-b.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/files#!photo-b",
            "location": [
              {
                "txt": "Location",
                "map": require('../assets/img/re3n/files/photo-b/map/photo-b-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/maps/uptown-and-downtown/downtown/press-office-lobby",
                "map_source": "Evil Resource",
              }
            ],
            "url": "photo-b",
            "title": "Photo B",
            "og_content":[
              {
                "para": "A close-up shot of a zombie.",
                "dir": "left"
              },
              {
                "para": "It says, \"SCOOP!\" on the backside.",
                "dir": "left"
              }
            ],
            "fa_content":[
              {
                "para": "نمای نزدیک از یه زامبی.",
                "dir": "right"
              },
              {
                "para": "پشتش نوشته «خبر دسته اول!».",
                "dir": "right"
              }
            ]
          },
          {
            "id": 9,
            "src": require('../assets/img/re3n/files/photo-c/photo-c.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/files#!photo-c",
            "location": [
              {
                "txt": "Location",
                "map": require('../assets/img/re3n/files/photo-c/map/photo-c-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/maps/uptown-and-downtown/downtown/press-office",
                "map_source": "Evil Resource",
              }
            ],
            "url": "photo-c",
            "title": "Photo C",
            "og_content":[
              {
                "para": "The police have been destroyed.",
                "dir": "left"
              }
            ],
            "fa_content":[
              {
                "para": "نیروهای پلیس به فنا رفتن.",
                "dir": "right"
              }
            ]
          },
          {
            "id": 10,
            "src": require('../assets/img/re3n/files/reporter-s-memo/reporter-s-memo.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/files#!reporters-memo",
            "location": [
              {
                "txt": "Location",
                "map": require('../assets/img/re3n/files/reporter-s-memo/map/reporter-s-memo-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/maps/uptown-and-downtown/downtown/press-office",
                "map_source": "Evil Resource",
              }
            ],
            "url": "reporter-s-memo",
            "title": "Reporter's Memo",
            "og_content":[
              {
                "para": "At last I have found the evidence I need to prove that the \"cannibal disease\" is indeed happening in this city.",
                "dir": "left"
              },
              {
                "para": "One man actually ate people to death. He was like a savage animal tearing away a new flesh. It was completely disgusting. I have heard rumors that many people are also suffering from this disease now. However, the causes of the disease is not yet known. Is this another mystery of the present disease? I will have to check on it...",
                "dir": "left"
              },
              {
                "para": "They have placed Raccoon City under martial law because of the cannibal disease. I have lost contact with the media outside of the city, but I won't give up. As a journalist, I won't keep my eyes shut and walk away. I have a duty to the people and my profession. I don't think the disease has spread nationwide yet. I believe that this city holds the key to its creation and cure. In fact, I'm sure of it.",
                "dir": "left"
              },
              {
                "para": "The military has setup blockades around the city to keep people from escaping and spreading the disease. Most of the citizens have either died or have come in contact with the disease. I know that it is the right decision to quarantine the city, but I can't help but pity myself. If I am infected or eaten, it doesn't matter. My fate is already sealed. All I have left is my journalism. I won't give up until I solve the mystery of this deadly disease. I have just discovered that the disease is not spread through the air, but by some other means.",
                "dir": "left"
              }
            ],
            "fa_content":[
              {
                "para": "هر چی نباشه شواهدی که نیاز داشتم، دستم رسیده و این نشون می‌ده که «بیماریِ آدم‌خواری» راستی‌راستی تو شهر در جریانه.",
                "dir": "right"
              },
              {
                "para": "حتی یکی‌شون طرفو تا سر حد مرگ می‌خوره. عین یه حیوون درنده که سر از یه بدن جدید درمیاره. همه چیش هم چندش‌آور بود. طبق شایعاتی که به گوشمم خورده، این روزا آدمای زیادی از این بیماری رنج می‌برن. هرچند، علت این بیماری هنوز ناشناخته‌ست. آیا معمای دیگه‌ای در رابطه با این بیماری وجود داره؟ من یکی که باید بزنم تو کارش...",
                "dir": "right"
              },
              {
                "para": "اونا بخاطر بیماری آدم‌خواری، توی راکون، حکومت نظامی راه می‌ندازن. و منم ارتباطم رو با رسانه‌های خارج از شهر از دست می‌دم، اما ول‌کُن‌اش نمی‌شم. به عنوان یه رزونامه‌نگار قرار نیست چشام رو، رو به همه چی ببندم و بیخیالِ قضیه بشم. چه برای حرفه‌م، و چه برای آدما، این وظیفه روی دوش منه. اما فکر نمی‌کنم که تا به الآن، این بیماری تو کل کشور شیوع پیدا کرده باشه. و مطمئنم که تیکه‌های گم‌شده‌ی این پازل، که شامل ریشه و درمان بیماری‌ـه، تو دل همین شهره. در واقع که به این قضیه حتم دارم.",
                "dir": "right"
              },
              {
                "para": "ارتش کل شهرو بسته، تا جلوی مردم رو از فرار و شیوع این بیماری بگیره. عمده‌ی شهروندا هم یا جون‌شون رو از دست دادن یا در معرض این بیماری قرار گرفتن. می‌دونم که قرنطینه‌کردن این شهر، تصمیم درستی‌ـه، اما برای خودم کاری جز ابراز تاسف نمی‌تونم انجام بدم. اینکه آلوده بشم یا بخورنم، مهم نیست. آینده‌ی من مشخصه. تمام چیزی هم که برام مونده، روزنامه‌نگاری‌ـه. تا وقتی هم که معمای این بیماریِ کشنده رو حل نکنم، دست نمی‌کشم. تازگی ولی به این پی بردم که این بیماری از طریق هوا قابل انتقال نیست، چرا که روش دیگه‌ای رو در پیش می‌گیره.",
                "dir": "right"
              }
            ]
          },
          {
            "id": 11,
            "src": require('../assets/img/re3n/files/mechanic-s-memo/mechanic-s-memo.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/files#!mechanics-memo",
            "location": [
              {
                "txt": "Location",
                "map": require('../assets/img/re3n/files/mechanic-s-memo/map/mechanic-s-memo-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/maps/uptown-and-downtown/downtown/cable-car-rear-carriage",
                "map_source": "Evil Resource",
              }
            ],
            "url": "mechanic-s-memo",
            "title": "Mechanic's Memo",
            "og_content":[
              {
                "para": "I know that you're intimidated by your new job Kevin, so let me tell you how to make sure that you and your trains get along just fine. You see, these carriages were made in 1968, and then imported from Europe. Sometimes they get rickety, but they still work because they are simple, stubborn, and strong. We can always depend on them. If they have a bad day and are malfunctioning, you'll need to take a good look at their circuits for any trouble. Once you discover what's wrong, you'll be able to fix it easily.",
                "dir": "left"
              },
              {
                "para": "I'm sure that you'll be able to avoid those nasty little malfunctions if you check the parts every day. These old trains will surely have problem if you don't remember to check them out. Just remember that if you need to replace anything, you have to choose a suitable part. When I say suitable, I mean that even if you can't find another original part, you'd better find something that works good enough. Even with regard to oil, you must always prepare good quality oil for these trains.",
                "dir": "left"
              },
              {
                "para": "Never forget Kevin that a man may betray others, but a machine won't.",
                "dir": "left"
              }
            ],
            "fa_content":[
              {
                "para": "متوجه‌ام که شغل جدیدت دستپاچه‌ت کرده کِوین، پس بذار بهت توضیح بدم که چطور می‌تونی از هماهنگیِ میون خودت و قطارایی که داری اطمینان حاصل کنی. می‌دونی که این کوپه‌ها ۱۹۶۸ ساخته می‌شن، و بعدش از اروپا واردشون می‌کنن. شاید زوارشون در بره ها، اما کارکردشون سر جاشه؛ چون که اونا ساده، سرسخت، و مستحکم‌ان. و ما همیشه می‌تونیم به اونا اطمینان کنیم. اگه هم روز بدشون از راه رسید و نقص فنی پیدا کردن، نیازه که به مدارهاشون یه نگاه دقیق بندازی و دنبال مشکل بگردی. و به محض اینکه فهمیدی چشه، می‌تونی به سادگی درستش کنی.",
                "dir": "right"
              },
              {
                "para": "حتم دارم اگه هر روز به این قطعات سر بزنی، می‌تونی از نقصای فنی کوچیک و اذیت‌کننده‌شون جلوگیری کنی. ولی کافیه یادت بره همین قطارای قدیمی رو بررسی کنی، تا مشکلات‌شون شروع بشه. فقط یادت باشه که اگه نیاز به جایگزینیِ چیزی داشتی، باید از قطعه‌ی مناسبش استفاده کنی. منظورمم از کلمه‌ی مناسب اینه که اگه نتونستی قطعه‌ی اصلی رو پیدا کنی، بهتره چیزی رو گیر بیاری که قد کافی درست کار کنه. در رابطه با سوخت هم، همیشه باید سوخت باکیفیتی رو برای این قطارا تهیه کنی.",
                "dir": "right"
              },
              {
                "para": "هیچ‌وقت هم فراموش نکن کِوین، که آدم ممکنه خائن از آب در بیاد، ولی ماشین اینطور نیست.",
                "dir": "right"
              }
            ]
          },
          {
            "id": 12,
            "src": require('../assets/img/re3n/files/manager-s-report/manager-s-report.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/files#!managers-report",
            "location": [
              {
                "txt": "Location",
                "map": require('../assets/img/re3n/files/manager-s-report/map/manager-s-report-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/maps/uptown-and-downtown/uptown/sales-office",
                "map_source": "Evil Resource",
              }
            ],
            "url": "manager-s-report",
            "title": "Manager's Report",
            "og_content":[
              {
                "para": "Before you begin your new position, please allow me to give you some advice. Some of the medicines in the storage room are unstable and their quality will deteriorate under changing temperatures or humidity. Therefore, you must remember to keep the temperature the same in the storage room at all times. You should personally check it everyday. Although the computer checks it around the clock, a machine is not perfect. Try and remember that a machine is no more than a tool to be used by people.",
                "dir": "left"
              },
              {
                "para": "You must check all personnel coming and going to the storage room. Many dangerous drugs are stored there, if any of them are missing you have a serious problem on your hands. The door to the storage room is always locked, but when you let personnel into it, you will need to have them hand in their documents. And above all else, remember that if you find anything suspicious, contact your boss immediately.",
                "dir": "left"
              },
              {
                "para": "If you forget the password to lock the door, try and remember that it is a word that everyone is familiar with. Don't forget that once a new product is shipped, the password will be updated again. You can always enter the password from the terminal of the PC for administration.",
                "dir": "left"
              }
            ],
            "fa_content":[
              {
                "para": "قبل اینکه به سِمت جدیدت رو بیاری، لطفا اجازه بده تا راهنمایی‌ت کنم. یه سری از داروهای تو انبار، پایداری‌ای تو کارشون نیست و کیفیت‌شون، تحت تاثیر تغییر دما یا رطوبت، رو به وخامته. برای همینم ثابت‌نگه‌داشتنِ همیشگی دمای انبار رو نباید فراموش کنی. و لازمه که هر روز بهش سر بزنی. اگرچه که همیشه‌ی خدا کامپیوتر رصدش می‌کنه، ولی یه دستگاه همیشه بی‌نقص نیست. یادت باشه که ماشین، چیزی جز ابزارِ مورد استفاده‌ی مردم به حساب نمیاد.",
                "dir": "right"
              },
              {
                "para": "لازمه همه‌ی کارمندایی که به انبار وارد می‌شن یا ازش خروج می‌کنن رو مورد بررسی قرار بدی. از اونجایی هم که داروهای خطرناک زیادی اینجا نگه‌داری می‌شه، گم‌شدنِ هر کدوم‌شون می‌تونه برات دردسرآفرین باشه. درِ منتهی به انبار ولی همیشه قفله، مگه اینکه بذاری کارمندا بیان تو، تا نیاز به تحویل مدارک‌شون داشته باشی. و از همه مهم‌تر، اگه چیز مشکوکی به چشِت خورد، فورا با مافوقِت تماس بگیر.",
                "dir": "right"
              },
              {
                "para": "اگر رمز عبور رو قفل‌کردنِ در رو فراموش کردی، یادت باشه که این همون کلمه‌ای‌ـه که هر کسی باهاش آشنایی داره. از یاد هم نبر که وقتی یه محصول می‌ره پِی ارسال، این وسط رمز عبور مجددا به‌روز می‌شه. برای سازماندهی هم، از طریق ترمینالِ کامپیوتر می‌تونی رمز عبور رو وارد کنی.",
                "dir": "right"
              }
            ]
          },
          {
            "id": 13,
            "src": require('../assets/img/re3n/files/business-fax/business-fax.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/files#!business-fax",
            "location": [
              {
                "txt": "Location",
                "map": require('../assets/img/re3n/files/business-fax/map/business-fax-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/maps/uptown-and-downtown/uptown/sales-office",
                "map_source": "Evil Resource",
              }
            ],
            "url": "business-fax",
            "title": "Business Fax",
            "og_content":[
              {
                "para": "\"Order Sheet\"",
                "dir": "center"
              },
              {
                "para": "The liquid medicine named VT-J98 is suitable to cultivate the NE-T type virus. Therefore, we will need to order additional quantities of it.",
                "dir": "left"
              },
              {
                "para": "U.E. Sixth Laboratory",
                "dir": "right"
              }
            ],
            "fa_content":[
              {
                "para": "«فُرم سفارش»",
                "dir": "center"
              },
              {
                "para": "این مایع دارویی، تحت نامِ وی‌تی-جِی۹۸، برای پرورش ویروس اِن‌ای-تی مناسب است. و به تبع نیز نیاز است تا مقدار بیشتری از آن را سفارش دهیم.",
                "dir": "right"
              },
              {
                "para": "آزمایشگاه ششمِ یو.ای",
                "dir": "left"
              }
            ]
          },
          {
            "id": 14,
            "src": require('../assets/img/re3n/files/dario-s-memo/dario-s-memo.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/files#!darios-memo",
            "location": [
              {
                "txt": "Location",
                "map": require('../assets/img/re3n/files/dario-s-memo/map/dario-s-memo-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/maps/uptown-and-downtown/uptown/warehouse",
                "map_source": "Evil Resource",
              }
            ],
            "url": "dario-s-memo",
            "title": "Dario's Memo",
            "og_content":[
              {
                "para": "I can't help but wonder if anyone will read these words, but writing them will help me maintain my sanity if nothing else.",
                "dir": "left"
              },
              {
                "para": "After I've become a meal for those undead monsters, will the G.I.s responsible for sealing off the town laugh upon discovering my corpse? So is this how it's supposed to end? I don't want to die. I'm just not ready...",
                "dir": "left"
              },
              {
                "para": "My wife, daughter, mother... My entire family has been killed. But none of that matters anymore. Right now, my life is the only important thing. That's all that matters.",
                "dir": "left"
              },
              {
                "para": "I never would have pictured my end to be like this. I had so much left to do. Rather than becoming a salesman, I should have tried my hand at being a novelist. It's what I've always wanted, but my mother would only tell me you have a long way to go.",
                "dir": "left"
              },
              {
                "para": "Why did I ever listen to her?",
                "dir": "left"
              },
              {
                "para": "But this looks like the end for the great Dario Rosso, novelist extraordinaire.",
                "dir": "left"
              },
              {
                "para": "Cut down before his prime...",
                "dir": "left"
              }
            ],
            "fa_content":[
              {
                "para": "بعید می‌دونم کسی این نوشته رو بخونه، اما حداقل با نوشتن‌اش، از حفظِ سلامتِ روانم گره باز می‌شه.",
                "dir": "right"
              },
              {
                "para": "وقتی به خوراک اون هیولاهای نامیرا تبدیل شم، آیا جی.آی.های مسئول ممنوع‌الورودکردن شهر، سر جسدم قهقهه می‌زنن؟ قراره همین‌جوری تموم شه؟ من که نمی‌خوام بمیرم. اصلا آماده‌ش هم نیستم...",
                "dir": "right"
              },
              {
                "para": "زنم، دخترم، مادرم... تموم خانواده‌م به قتل رسیدن. ولی دیگه هیچ‌کدوم‌شون اهمیتی ندارن. در حال حاضر، این زندگیِ منه که این وسط مهمه. این تنها چیزی‌ـه که اهمیت داره.",
                "dir": "right"
              },
              {
                "para": "هیچ‌وقت متصور نمی‌شدم چنین عاقبتی نصیبم شه. کلی هم کار برای انجام دارم. به جای تبدیل‌شدن به یه فروشنده، باید می‌زدم تو کار رُمان‌نویسی. این چیزی بود که همیشه می‌خواستم، ولی مادرم همیشه می‌گفت که تو راه درازی در پیش داری.",
                "dir": "right"
              },
              {
                "para": "اصلا چرا بهش گوش می‌دادم؟",
                "dir": "right"
              },
              {
                "para": "ولی گویا اینجا برای داریو روسوی بزرگ، رمان‌نویسِ خفن، آخر خطه.",
                "dir": "right"
              },
              {
                "para": "پرنده‌ای که قبلِ پَرکشیدن، خداحافظی می‌کنه...",
                "dir": "right"
              }
            ]
          },
          {
            "id": 15,
            "src": require('../assets/img/re3n/files/operation-instruction/operation-instruction.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/files#!operation-instruction",
            "location": [
              {
                "txt": "Location",
                "map": require('../assets/img/re3n/files/operation-instruction/map/operation-instruction-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/maps/raccoon-city-clock-tower/clock-tower-1f/main-hall",
                "map_source": "Evil Resource",
              }
            ],
            "url": "operation-instruction",
            "title": "Operation Instruction",
            "og_content":[
              {
                "para": "Order for UBCS Echo Team:",
                "dir": "left"
              },
              {
                "para": "Wipe out the downtown area of the infestation and then evacuate the remaining citizens to the clock tower. Among the civilians, remember to give priority to the employees of Umbrella's affiliates. Remember to stay alert because the infected have a high endurance rate and will strike without hesitation.",
                "dir": "left"
              },
              {
                "para": "Evacuation Procedure:",
                "dir": "left"
              },
              {
                "para": "1. Once the mission is complete, or when it becomes too impossible to accomplish, evacuate immediately.",
                "dir": "left"
              },
              {
                "para": "2. We'll deploy a helicopter that is waiting in the suburbs, to the yard in front of the clock tower.",
                "dir": "left"
              },
              {
                "para": "3. When you are ready for evacuation, ring the bell of the clock tower to signal the helicopter.",
                "dir": "left"
              }
            ],
            "fa_content":[
              {
                "para": "دستور برای یوبی‌سی‌اِس اکو",
                "dir": "right"
              },
              {
                "para": "منطقه‌ی مرکزیِ شیوع را منهدم ساخته و سپس شهروندان باقیمانده را به سمت برج ساعت هدایت نمایید. فراموش نکنید که در میان عوام، اولیت با کارکنانِ واحدهای فرعیِ آمبرلاست. گوش‌به‌زنگ‌بودن را از یاد نبرید، چرا که مبتلایان از تاب‌وتحمل بالایی بهره برده و بی‌درنگ حمله‌ور می‌شوند.",
                "dir": "right"
              },
              {
                "para": "روال خروج:",
                "dir": "right"
              },
              {
                "para": "۱. به محض اتمام عملیات، یا تبدیل‌شدن آن به امری غیر ممکن، بلافاصله محل را ترک کنید.",
                "dir": "right"
              },
              {
                "para": "۲. ما به اعزام یک هلیکوپتر خواهیم پرداخت که در حومه‌ی شهر در حال انتظار است، تا به سمت محوطه‌ی جلوی برج ساعت حرکت کند.",
                "dir": "right"
              },
              {
                "para": "۳. وقتی برای ترکِ محل آماده شدید، ناقوس را به صدا درآورید تا هلیکوپتر را متوجه سازید.",
                "dir": "right"
              }
            ]
          },
          {
            "id": 16,
            "src": require('../assets/img/re3n/files/art-picture-postcard/art-picture-postcard.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/files#!art-picture-postcard",
            "location": [
              {
                "txt": "Location",
                "map": require('../assets/img/re3n/files/art-picture-postcard/map/art-picture-postcard-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/maps/raccoon-city-clock-tower/clock-tower-1f/small-library",
                "map_source": "Evil Resource",
              }
            ],
            "url": "art-picture-postcard",
            "title": "Art Picture Postcard",
            "og_content":[
              {
                "para": "A picture postcard of antique clocks.",
                "dir": "left"
              },
              {
                "para": "The following verse is printed.",
                "dir": "left"
              },
              {
                "para": "\"Give your soul to the goddess. Put your hands together to pray before her.\"",
                "dir": "left"
              }
            ],
            "fa_content":[
              {
                "para": "یه کارت‌پستال از ساعتای عتیقه.",
                "dir": "right"
              },
              {
                "para": "روش اینو نوشته:",
                "dir": "right"
              },
              {
                "para": "«روحت را در اختیار ایزدبانو قرار دِه. و دستانت را در کنار هم بگذار تا در محضرِ او نیایش کنی.»",
                "dir": "right"
              }
            ]
          },
          {
            "id": 17,
            "src": require('../assets/img/re3n/files/mercenary-s-pocketbook/mercenary-s-pocketbook.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/files#!mercenarys-pocketbook",
            "location": [
              {
                "txt": "Location",
                "map": require('../assets/img/re3n/files/mercenary-s-pocketbook/map/mercenary-s-pocketbook-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/maps/raccoon-city-clock-tower/clock-tower-1f/clock-room",
                "map_source": "Evil Resource",
              }
            ],
            "url": "mercenary-s-pocketbook",
            "title": "Mercenary's Pocketbook",
            "og_content":[
              {
                "para": "September 26th",
                "dir": "left"
              },
              {
                "para": "It's only been three hours since the mission started, but the team is down to me and Campbell. The number of the zombies is far greater than we expected. There is no hope left for this city. We have already injected the antibody for the virus, but I'm not sure that it will work. I don't know if I will survive...",
                "dir": "left"
              },
              {
                "para": "September 27th",
                "dir": "left"
              },
              {
                "para": "We managed to reach the clock tower. Out of desperation we robbed some wounded members of their weapons and used the surviving citizens as decoys. We were taught to do this in order to survive in the battle field, but I never enjoyed it. However, a girl showed up at the clock tower before me. She is one of the survivors. She looks just like my sister before she starved to death...",
                "dir": "left"
              },
              {
                "para": "September 28th",
                "dir": "left"
              },
              {
                "para": "I wanted to evacuate as soon as possible, but the girl didn't. Her father insisted that he wouldn't leave the city where his beloved wife rests in peace. I really wanted to save the girl, but Campbell said, \"All I care about is our lives.\" That's how I felt before, but now... The clock tower has become a dangerous place and I don't want to make anymore mistakes...",
                "dir": "left"
              }
            ],
            "fa_content":[
              {
                "para": "۲۶ سپتامبر",
                "dir": "right"
              },
              {
                "para": "همه‌ش سه ساعته که از شروع عملیات گذشته، ولی از تیم فقط من و کمپل موندیم. تعداد زامبی‌ها هم از چیزی که فکر می‌کردیم، خیلی بیشتره. امیدی به این شهر نیست. ما از قبل، آنتی‌بادیِ این ویروس رو تزریق کردیم، که خب مطمئن نیستم اثری داشته باشه. از زنده‌موندن‌ام بی‌خبرم...",
                "dir": "right"
              },
              {
                "para": "۲۷ سپتامبر",
                "dir": "right"
              },
              {
                "para": "موفق شدیم تا به برج ساعت دست پیدا کنیم. از روی ناچاری اما، اسلحه‌ی برخی از افراد زخمی رو کش رفتیم و از شهرواندای به‌جای‌مونده به عنوان تله استفاده کردیم. به ما گفته شده بود که برای زنده‌موندن تو میدون جنگ، این شیوه رو در پیش بگیریم، که خب من اصلا باهاش حال نکردم. با این وجود ولی یه دختر، توی برج ساعت و درست جلو روم، از راه می‌رسه. یکی از بازمونده‌ها... اون عین خواهرم بود، قبلِ اینکه از گرسنگی جونش رو از دست بده...",
                "dir": "right"
              },
              {
                "para": "۲۸ سپتامبر",
                "dir": "right"
              },
              {
                "para": "می‌خواستم در اولین فرصت از اینجا خارج بشم، ولی اون دختر چنین قصدی نداشت. باباش اصرار می‌کرد که قرار نیست شهرو، به عنوان محلی که همسرش به خاک سپرده شده، ترک کنه. من واقعا می‌خواستم دختره رو نجات بدم، ولی کمپل می‌گفت «این جون ماست که مهمه». قبلاها چنین حسی داشتم ها، ولی الآن... برج ساعت هم خطرناک شده و دیگه نمی‌خوام دست به اشتباه بزنم...",
                "dir": "right"
              }
            ]
          },
          {
            "id": 18,
            "src": require('../assets/img/re3n/files/director-s-diary/director-s-diary.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/files#!directors-diary",
            "location": [
              {
                "txt": "Location",
                "map": require('../assets/img/re3n/files/director-s-diary/map/director-s-diary-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/maps/raccoon-city-hospital/hospital-1f/doctors-lounge",
                "map_source": "Evil Resource",
              }
            ],
            "url": "director-s-diary",
            "title": "Director's Diary",
            "og_content":[
              {
                "para": "September 10th",
                "dir": "left"
              },
              {
                "para": "These patients suffer from gangrene and congestion of their blood at first. Then their mind slowly deteriorates. In the end, there is nothing left of their mind. When that happens even mercy killing seems pointless. After all, they are already dead...",
                "dir": "left"
              },
              {
                "para": "This disease is unlike anything I have ever witnessed. Once the patient's mind is gone, they become flesh hunger monsters and act like wild animals who are on some type of bloodlust.",
                "dir": "left"
              },
              {
                "para": "September 18th",
                "dir": "left"
              },
              {
                "para": "Another patient has been admitted to the hospital. He is showing symptoms of the first stages of the disease at this point, but... I haven't been able to sleep at all these past few days. I refuse to let these patients become \"zombies.\" I am not just an ordinary citizen. I am a doctor. Even if I die, my clinical charts will contribute to finding a cure.",
                "dir": "left"
              },
              {
                "para": "September 26th",
                "dir": "left"
              },
              {
                "para": "We lost most of the doctors and staff during the battle against the \"zombie\" patients. It's impossible to maintain the hospital under these conditions. And, I know that it's too late for me. I am beginning to feel that same itchy and hungry desire that all of my patients felt. It's too late for me...",
                "dir": "left"
              }
            ],
            "fa_content":[
              {
                "para": "۱۰ سپتامبر",
                "dir": "right"
              },
              {
                "para": "بیمارا در نگاه اول به قانقاریا و جمع‌شدنِ خون مبتلان. بعدها اما کَم‌کَمک زوال عقل می‌گیرن. و در پایان هم چیزی از عقل‌شون باقی نمی‌مونه. اینجاست که خلاص کردن بیمار از رنج، بی‌هدف جلوه می‌کنه. هر چی نباشه اونا دیگه مُردن...",
                "dir": "right"
              },
              {
                "para": "این بیماری، بی‌شباهت به هر چیزی‌ـه که تا به حال دیده بودم. وقتی عقل از سر بیمار می‌پره، اون به هیولای تشنه‌ی گوشتی تبدیل می‌شه که با عمل‌کردن مثل حیوونای وحشی، درجه‌ای از تشنگیِ خون رو به ارث می‌بره.",
                "dir": "right"
              },
              {
                "para": "۱۸ سپتامبر",
                "dir": "right"
              },
              {
                "para": "یه مریضِ دیگه راهی بیمارستان می‌شه. در حال حاضر هم علائم اولیه‌ی این بیماری رو از خودش بروز می‌ده، اما... اصلا این چند روزه خوابم نبرد. نمی‌خوام این مریضا تبدیل به «زامبی» بشن. من هم یه شهروند معمولی نیستم، دکترم. حتی اگه بمیرم هم نمودارهای مریض‌هام، برای چاره‌جوییِ این بیماری، وارد ماجرا می‌شن.",
                "dir": "right"
              },
              {
                "para": "۲۶ سپتامبر",
                "dir": "right"
              },
              {
                "para": "عمده‌ی دکترا و کارکنای اینجا رو طی نبرد با بیمارای «زامبی‌شده» از دست دادیم. غیر ممکنه بیمارستان رو، توی این وضعیت، بتونیم نگه داریم. و اینکه دیگه واسه‌م دیره. درست همون حس خارش و گرسنگی‌ای رو دارم که تمام مریضام داشتن. از من که گذشت...",
                "dir": "right"
              }
            ]
          },
          {
            "id": 19,
            "src": require('../assets/img/re3n/files/photo-d/photo-d.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/files#!photo-d",
            "location": [
              {
                "txt": "Location",
                "map": require('../assets/img/re3n/files/photo-d/map/photo-d-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/maps/raccoon-city-hospital/hospital-4f/data-room",
                "map_source": "Evil Resource",
              }
            ],
            "url": "photo-d",
            "title": "Photo D",
            "og_content":[
              {
                "para": "The zombies are walking.",
                "dir": "left"
              },
              {
                "para": "It says, \"The effects of the \"T-virus\" on the backside.",
                "dir": "left"
              }
            ],
            "fa_content":[
              {
                "para": "زامبی‌ها پرسه می‌زنن.",
                "dir": "right"
              },
              {
                "para": "پشتش نوشته «تاثیرات ویروس تی».",
                "dir": "right"
              }
            ]
          },
          {
            "id": 20,
            "src": require('../assets/img/re3n/files/medical-instruction-manual/medical-instruction-manual.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/files#!medical-instruction-manual",
            "location": [
              {
                "txt": "Location",
                "map": require('../assets/img/re3n/files/medical-instruction-manual/map/medical-instruction-manual-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/maps/raccoon-city-hospital/hospital-b3/experiment-room",
                "map_source": "Evil Resource",
              }
            ],
            "url": "medical-instruction-manual",
            "title": "Medical Instruction Manual",
            "og_content":[
              {
                "para": "Umbrella Medical Service",
                "dir": "left"
              },
              {
                "para": "North America Division",
                "dir": "left"
              },
              {
                "para": "Douglas Rover",
                "dir": "left"
              },
              {
                "para": "In order to activate the synthesizer to cultivate the vaccine, please follow the procedure as detailed below:",
                "dir": "left"
              },
              {
                "para": "1. Supply enough energy to the system.",
                "dir": "left"
              },
              {
                "para": "2. Set the medium base to the device.",
                "dir": "left"
              },
              {
                "para": "When the device is ready, you can start mixing the vaccine medium. To mix the vaccine, you will need to control the five levers. This will cause the two gauges to increase or decrease. If you adjust the two gauges so that they stop at the center, the vaccine medium will then be produced automatically.",
                "dir": "left"
              }
            ],
            "fa_content":[
              {
                "para": "سرویس داروییِ آمبرلا",
                "dir": "right"
              },
              {
                "para": "شعبه‌ی آمریکای شمالی",
                "dir": "right"
              },
              {
                "para": "داگلاس روور",
                "dir": "right"
              },
              {
                "para": "به منظور فعالسازیِ دستگاه فرآوری، برای پرورش واکسن، لطفا این پروسه را که با جزئیات شرح داده شده دنبال کنید:",
                "dir": "right"
              },
              {
                "para": "۱. انرژی لازم را برای سیستم تامین نمایید.",
                "dir": "right"
              },
              {
                "para": "۲. محفظه‌ی محلول را درون دستگاه قرار دهید.",
                "dir": "right"
              },
              {
                "para": "به هنگام آماده‌سازی دستگاه، می‌توان ترکیب‌سازیِ محلولِ واکسن را شروع کرد. برای این کار، نیاز است تا کنترل پنج اهرم به دست گرفته شود. امری که سبب می‌شود تا درجه‌ی دو سنجش‌گر، افزایش یا کاهش یابد. اگر این دو به گونه‌ای تنظیم شوند که در مرکز متوقف گردند، محلولِ واکسن خودبخود فرآوری می‌شود.",
                "dir": "right"
              }
            ]
          },
          {
            "id": 21,
            "src": require('../assets/img/re3n/files/photo-e/photo-e.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/files#!photo-e",
            "location": [
              {
                "txt": "Location",
                "map": require('../assets/img/re3n/files/photo-e/map/photo-e-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/maps/raccoon-city-outskirts/park/park-office",
                "map_source": "Evil Resource",
              }
            ],
            "url": "photo-e",
            "title": "Photo E",
            "og_content":[
              {
                "para": "The zombies are attacking.",
                "dir": "left"
              }
            ],
            "fa_content":[
              {
                "para": "زامبی‌ها تاخت‌وتاز راه انداختن.",
                "dir": "right"
              }
            ]
          },
          {
            "id": 22,
            "src": require('../assets/img/re3n/files/written-order-to-supervisors/written-order-to-supervisors.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/files#!written-order-to-supervisors",
            "location": [
              {
                "txt": "Location",
                "map": require('../assets/img/re3n/files/written-order-to-supervisors/map/written-order-to-supervisors-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/maps/raccoon-city-outskirts/park/forest-path",
                "map_source": "Evil Resource",
              }
            ],
            "url": "written-order-to-supervisors",
            "title": "Written Order to Supervisors",
            "og_content":[
              {
                "para": "Mission Requirements: Bravo 16",
                "dir": "left"
              },
              {
                "para": "1. Obtain and secure sample of all the information pertaining to this case. Observe and record combat data on the UBCS.",
                "dir": "left"
              },
              {
                "para": "2. Destroy all the evidence including the medical facility that has the medical treatment data.",
                "dir": "left"
              },
              {
                "para": "3. Check the guinea pig's ability to accomplish the mission.",
                "dir": "left"
              },
              {
                "para": "Once your mission is complete, evacuate the area. Remember that you must not help anyone who is not a supervisor, nor bring anything back that might be traced to where it belongs.",
                "dir": "left"
              }
            ],
            "fa_content":[
              {
                "para": "ملزومات عملیات: براوو ۱۶",
                "dir": "right"
              },
              {
                "para": "۱. یه نمونه از کلیه‌ی اطلاعات این پرونده رو آماده و حفظ کنین. داده‌های مربوط به زدوخورد یوبی‌سی‌اِس رو مورد مشاهده و ثبت‌وضبط قرار بدین.",
                "dir": "right"
              },
              {
                "para": "۲. تمامی شواهد، از جمله تاسیسات دارویی‌ای که اطلاعات درمانی به دست داره رو، از بین ببرین.",
                "dir": "right"
              },
              {
                "para": "۳. تواناییِ موش آزمایشگاهی رو مورد بررسی قرار بدین تا ماموریت با موفقیت به پایان برسه.",
                "dir": "right"
              },
              {
                "para": "به محض اتمام عملیات، محل رو ترک کنین. و به یاد داشته باشین که نه به غیر مافوق‌ها کمکی برسونین، و نه چیزی که ممکنه جاش لو بره رو برگردونین.",
                "dir": "right"
              }
            ]
          },
          {
            "id": 23,
            "src": require('../assets/img/re3n/files/supervisor-s-report/supervisor-s-report.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/files#!supervisors-report",
            "location": [
              {
                "txt": "Location",
                "map": require('../assets/img/re3n/files/supervisor-s-report/map/supervisor-s-report-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/maps/raccoon-city-outskirts/park/secret-communications-room",
                "map_source": "Evil Resource",
              }
            ],
            "url": "supervisor-s-report",
            "title": "Supervisor's Report",
            "og_content":[
              {
                "para": "The endurance ability of the contaminated guinea pigs is truly incredible. Even when shot in a vital area, they can sometimes survive for several days without taking care of the wound. However, after prolonged exposure to the virus, the guinea pigs' intelligence level decreases to that of an insect. Even though reviving the dead seems too disgusting, the virus may still be of use. If we inject the virus into our POWs and release them, they would return to their units and then turn into zombies. This plan may work well for us in the future.",
                "dir": "left"
              },
              {
                "para": "In certain areas, the virus seems to have caused the mutation of animals and plants. It may be difficult, but it'll make a good sample for the bio weapon development. I've heard that there is a giant alligator, but I have only encountered a giant creature moving under ground. I don't even want to imagine what creature spawned that monster.",
                "dir": "left"
              },
              {
                "para": "I encountered \"NEMESIS.\" If I didn't know about it, I'd have been contaminated and would have become one of them by now. If it is still walking around in the city, its mission is not yet over. S.T.A.R.S. members must be very tough, since they have survived until this point. However, they cannot hold out forever...",
                "dir": "left"
              }
            ],
            "fa_content":[
              {
                "para": "الحق که موش‌های آزمایشگاهیِ آلوده، استقامتِ حیرت‌آوری دارن. حتی به محض شلیک به ناحیه‌ی حیاتی‌شون هم، بدون توجه به زخم و برای روزها، گاها ممکنه دووم بیارن. هرچند که تحت تماس طولانی‌مدت با ویروس، سطح هوشیاری‌شون در حد یه حشره میاد پایین. و با وجود اینکه به‌هوش‌آوردن این تلفات، کار چندش‌آوری‌ـه، ولی ویروس ممکنه همچنان به دردمون بخوره. اگه هم ویروس رو به پی‌اودابلیوهامون تزریق و بعد رهاشون کنیم، به سمت واحدهاشون برمی‌گردن و تبدیل به زامبی می‌شن. شاید این نقشه بعدها به کارمون بیاد.",
                "dir": "right"
              },
              {
                "para": "به نظر میاد که ویروس، توی نواحی خاصی، باعث دگرگونیِ حیوونا و گیاها می‌شه. شاید سخت باشه، اما این یه نمونه‌ی خوب برای توسعه‌ی سلاح بیولوژیکی‌مون به حساب میاد. خبرایی هم مبنی بر حضور یه تمساح گنده‌مُنده به گوشم خورده، ولی توی زیرزمین که فقط به یه موجود غول‌پیکر بر خوردم. حتی نمی‌خوامم فکر کنم که چه موجودی این هیولا رو پس انداخته.",
                "dir": "right"
              },
              {
                "para": "با «نمسیس» مواجه شدم. اگه چیزی ازش نمی‌دونستم، آلوده شده بودم و تا الآن به یکی از همونا تغییر هویت می‌دادم. اگه هنوز داره تو شهر پرسه می‌زنه، پس ماموریتش همچنان به پایان نرسیده. اعضای استارز هم سرسخت‌ان که تا به الآن دووم آوردن. هرچند که اونا تا ابد طاقت نمیارن...",
                "dir": "right"
              }
            ]
          },
          {
            "id": 24,
            "src": require('../assets/img/re3n/files/fax-from-headquarters/fax-from-headquarters.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/files#!fax-from-headquarters",
            "location": [
              {
                "txt": "Location",
                "map": require('../assets/img/re3n/files/fax-from-headquarters/map/fax-from-headquarters-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/maps/raccoon-city-outskirts/park/secret-communications-room",
                "map_source": "Evil Resource",
              }
            ],
            "url": "fax-from-headquarters",
            "title": "Fax From Headquarters",
            "og_content":[
              {
                "para": "Attention. The Raccoon City project has been abandoned. Our political maneuvering in the senate to delay their plans are now futile. All supervisors should evacuate immediately. The US army is going to execute their plan tomorrow morning. The city will be obliterated at daybreak for sure.",
                "dir": "left"
              }
            ],
            "fa_content":[
              {
                "para": "توجه. پروژه‌ی راکون رها شده است. تمهیدات سیاسی‌مان در مجلس سنا نیز برای به‌تاخیرانداختن نقشه‌هایشان دیگر نتیجه‌ی مثبتی در پی ندارد. تمامی مسئولان باید محل را بلافاصله ترک کنند. قرار است تا ارتش آمریکا فردا، به وقت صبح، نقشه‌اش را عملی سازد. شهر در سیپده‌دم با اطمینان نابود خواهد شد.",
                "dir": "right"
              }
            ]
          },
          {
            "id": 25,
            "src": require('../assets/img/re3n/files/manager-s-diary/manager-s-diary.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/files#!managers-diary",
            "location": [
              {
                "txt": "Location",
                "map": require('../assets/img/re3n/files/manager-s-diary/map/manager-s-diary-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/maps/raccoon-city-outskirts/dead-factory-2f/resting-room",
                "map_source": "Evil Resource",
              }
            ],
            "url": "manager-s-diary",
            "title": "Manager's Diary",
            "og_content":[
              {
                "para": "April 25th",
                "dir": "left"
              },
              {
                "para": "Today is my 30th birthday. I was transferred to this facility today. I am very happy because the work environment is very different from life in the university.",
                "dir": "left"
              },
              {
                "para": "May 14th",
                "dir": "left"
              },
              {
                "para": "The disposal system has been completed. Using a special kind of gas, it can decompose the cells of the guinea pigs. We have to try this out before beginning practical usage of the system, since it is not 100% stable yet.",
                "dir": "left"
              },
              {
                "para": "May 20th",
                "dir": "left"
              },
              {
                "para": "While I was checking the treatment room, the door shut, and I was locked inside. I couldn't get out for one hour. I guess even if you have the key card, it's useless when you are locked inside.",
                "dir": "left"
              },
              {
                "para": "June 7th",
                "dir": "left"
              },
              {
                "para": "The guinea pigs we have to dispose of are increasing. The system is not working smoothly. The laboratory staff doesn't listen to my opinions and I am getting extremely frustrated.",
                "dir": "left"
              },
              {
                "para": "July 16th",
                "dir": "left"
              },
              {
                "para": "We can't dispose of all the bodies and the quality of the liquid medicine is not good enough, either...",
                "dir": "left"
              },
              {
                "para": "July 29th",
                "dir": "left"
              },
              {
                "para": "Though the function of the system decreases, the number of the bodies we have to dispose doesn't. The infection level has increased and the antibodies we are using is no match for the new mutation of the virus. Some of the workers have been infected by the disease. I have continued to work, but I always keep a gun with me. I must remember to save one bullet for me. I want to weep. I don't want to die here. I swear that I'll lose my mind if I imagine how painful the death will be...",
                "dir": "left"
              }
            ],
            "fa_content":[
              {
                "para": "۲۵ آوریل",
                "dir": "right"
              },
              {
                "para": "امروز تولد ۳۰ سالگی‌مه. در حال حاضر هم به این موسسه منتقل شدم. خیلی خوشحالم که محیط کاری با زندگی دانشگاهی، به کل متفاوته.",
                "dir": "right"
              },
              {
                "para": "۱۴ مه",
                "dir": "right"
              },
              {
                "para": "سیستم دفع هم تکمیل شد. با استفاده از یه گاز ویژه، این سیستم می‌تونه سلول‌های متعلق به موش‌های آزمایشگاهی‌مون رو از هم بپاشونه. از اونجایی هم که سیستم، صددرصد پایدار نیست، قبلِ کار عملی با اون باید حتما امتحانش کرد.",
                "dir": "right"
              },
              {
                "para": "۲۰ مه",
                "dir": "right"
              },
              {
                "para": "موقع بررسیِ اتاق درمان، در بسته می‌شه و منم حبس می‌شم. تا یه ساعت هم نشد بیام بیرون. حدسم اینه که وقتی حبس بشی، حتی داشتن کلید کارتی هم دردی رو دوا نمی‌کنه.",
                "dir": "right"
              },
              {
                "para": "۷ ژوئن",
                "dir": "right"
              },
              {
                "para": "موش‌های آزمایشگاهی‌ای که باید کلک‌شون رو بکنیم، رو به افزایش‌ان. سیستم دردسر به بار میاره. کارکنای آزمایشگاه به نظراتم بها نمی‌دن، و این منو شدیدا دلسرد می‌کنه.",
                "dir": "right"
              },
              {
                "para": "۱۶ ژوئیه",
                "dir": "right"
              },
              {
                "para": "از شرِ همه‌ی اجساد نمی‌تونیم خلاص شیم، و کیفیت شربت‌های دارویی هم تعریفی نداره...",
                "dir": "right"
              },
              {
                "para": "۲۹ ژوئن",
                "dir": "right"
              },
              {
                "para": "با اینکه عملکرد سیستم روندِ رو به کاهشی رو طی می‌کنه، ولی شُمار اجسادی که باید کلک‌شون رو بکنیم اینطور نیستن. سطح آلودگی افزایش پیدا کرده و آنتی‌بادی‌های مورد استفاده‌ی ما برای جهش این ویروس، چاره‌گشا نیستن. بعضی از کارکنا هم به این بیماری مبتلا شدن. من به کارم ادامه دادم، با تفنگی که همیشه همرامه. نباید فراموش کنم که یه گلوله رو برای خودم نگه دارم. می‌خوام بزنم زیر گریه. نمی‌خوام اینجا بمیرم. اگه بفهمم که چقدر مرگ دردناکه، قسم می‌خورم که رد می‌دم...",
                "dir": "right"
              }
            ]
          },
          {
            "id": 26,
            "src": require('../assets/img/re3n/files/security-manual/security-manual.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/files#!security-manual",
            "location": [
              {
                "txt": "Location",
                "map": require('../assets/img/re3n/files/security-manual/map/security-manual-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/maps/raccoon-city-outskirts/dead-factory-1f/monitoring-room",
                "map_source": "Evil Resource",
              }
            ],
            "url": "security-manual",
            "title": "Security Manual",
            "og_content":[
              {
                "para": "\"Security of the Plant\"",
                "dir": "left"
              },
              {
                "para": "Since this plan is a facility under the disguise of a deserted factory, civilians will sometimes enter. If this should occur, do not hesitate to shoot them. If they choose to surrender, arrest and then transfer them to the laboratory as new guinea pigs. You will be rewarded.",
                "dir": "left"
              },
              {
                "para": "\"Maintenance of the Device\"",
                "dir": "left"
              },
              {
                "para": "This entire plant is controlled by an epidemic prevention system. When contamination is detected in the treatment room or decomposed specimen pool, the plant will automatically be locked down for isolation. In that case, you must follow the manual to unlock it. If the contamination is over the limit, the whole system will automatically lockdown. Then, you must remain in the plant and wait for subsequent orders. Those who leave the facility without permission will suffer extreme consequences.",
                "dir": "left"
              }
            ],
            "fa_content":[
              {
                "para": "«سلامت گیاه»",
                "dir": "right"
              },
              {
                "para": "از آنجا که این گیاه، تاسیساتی‌ست در پوشش یک کارخانه‌ی ویران‌شده، شهروندان گاها به آن ورود می‌یابند. در صورت الزام به وقوع این امر، تردید برای شلیک‌شان را کنار بگذارید. اگر تصمیم به تسلیم‌شدن گرفتند، آن‌ها را دستگیر کرده و به عنوان موش‌های آزمایشگاهی جدید، به آزمایشگاه تحویل‌شان دهید. شما پاداش دریافت خواهید کرد.",
                "dir": "right"
              },
              {
                "para": "«حفظ دستگاه»",
                "dir": "right"
              },
              {
                "para": "این گیاه تماما توسط یک سیستمِ جلوگیری از شیوع، تحت کنترل است. به هنگام تشخیص آلودگی در اتاق درمان یا استخرِ نمونه‌ی تجزیه‌شده، گیاه خودبخود و به منظور ایزوله‌سازی، قرنطینه می‌شود. در این حالت، باید از راهنمای موجود برای بازکردن آن استفاده کرد. اگر آلودگی از حد مجاز خارج شود، کل سیستم به طور خودکار به انجام قرنطینه می‌پردازد. در این هنگام، می‌بایست در گیاه باقی ماند و منتظر دستورات پیاپی شد. افرادی که بدون اجازه، تاسیسات را ترک می‌کنند، از تبعات حادی رنج خواهند برد.",
                "dir": "right"
              }
            ]
          },
          {
            "id": 27,
            "src": require('../assets/img/re3n/files/incinerator-manual/incinerator-manual.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/files#!incinerator-manual",
            "location": [
              {
                "txt": "Location",
                "map": require('../assets/img/re3n/files/incinerator-manual/map/incinerator-manual-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/maps/raccoon-city-outskirts/dead-factory-1f/emergency-tunnel",
                "map_source": "Evil Resource",
              }
            ],
            "url": "incinerator-manual",
            "title": "Incinerator Manual",
            "og_content":[
              {
                "para": "The incinerator plant is one of the facilities that burns the disposable items which are sent from the laboratory. The incinerator burns the waste materials that cannot be decomposed at the treatment room. It also supplies electricity to the facility by a thermal power electricity generator. Part of the electricity is stored in the big battery installed in the facility's underground area. The electricity is used as an auxiliary power source.",
                "dir": "left"
              },
              {
                "para": "The auxiliary power circuit will be activated once the three \"auxiliary circuit units\" are properly placed in their sockets. In case the circuits are not connected automatically, a person can connect them manually to activate the system.",
                "dir": "left"
              }
            ],
            "fa_content":[
              {
                "para": "نیروگاه زباله‌سوز یکی از تاسیساتی‌ست که موادِ یک‌بارمصرفی که از آزمایشگاه فرستاده می‌شوند را می‌سوزاند. این زباله‌سوز، به سوختن ضایعاتی در اتاق درمان می‌پردازد که نمی‌توانند تجزیه شوند. همچنین این زباله‌سوز به واسطه‌ی ژنراتور حرارتی، الکتریسیته‌ی لازم را برای تاسیسات فراهم می‌آورد. بخشی از این الکتریسیته در باتری بزرگی که در زیرزمینِ تاسیسات نصب شده، ذخیره می‌شود. این الکتریسیته، به عنوان نیرودِه کمکی مورد استفاده قرار می‌گیرد.",
                "dir": "right"
              },
              {
                "para": "جریان برق کمکی در صورتی فعال می‌شود که سه «واحد جریان کمکی» به درستی در سر جایشان قرار بگیرند. در صورتی که این سه به طور خودکار به هم متصل نبودند، نیروی انسانی می‌تواند برای فعالسازی سیستم، آن‌ها را به طور دستی به یکدیگر اتصال دهد.",
                "dir": "right"
              }
            ]
          },
          {
            "id": 28,
            "src": require('../assets/img/re3n/files/classified-photo-file/classified-photo-file.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/files#!classified-photo-file",
            "location": [
              {
                "txt": "Location",
                "map": require('../assets/img/re3n/files/classified-photo-file/map/classified-photo-file-map.png'),
                "map_source_link": "https://www.evilresource.com/resident-evil-3-nemesis/maps/raccoon-city-outskirts/dead-factory-1f/car-yard",
                "map_source": "Evil Resource",
              }
            ],
            "url": "classified-photo-file",
            "title": "Classified Photo File",
            "og_content":[
              {
                "para": "In my opinion, I feel that it's too early to use this, \"Paracelsus' Sword\" in actual fighting. However, in order to acquire the G-virus that Umbrella has developed, it will be a great help to us.",
                "dir": "left"
              },
              {
                "para": "The power of the \"Rail Cannon\" is satisfactory, but please note that it is still having a few remaining problems.",
                "dir": "left"
              },
              {
                "para": "Technology Division Colonel",
                "dir": "left"
              },
              {
                "para": "Franklin Hart",
                "dir": "left"
              }
            ],
            "fa_content":[
              {
                "para": "به نظرم خیلی زوده که «شمشیر پاراسل‌سوس» رو توی مبارزه‌ی واقعی به کار ببریم. هرچند این یه کمک بزرگ به ما برای دستیابی به ویروس جی‌ـه، ویروسی که آمبرلا توسعه‌ش داده.",
                "dir": "right"
              },
              {
                "para": "قدرت «ریل‌گان» رضایت‌بخشه، ولی لطفا توجه داشته باشین که همچنان یه سری از مشکلاتش باقیه.",
                "dir": "right"
              },
              {
                "para": "سرهنگ بخش تکنولوژی",
                "dir": "right"
              },
              {
                "para": "فرانکلین هارت",
                "dir": "right"
              }
            ]
          }
        ]
      },
      {
        id: 4,
        title: 'RE4',
        name: 'Resident Evil 4',
        url: 're4',
        files:
        [
          {
            "id": 1,
            "src": require('../assets/img/re4/files/info-on-ashley/info-on-ashley.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-4/files#!info-on-ashley",
            "url": "info-on-ashley",
            "title": "Info on Ashley",
            "og_content":[
              {
                "para": "Name: Ashley Graham",
                "dir": "left"
              },
              {
                "para": "Age: 20",
                "dir": "left"
              },
              {
                "para": "Daughter of the United States President.",
                "dir": "left"
              },
              {
                "para": "She was kidnapped by an unidentified group while on her way home from her university.",
                "dir": "left"
              },
              {
                "para": "The kidnapper's motives are still unknown. Although there's reliable information that the perpetrator is an insider.",
                "dir": "left"
              },
              {
                "para": "Only a handful of people know about this kidnapping. It's been kept under wraps mostly due to the fact that we can't determine who the traitor is.",
                "dir": "left"
              },
              {
                "para": "The guys in intelligence say they have reliable information that Ashley's been sighted somewhere in Europe. But until we find out who the insider is, I don't know what to believe. It could be a ploy.",
                "dir": "left"
              },
              {
                "para": "We have very few leads as to the whereabouts of Ashley. But members of the Secret Service and anyone related to Ashley are being questioned by an investigative team.",
                "dir": "left"
              },
              {
                "para": "Even active agents are being investigated for any information. It's just a matter of time before the kidnapper is exposed.",
                "dir": "left"
              }
            ],
            "fa_content":[
              {
                "para": "نام: اشلی گراهام",
                "dir": "right"
              },
              {
                "para": "سن: ۲۰",
                "dir": "right"
              },
              {
                "para": "دختر رئیس جمهور آمریکا",
                "dir": "right"
              },
              {
                "para": "اون تو راه بازگشت از دانشگاه به خونه، توسط یه گروه مجهول‌الهویه ربوده می‌شه.",
                "dir": "right"
              },
              {
                "para": "انگیزه‌ی شخص آدم‌ربا هنوز مشخص نیست. اطلاعات موثق اما، نشون می‌دن که مجرم یه نفوذی‌ـه.",
                "dir": "right"
              },
              {
                "para": "فقط یه سری از مردم از این موضوع اطلاع دارن. و از اونجایی که نمی‌شه گفت شخص خیانت‌کار کیه، از افشای این قضیه جلوگیری شده.",
                "dir": "right"
              },
              {
                "para": "واحد خبره، با توجه به اخبار موثقی که تو دستشه اظهار می‌کنه که اشلی یه‌جایی تو اروپا رویت شده. تا وقتِ پیداکردنِ شخص نفوذی هم، نمی‌دونم که به چیزی اطمینان کنم. این می‌تونه یه حُقه باشه.",
                "dir": "right"
              },
              {
                "para": "اطلاعات کمی از محل سکونت اشلی تو دست‌مون‌ـه. بر و بچ سرویس مخفی آمریکا و حتی بستگانِ اشلی هم توسط تیم تجسس مورد بازجویی قرار می‌گیرن.",
                "dir": "right"
              },
              {
                "para": "این قضیه برای عوامل فعال هم صدق می‌کنه. کاری که دیر یا زود، و تا زمان برملاشدنِ هویتِ شخص آدم‌ربا، عملی می‌شه.",
                "dir": "right"
              }
            ]
          },
          {
            "id": 2,
            "src": require('../assets/img/re4/files/alert-order/alert-order.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-4/files#!alert-order",
            "location": [
              {
                "txt": "Location",
                "src": require('../assets/img/re4/files/alert-order/location/alert-order-location.png'),
                "map": {
                  "far": require('../assets/img/re4/files/alert-order/map/alert-order-map-far.png'),
                  "default": require('../assets/img/re4/files/alert-order/map/alert-order-map-default.png'),
                  "near": require('../assets/img/re4/files/alert-order/map/alert-order-map-near.png')
                }
              }
            ],
            "url": "alert-order",
            "title": "Alert Order",
            "og_content":[
              {
                "para": "Recently there has been information that a United States government agent is here investigating the village.",
                "dir": "left"
              },
              {
                "para": "Do not let this American agent get in contact with the prisoner.",
                "dir": "left"
              },
              {
                "para": "For those of you not yet informed, the prisoner is being held in an old house beyond the farm. We will transfer the prisoner to a more secure location in the valley when we are ready. The prisoner is to stay here until further notice. Meanwhile, do not let the American agent near the prisoner.",
                "dir": "left"
              },
              {
                "para": "We do not know how the American government found out about our village. But we are investigating.",
                "dir": "left"
              },
              {
                "para": "However, I feel that this intrusion at this particular time is not just a coincidence.",
                "dir": "left"
              },
              {
                "para": "I sense a third party other then the United States government involved here.",
                "dir": "left"
              },
              {
                "para": "My fellow men, stay alert!",
                "dir": "left"
              },
              {
                "para": "- Chief, Bitores Mendez",
                "dir": "right"
              }
            ],
            "fa_content":[
              {
                "para": "به تازگی اطلاعاتی به دست‌مان رسیده که حاکی از اعزام یک مامور، از طرف دولت آمریکا، برای بررسی دِه ماست.",
                "dir": "right"
              },
              {
                "para": "نگذارید تا این مامور آمریکایی، دستش به شخص زندانی برسد.",
                "dir": "right"
              },
              {
                "para": "برای آن‌هایی که نمی‌دانند؛ شخص زندانی داخل یک خانه‌ی قدیمی، در آن طرف مزرعه، قرار دارد. به وقتش نیز او را به منطقه‌ی امن‌تری در دَره انتقال می‌دهیم. تا اطلاع ثانوی نیز، او اینجا ماندگار است. در این بین نگذارید تا مامور آمریکایی به شخص زندانی نزدیک شود.",
                "dir": "right"
              },
              {
                "para": "نمی‌دانیم دولت آمریکا چگونه دستش به این اطلاعات، از دهکده‌ی ما رسیده است، اما ما به تحقیقات ادامه می‌دهیم.",
                "dir": "right"
              },
              {
                "para": "اگرچه، حس می‌کنم که این مزاحمت، آن هم در این زمان مشخص، نمی‌تواند تصادفی باشد.",
                "dir": "right"
              },
              {
                "para": "به نظر می‌آید که یک عامل سوم، به غیر از دولت آمریکا، قاطی ماجراست.",
                "dir": "right"
              },
              {
                "para": "مردمان من، گوش‌به‌زنگ باشید!",
                "dir": "right"
              },
              {
                "para": "- کدخدا، بیتورس مندز",
                "dir": "left"
              }
            ]
          },
          {
            "id": 3,
            "src": require('../assets/img/re4/files/about-the-blue-medallions/about-the-blue-medallions.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-4/files#!about-the-blue-medallions",
            "location": [
              {
                "txt": "Location",
                "src": require('../assets/img/re4/files/about-the-blue-medallions/location/about-the-blue-medallions-location.png'),
                "map": {
                  "far": require('../assets/img/re4/files/about-the-blue-medallions/map/about-the-blue-medallions-map-far.png'),
                  "default": require('../assets/img/re4/files/about-the-blue-medallions/map/about-the-blue-medallions-map-default.png'),
                  "near": require('../assets/img/re4/files/about-the-blue-medallions/map/about-the-blue-medallions-map-near.png')
                }
              }
            ],
            "url": "about-the-blue-medallions",
            "title": "About the Blue Medallions",
            "og_content":[
              {
                "para": "15 blue medallions...",
                "dir": "left"
              },
              {
                "para": "7 in the farm... 8 in the cemetery...",
                "dir": "left"
              },
              {
                "para": "For those of you who destroy 10 or more will be awarded...",
                "dir": "left"
              },
              {
                "para": "(The rest is illegible.)",
                "dir": "left"
              }
            ],
            "fa_content":[
              {
                "para": "۱۵ مدال آبی‌رنگ...",
                "dir": "right"
              },
              {
                "para": "۷تا تو مزرعه‌ست... ۸تا هم تو قبرستون...",
                "dir": "right"
              },
              {
                "para": "برای شماهایی که ۱۰تا مدال، یا بیشتر از این مقدار رو از بین می‌برن، جایزه در نظر گرفته می‌شه...",
                "dir": "right"
              },
              {
                "para": "(بقیه‌ش رو نمی‌شه خوند.)",
                "dir": "right"
              }
            ]
          },
          {
            "id": 4,
            "src": require('../assets/img/re4/files/chief-s-note/chief-s-note.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-4/files#!chiefs-note",
            "location": [
              {
                "txt": "Location",
                "src": require('../assets/img/re4/files/chief-s-note/location/chief-s-note-location.png'),
                "map": {
                  "far": require('../assets/img/re4/files/chief-s-note/map/chief-s-note-map-far.png'),
                  "default": require('../assets/img/re4/files/chief-s-note/map/chief-s-note-map-default.png'),
                  "near": require('../assets/img/re4/files/chief-s-note/map/chief-s-note-map-near.png')
                }
              }
            ],
            "url": "chief-s-note",
            "title": "Chief's Note",
            "og_content":[
              {
                "para": "As instructed by Lord Saddler, I have the agent in confinement, alive. Why keep him alive? I do not fully understand what the Lord's intentions are.",
                "dir": "left"
              },
              {
                "para": "I would, however, think he'd keep them separate; not confine them together as has been ordered.",
                "dir": "left"
              },
              {
                "para": "I don't expect Luis would trust a stranger but if by chance they did cooperate, the situation could get a bit more complicated.",
                "dir": "left"
              },
              {
                "para": "If for some reason, an unknown third party is involved, I don't think they'd let a chance like this slip by.",
                "dir": "left"
              },
              {
                "para": "But maybe it's all Lord Saddler's ploy - leaving us vulnerable so that this third party will surface, if they even exist that is...",
                "dir": "left"
              },
              {
                "para": "It's an unlikely possibility, but if a prowler is already amongst us, then our plans could be ruined.",
                "dir": "left"
              },
              {
                "para": "I guess the Lord thinks it's worth the risk, if we're able to stop whatever conspiracy is at work.",
                "dir": "left"
              },
              {
                "para": "At any rate, it's the Lord's call.",
                "dir": "left"
              },
              {
                "para": "We will trust his judgement as always.",
                "dir": "left"
              }
            ],
            "fa_content":[
              {
                "para": "به دستور لرد سدلر، مامور را زنده و در بند در اختیار دارم. حال چرا زنده؟ نمی‌دانم قصد او از این کار چیست.",
                "dir": "right"
              },
              {
                "para": "هرچند، من اینگونه فکر می‌کنم که لرد می‌خواهد آنان از هم جدا باشند، نه آنکه طبق دستوری که داده شد، در کنار هم به بند کشیده شوند.",
                "dir": "right"
              },
              {
                "para": "بعید می‌دانم لوییس به غریبه‌ها اعتماد کند، اما اگر به هر نحوی آن‌ها با هم دست به همکاری بزنند، وضعیت کمی پیچیده‌تر می‌شود.",
                "dir": "right"
              },
              {
                "para": "اگر به هر دلیلی، یک عامل جدید وارد ماجرا شود، فکر نکنم که آن‌ها چنین فرصتی را از دست بدهند.",
                "dir": "right"
              },
              {
                "para": "شاید هم همه‌ی ماجرا، حقه‌ای از طرف لرد سدلر باشد، که ما را بی‌دفاع رها کرده تا این عامل سوم خودش را نشان دهد، البته اگر حقیقت داشته باشد... ",
                "dir": "right"
              },
              {
                "para": "دور از ذهن به نظر می‌آید، ولی اگر کسی ما را دنبال کرده باشد، نقشه‌هایمان نقشِ بر آب خواهد شد.",
                "dir": "right"
              },
              {
                "para": "حدس من در مورد دیدگاه لرد این است که ایستادن جلوی هر توطئه‌ای ارزشش را دارد.",
                "dir": "right"
              },
              {
                "para": "به هر روی، این لرد است که تصمیم می‌گیرد.",
                "dir": "right"
              },
              {
                "para": "ما همواره به لرد ایمان خواهیم داشت.",
                "dir": "right"
              }
            ]
          },
          {
            "id": 5,
            "src": require('../assets/img/re4/files/closure-of-the-church/closure-of-the-church.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-4/files#!closure-of-the-church",
            "location": [
              {
                "txt": "Location",
                "src": require('../assets/img/re4/files/closure-of-the-church/location/closure-of-the-church-location.png'),
                "map": {
                  "far": require('../assets/img/re4/files/closure-of-the-church/map/closure-of-the-church-map-far.png'),
                  "default": require('../assets/img/re4/files/closure-of-the-church/map/closure-of-the-church-map-default.png'),
                  "near": require('../assets/img/re4/files/closure-of-the-church/map/closure-of-the-church-map-near.png')
                }
              }
            ],
            "url": "closure-of-the-church",
            "title": "Closure of the Church",
            "og_content":[
              {
                "para": "Regarding the two fugitives, the apprehension of Luis is our top priority; the American agent a distant second.",
                "dir": "left"
              },
              {
                "para": "What Luis stole from us is far more important than the girl.",
                "dir": "left"
              },
              {
                "para": "Unless we get it back, the girl will become useless to us. We must get it back to execute our plan to the end.",
                "dir": "left"
              },
              {
                "para": "If it gets in the wrong hands, the world would become a totally different place than what Lord Saddler has envisioned.",
                "dir": "left"
              },
              {
                "para": "At all costs, we mustn't let that happen.",
                "dir": "left"
              },
              {
                "para": "Nevertheless, we're not letting go of the girl. To ensure that the agent does not get to her, I have locked the church door where the girl is being held.",
                "dir": "left"
              },
              {
                "para": "Anyone who needs access to the church must first get approval by Lord Saddler.",
                "dir": "left"
              },
              {
                "para": "There is a key beyond the lake but it should be safe now that the \"Del Lago\" has been awakened by our Lord. No one will get across the lake alive.",
                "dir": "left"
              },
              {
                "para": "Plus, our same blood courses through the agent's veins. It'll be just a matter of time before he joins us. Once he does, there will be nobody else left that will come looking for the girl.",
                "dir": "left"
              }
            ],
            "fa_content":[
              {
                "para": "در خصوص این دو فراری باید گفت که دستگیری لوییس اولویت اول ماست، و مامور آمریکایی با اختلاف بسیار زیادی بعد از آن قرار می‌گیرد.",
                "dir": "right"
              },
              {
                "para": "چیزی که لوییس از پیش ما به سرقت برد، بسیار مهم‌تر از آن دختر به شمار می‌رود.",
                "dir": "right"
              },
              {
                "para": "اگر آن را پس نگیریم، این دختر برایمان ارزشی نخواهد داشت. باید آن را پس گرفت تا نقشه‌هایمان عملی شده و به انتها برسد.",
                "dir": "right"
              },
              {
                "para": "اگر بیگانگان به آن دست یابند، دنیا به جایی متفاوت از آن چیزی تبدیل می‌شود که لرد سدلر در نظر گرفته است.",
                "dir": "right"
              },
              {
                "para": "به هر قیمتی باید جلوی وقوع این امر را بگیریم.",
                "dir": "right"
              },
              {
                "para": "با این حال اما، این دختر را آزاد نمی‌کنیم. درِ کلیسا را نیز که دخترک در آن زندانی شده، به منظور اطمینان‌حاصل‌کردن از عدم دستیابی لیان به وی، قفل کرده‌ام.",
                "dir": "right"
              },
              {
                "para": "هر آنکس که قصد دسترسی به کلیسا را دارد، در قدم اول بایستی توسط لرد سدلر مورد تایید قرار بگیرد.",
                "dir": "right"
              },
              {
                "para": "کلید در آن سوی دریاچه قرار دارد، اما جایش امن است، چرا که «دِل لاگو» توسط لرد بیدار شده؛ و هیچ‌کس نمی‌تواند زنده از دریاچه عبور کند.",
                "dir": "right"
              },
              {
                "para": "در ضمن، خون ما در رگ‌های این مامور جاری‌ست. دیر یا زود نیز او به ما ملحق می‌شود. به محض وقوع این مهم، دیگر هیچ‌کسی به دنبال دخترک نخواهد آمد.",
                "dir": "right"
              }
            ]
          },
          {
            "id": 6,
            "src": require('../assets/img/re4/files/anonymous-letter/anonymous-letter.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-4/files#!anonymous-letter",
            "location": [
              {
                "txt": "Location",
                "src": require('../assets/img/re4/files/anonymous-letter/location/anonymous-letter-location.png'),
                "map": {
                  "far": require('../assets/img/re4/files/anonymous-letter/map/anonymous-letter-map-far.png'),
                  "default": require('../assets/img/re4/files/anonymous-letter/map/anonymous-letter-map-default.png'),
                  "near": require('../assets/img/re4/files/anonymous-letter/map/anonymous-letter-map-near.png')
                }
              }
            ],
            "url": "anonymous-letter",
            "title": "Anonymous Letter",
            "og_content":[
              {
                "para": "There's an important item hidden in the falls. If you are able to get it, you might be able to get Ashley out of the church.",
                "dir": "left"
              },
              {
                "para": "But I'll warn you, the route to the church isn't a walk in the park by any means. They've deployed what's called an \"El Gigante\", so God bless.",
                "dir": "left"
              },
              {
                "para": "About what's been going on in your body... If I could help you, I would.",
                "dir": "left"
              },
              {
                "para": "But unfortunately it's beyond my power.",
                "dir": "left"
              }
            ],
            "fa_content":[
              {
                "para": "یه آیتم مهم تو آبشار مخفی شده. اگه بتونی گیرش بیاری، احتمالا بتونی اشلی رو از کلیسا خارج بکنی.",
                "dir": "right"
              },
              {
                "para": "اما بهت بگم که مسیر کلیسا، هیچ‌جوره مثل آب خوردن نیست. اونا موجودی به نام «ال گیگانته» رو فرستادن و این یعنی خدا به همرات.",
                "dir": "right"
              },
              {
                "para": "درباره‌ی اتفاقاتی که برای بدنت افتاده... اگه کمکی از دستم ساخته بود، دریغ نمی‌کردم.",
                "dir": "right"
              },
              {
                "para": "اما متاسفانه، این از عهده‌ی من خارجه.",
                "dir": "right"
              }
            ]
          },
          {
            "id": 7,
            "src": require('../assets/img/re4/files/sera-and-the-3rd-party/sera-and-the-3rd-party.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-4/files#!sera-and-the-3rd-party",
            "location": [
              {
                "txt": "Location",
                "src": require('../assets/img/re4/files/sera-and-the-3rd-party/location/sera-and-the-3rd-party-location.png'),
                "map": {
                  "far": require('../assets/img/re4/files/sera-and-the-3rd-party/map/sera-and-the-3rd-party-map-far.png'),
                  "default": require('../assets/img/re4/files/sera-and-the-3rd-party/map/sera-and-the-3rd-party-map-default.png'),
                  "near": require('../assets/img/re4/files/sera-and-the-3rd-party/map/sera-and-the-3rd-party-map-near.png')
                }
              }
            ],
            "url": "sera-and-the-3rd-party",
            "title": "Sera and the 3rd Party",
            "og_content":[
              {
                "para": "The whereabouts of Sera are still unknown.",
                "dir": "left"
              },
              {
                "para": "Most likely he's using an old secret passage taught to him by his grandfather who used to hunt in this region long ago.",
                "dir": "left"
              },
              {
                "para": "I'm pretty certain that he's hiding our property somewhere in the forest.",
                "dir": "left"
              },
              {
                "para": "If his grandfather was still alive, I would have used him to find Sera...",
                "dir": "left"
              },
              {
                "para": "But how did he find out about the egg injected into his body?",
                "dir": "left"
              },
              {
                "para": "- And the fact that he was able to remove it before it hatched is concerning.",
                "dir": "left"
              },
              {
                "para": "Another factor that concerns me is that Sera escaped with our property just before the American agent arrived. I don't believe that was just a coincidence.",
                "dir": "left"
              },
              {
                "para": "There has to be another player involved in this.",
                "dir": "left"
              },
              {
                "para": "In order to settle this whole situation, we have to capture Sera and wait for the effects of the drug to wear off before we inject him with another egg.",
                "dir": "left"
              },
              {
                "para": "Once this is done, whoever is behind all of this will surface. Nobody shall interfere with our plans. Those who do shall suffer severe consequences.",
                "dir": "left"
              }
            ],
            "fa_content":[
              {
                "para": "مشخص نیست لوییس کجاست.",
                "dir": "right"
              },
              {
                "para": "به احتمال زیاد یه مسیر قدیمی و مخفی، که از پدربزرگش یاد گرفته رو، انتخاب کرده؛ کسی که تو گذشته‌های دور برای شکار راهیِ اینجا می‌شده.",
                "dir": "right"
              },
              {
                "para": "بی‌بروبرگرد می‌گم که اون، سرمایه‌ی ما رو یه جا تو جنگل مخفی کرده.",
                "dir": "right"
              },
              {
                "para": "اگه پدربزرگش هنوز زنده بود، می‌فرستادمش دنبال سِرا...",
                "dir": "right"
              },
              {
                "para": "آخه از کجا باید بفهمه که تخمِ ویروس به بدنش تزریق شده؟",
                "dir": "right"
              },
              {
                "para": "- این قضیه که تونسته قبلِ آزادسازی ویروس، اون رو از بدنش خارج کنه نگران‌کننده‌ست.",
                "dir": "right"
              },
              {
                "para": "قضیه‌ی دیگه‌ای که نگرانم می‌کنه اینه که درست قبل از رسیدنِ اون مامور آمریکایی، سرا به همراه دارایی ما قسر در می‌ره. باور ندارم که این همه‌ش یه اتفاق باشه.",
                "dir": "right"
              },
              {
                "para": "باید پای یکی دیگه در میون باشه.",
                "dir": "right"
              },
              {
                "para": "مجبوریم برای بهبود اوضاع، سرا رو دستگیر کنیم و قبلِ تزریق تخم دیگه‌ای از ویروس بهش، منتظر ازبین‌رفتنِ تاثیرات دارو بمونیم.",
                "dir": "right"
              },
              {
                "para": "به محض انجام این کار، هر کی که پشت قضیه‌ست خودش رو نشون می‌ده. هیچکی نمی‌ره تو عملی‌کردنِ نقشه‌هامون دخالت کنه. اونایی هم که قاطی ماجرا بشن، به سرنوشت وحشتناکی دچار می‌شن.",
                "dir": "right"
              }
            ]
          },
          {
            "id": 8,
            "src": require('../assets/img/re4/files/two-routes/two-routes.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-4/files#!two-routes",
            "location": [
              {
                "txt": "Location",
                "src": require('../assets/img/re4/files/two-routes/location/two-routes-location.png'),
                "map": {
                  "far": require('../assets/img/re4/files/two-routes/map/two-routes-map-far.png'),
                  "default": require('../assets/img/re4/files/two-routes/map/two-routes-map-default.png'),
                  "near": require('../assets/img/re4/files/two-routes/map/two-routes-map-near.png')
                }
              }
            ],
            "url": "two-routes",
            "title": "Two Routes",
            "og_content":[
              {
                "para": "Just a while ago, I was informed by Lord Saddler that our men had shot down a United States military helicopter.",
                "dir": "left"
              },
              {
                "para": "There shouldn't be any more outside interference for a while now.",
                "dir": "left"
              },
              {
                "para": "Unless the United States government determines who the traitor is, they can only initiate very small covert operations.",
                "dir": "left"
              },
              {
                "para": "We must use this time to our advantage and recapture the girl.",
                "dir": "left"
              },
              {
                "para": "The two Americans can only get out of our territory by using one of two routes.",
                "dir": "left"
              },
              {
                "para": "This is where we'll stop them.",
                "dir": "left"
              },
              {
                "para": "We shall make use of our forces to the greatest degree.",
                "dir": "left"
              },
              {
                "para": "We will deploy a large number of Ganados in one of the routes to ensure that they do not slip by us. For the other route we shall leave the task to El Gigante. Whichever route they take, the agent will never leave here alive. Not with the girl at least.",
                "dir": "left"
              }
            ],
            "fa_content":[
              {
                "para": "همین چند وقت پیش توسط لرد سدلر مطلع شدم که مردمان ما، هلیکوپترِ نظامی آمریکا رو از کار انداختن.",
                "dir": "right"
              },
              {
                "para": "برای یه مدتی، دیگه نباید پای یکی دیگه به ماجرا کشیده بشه.",
                "dir": "right"
              },
              {
                "para": "در صورتی که تشخیص داده نشه کی دست به خیانت زده، دولت آمریکا فقط می‌تونه دست به اقدام یه سری عملیات سریِ ریز بزنه.",
                "dir": "right"
              },
              {
                "para": "باید از وقتی که در اختیار داریم به نفع خودمون استفاده کنیم و دختره رو پس بگیریم.",
                "dir": "right"
              },
              {
                "para": "این دو آمریکایی فقط  به واسطه‌ی یکی از این دو مسیر می‌تونن از قلمروی ما خارج بشن.",
                "dir": "right"
              },
              {
                "para": "و اینجاست که گیرشون می‌ندازیم.",
                "dir": "right"
              },
              {
                "para": "تا حد امکان هم از نیروهامون بهره می‌بریم.",
                "dir": "right"
              },
              {
                "para": "توی یکی از این دو مسیر، کلی گانادو رو راهی می‌کنیم تا مطمئن شیم اونا از دست ما قسر در نمی‌رن. برای اون یکی مسیر هم، کارو به ال گیگانته می‌سپریم. هر مسیری هم که انتخاب کنن، ماموره، حداقل با دخترک، زنده ازش بیرون نمیاد.",
                "dir": "right"
              }
            ]
          },
          {
            "id": 9,
            "src": require('../assets/img/re4/files/village-s-last-defense/village-s-last-defense.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-4/files#!villages-last-defense",
            "location": [
              {
                "txt": "Location",
                "src": require('../assets/img/re4/files/village-s-last-defense/location/village-s-last-defense-location.png'),
                "map": {
                  "far": require('../assets/img/re4/files/village-s-last-defense/map/village-s-last-defense-map-far.png'),
                  "default": require('../assets/img/re4/files/village-s-last-defense/map/village-s-last-defense-map-default.png'),
                  "near": require('../assets/img/re4/files/village-s-last-defense/map/village-s-last-defense-map-near.png')
                }
              }
            ],
            "url": "village-s-last-defense",
            "title": "Village's Last Defense",
            "og_content":[
              {
                "para": "I clearly underestimated the American agent's capability. He's still alive.",
                "dir": "left"
              },
              {
                "para": "I thought that we could wait until the egg hatched, but at this rate, he could destroy the entire village before it does. We must take care of this nuisance.",
                "dir": "left"
              },
              {
                "para": "We shall change our priorities - for the time being, we will cease our hunt for Luis and ambush the two Americans.",
                "dir": "left"
              },
              {
                "para": "There is a building used to enlighten betrayers just beyond the point where you get off the lift.",
                "dir": "left"
              },
              {
                "para": "It's a perfect place for ambushing them.",
                "dir": "left"
              },
              {
                "para": "If all else fails, they still would need to face me in order to get past the last gate that leads out of the village.",
                "dir": "left"
              },
              {
                "para": "For only before my sight will the gate open.",
                "dir": "left"
              }
            ],
            "fa_content":[
              {
                "para": "توانمندی مامور آمریکا را واضحا دست کم گرفته بودم. او همچنان نفس می‌کشد.",
                "dir": "right"
              },
              {
                "para": "فکر کردم می‌توان در انتظار آزادسازی ویروس بود، اما او قادر است قبل از این امر، تمامیِ دهکده را نابود سازد. باید از پس این مایه‌ی دردسر بربیاییم.",
                "dir": "right"
              },
              {
                "para": "اولویت‌هایمان را تغییر می‌دهیم و موقتا از گیرانداختنِ لوییس دست می‌کشیم تا این دو آمریکایی را به دام بیندازیم.",
                "dir": "right"
              },
              {
                "para": "هنگام پیاده‌شدن از کابین و کمی آن طرف‌تر، بنایی برای شیرفهم‌کردن خیانت‌کاران وجود دارد.",
                "dir": "right"
              },
              {
                "para": "این، بهترین منطقه برای حمله‌ی مخفیانه به آنهاست.",
                "dir": "right"
              },
              {
                "para": "اگر به بن‌بست بخوریم، آن‌ها همچنان باید با من روبه‌رو شوند تا از دروازه‌ی نهایی، که راه خروج از دهکده است گذر کنند.",
                "dir": "right"
              },
              {
                "para": "و این قدرت بینایی من است که دروازه را باز می‌کند.",
                "dir": "right"
              }
            ]
          },
          {
            "id": 10,
            "src": require('../assets/img/re4/files/capture-luis-sera/capture-luis-sera.png'),
            "src_source": "Evil Resource",
            "src_source_link": "https://www.evilresource.com/resident-evil-4/files#!capture-luis-sera",
            "location": [
              {
                "txt": "Location",
                "src": require('../assets/img/re4/files/capture-luis-sera/location/capture-luis-sera-location.png'),
                "map": {
                  "far": require('../assets/img/re4/files/capture-luis-sera/map/capture-luis-sera-map-far.png'),
                  "default": require('../assets/img/re4/files/capture-luis-sera/map/capture-luis-sera-map-default.png'),
                  "near": require('../assets/img/re4/files/capture-luis-sera/map/capture-luis-sera-map-near.png')
                }
              }
            ],
            "url": "capture-luis-sera",
            "title": "Capture Luis Sera",
            "og_content":[
              {
                "para": "I have confirmation that Sera has entered the castle.",
                "dir": "left"
              },
              {
                "para": "Why would he return during his escape leaves me to question his motives. But we must seize this moment and capture him.",
                "dir": "left"
              },
              {
                "para": "We will get the other two Americans after we apprehend Sera.",
                "dir": "left"
              },
              {
                "para": "It appears he took some vaccines when he stole our \"sample\". The vaccines we can do without but we must retrieve the \"sample\" for it is our life blood.",
                "dir": "left"
              },
              {
                "para": "I feel there is somebody else or some other group involved in this whole affair.",
                "dir": "left"
              },
              {
                "para": "If the \"sample\" were to get into the hands of that other entity, the world which we seek to create will not come. We must apprehend Sera as quickly as possible.",
                "dir": "left"
              }
            ],
            "fa_content":[
              {
                "para": "مدارکی دارم که نشان می‌دهد سرا به قصر ورود پیدا کرده.",
                "dir": "right"
              },
              {
                "para": "دلیل برگشتنش آن هم به هنگام فرار، من را در رابطه با انگیزه‌اش به فکر فرو برده. در هر صورت، باید فرصت را غنیمت بشماریم و او را گیر بیندازیم.",
                "dir": "right"
              },
              {
                "para": "آن دوتا آمریکایی را هم بعد از دستگیرکردنِ سرا گیر می‌اندازیم.",
                "dir": "right"
              },
              {
                "para": "ظاهرا وقتی که او «نمونه‌ی آزمایشگاهی» را از ما می‌دزدد، به تعدادی واکسن دسترسی پیدا می‌کند. ما از آن‌ها بی‌نیازیم، اما بازپس‌گیری این «نمونه»، به عنوان شاهرگ حیاتی‌مان، الزامی‌ست.",
                "dir": "right"
              },
              {
                "para": "احساس می‌کنم پای یک شخص یا گروهی جدید به ماجرا باز شده.",
                "dir": "right"
              },
              {
                "para": "اگر قرار باشد این «نمونه‌ی آزمایشگاهی» به دست دیگران راه یابد، دنیایی که ما خواهان تشکیل آن هستیم تحقق پیدا نمی‌کند. ما باید سرا را با سرعت هر چه تمام دستگیر کنیم.",
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
    isFileSelected: false
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
