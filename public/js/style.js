// Create list of questions for personality style quiz
var allQuestions = [
    {
        questionText: "Which of these living rooms can you cozy up to?",
        answer1: ["rustic-contemporary", "https://cdn.homedsgn.com/wp-content/uploads/2013/03/Willoughby-Way-02.jpg", 1],
        answer2: ["modern-minimalist", "http://vuelosfera.com/wp-content/uploads/2018/03/interior-design-window-photo-design-window-pinterest-best-solutions-of-minimal-living-room-design-of-minimal-living-room-design.jpg", 10],
        answer3: ["french-country", "https://homedesignlover.com/wp-content/uploads/2014/11/4-Culbertson-Durst.jpg", 70],
        answer4: ["coastal", "https://cdn.decoist.com/wp-content/uploads/2016/03/You-can-never-go-wrong-with-blue-and-white-stripes-in-a-beach-style-setting.jpg", 430],
        answer5: ["industrial", "http://cdn.home-designing.com/wp-content/uploads/2017/06/loft-idea-bulb-chandelier-industrial-living-room-lighting.jpg", 2590],
        answer6: ["asian-inspired", "https://i.pinimg.com/originals/39/47/ab/3947abd6c01e44ed2fd7914f593512e7.jpg", 15550]
    },
    {
        questionText: "You have great taste! Now, pick your dream kitchen.",
        answer1: ["french-country", "https://cdn.homedit.com/wp-content/uploads/2015/01/french-country-color-palete-design.jpg", 70],
        answer2: ["industrial", "https://cdn.decoist.com/wp-content/uploads/2015/06/Modern-industrial-style-combines-aesthetics-with-ergonomics.jpg", 2590],
        answer3: ["rustic-contemporary", "https://secureservercdn.net/ip-ad.mwp2.iad2.secureserver.net/0za.6b0.godaddywp.com/wp-content/uploads/2013/12/pinnacle-mountain-homes-rustic-kitchen-4.jpg", 1],
        answer4: ["asian-inspired", "http://cdn.home-designing.com/wp-content/uploads/2012/05/Red-black-Japanese-inspired-kitchen-dining-space.jpeg", 15550],
        answer5: ["modern-minimalist", "http://www.allstateloghomes.com/wp-content/uploads/2017/11/popular-of-minimalist-kitchen-design-related-to-home-renovation-intended-for-minimalist-kitchen-ideas-minimalist-kitchen-ideas-with-modern-style.jpg", 10],
        answer6: ["coastal", "https://i2.wp.com/irastar.com/wp-content/uploads/2017/04/coastal-kitchen-design-beach-style-with-lee-industries-polyester-curtain-panel-pairs.jpg", 430]
    },
    {
        questionText: "Which of these bedrooms is a reflection of you?",
        answer1: ["asian-inspired", "https://i.pinimg.com/originals/a6/dc/9c/a6dc9c4d9a40b0976226b3bec648988f.jpg", 15550],
        answer2: ["coastal", "https://img1.coastalliving.timeinc.net/sites/default/files/styles/1000x1000/public/image/2016/10/main/bedroom.jpg?itok=QJdq2AIJ", 430],
        answer3: ["industrial", "http://designers-world.info/g/int/interesting-industrial-bedroom-lighting-pictures-design-ideas.jpg", 2590],
        answer4: ["rustic-contemporary", "https://i.pinimg.com/736x/7c/0b/f5/7c0bf556c09250e38737bb07dd24b9ad--cabin-bedrooms-colorado-mountains.jpg", 1],
        answer5: ["modern-minimalist", "http://cdn.home-designing.com/wp-content/uploads/2016/11/using-art-in-minimalist-bedrooms.jpg", 10],
        answer6: ["french-country", "http://utiledesignblog.com/wp-content/uploads/2018/06/french-country-bedroom-decor-lovely-ideas-mixdown-co-and-also-15-585x329.jpg", 70]
    },
    {
        questionText: "Love your style! Next, choose an exterior where you find yourself in every detail.",
        answer1: ["rustic-contemporary", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSug5QiFgtCnyAVTiq2JfNUS9qgkzlFo8Z83dHGHrN1GN6KCO9G", 1],
        answer2: ["modern-minimalist", "http://www.distrohome.com/wp-content/uploads/2014/01/Cool-Minimalist-Exterior-Home-Design.jpg", 10],
        answer3: ["french-country", "http://www.cocodsgn.com/wp-content/uploads/2016/03/003-traditional-exterior-11.jpg", 70],
        answer4: ["coastal", "http://www.homebunch.com/wp-content/uploads/2016/04/This-navy-home-exterior-features-a-nautical-first-impression-with-shingle-style-details-metal-roof-accents-and-handsome-stone-columns.-Mike-Schaap-Builders.jpg", 430],
        answer5: ["industrial", "http://altinkil.com/wp-content/uploads/2018/04/modern-industrial-house-plans-home-style.jpg", 2590],
        answer6: ["asian-inspired", "https://cdn.trendir.com/wp-content/uploads/2017/05/Outdoor-Koi-Pond-as-part-of-the-Garden.jpg", 15550]
    },
    {
        questionText: "Which of these landscapes inspires you to love where you live?",
        answer1: ["french-country", "https://st.hzcdn.com/fimgs/0d51147e0f6ffd25_3595-w500-h666-b0-p0--.jpg", 70],
        answer2: ["industrial", "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2016/1/19/0/OA-16-Red-Rock-Contractors_Outdoor-Oasis_1.jpg.rend.hgtvcom.616.411.suffix/1453234340650.jpeg", 2590],
        answer3: ["rustic-contemporary", "https://i.pinimg.com/736x/13/d8/6a/13d86af2f56a3d92667805b6ce710a6f--country-patio-rustic-patio.jpg", 1],
        answer4: ["asian-inspired", "http://www.architectureartdesigns.com/wp-content/uploads/2016/03/18-Restful-Asian-Inspired-Landscape-Designs-That-Will-Uplift-Your-Garden-12.jpg", 15550],
        answer5: ["modern-minimalist", "http://donnerlawfirm.com/wp-content/uploads/2018/06/modern-backyard-ideas-unique-garden-patio-design-idea-with-storage-and-plants-deck.jpg", 10],
        answer6: ["coastal", "http://ygor.club/wp-content/uploads/2018/03/seaside-landscaping-ideas-coastal-landscape-design-ideas-beautiful-coastal-or-seaside-landscaping-design-ideas-garden-of-eden-location.jpg", 430]
    },
    {
        questionText: "Awesome choice! Which of these offices can help channel your inner genius?",
        answer1: ["asian-inspired", "https://cdn.decoist.com/wp-content/uploads/2015/01/Creative-home-office-combines-modern-aesthetics-with-Asian-style.jpg", 15550],
        answer2: ["coastal", "http://comfydwelling.com/wp-content/uploads/2015/07/beach_home_office_02-475x670.jpg", 430],
        answer3: ["industrial", "https://i.pinimg.com/originals/6f/43/7b/6f437b9955d37759ffe518159ccf2853.jpg", 2590],
        answer4: ["rustic-contemporary", "https://cdn.decoist.com/wp-content/uploads/2017/02/Spacious-soothing-and-inviting-office-space.jpeg", 1],
        answer5: ["modern-minimalist", "http://www.anadolukardiyolderg.com/wp-content/uploads/2018/05/amusing-modern-minimalist-desk-13-minimal-office-interior-design-home-cool-games-like-sims.jpg", 10],
        answer6: ["french-country", "https://architecturedsgn.com/wp-content/uploads/2018/02/into-just-ideas-captivating-photos-ideas-french-country-office-decor-captivating-photos-design-home-design-french-country-office-decor-home-trendy-style-trendy.jpg", 70]
    },
];

// Create an audio element
var audioElement = document.createElement("audio");

// Set the source of the audio element
audioElement.setAttribute("src", "sound.mp3");

var counter = 0;
var sum = 0;

function displayQuestions() {
    $('.question').text(allQuestions[counter].questionText);

    $('.answers').show();

    $('.ans1').data('value', allQuestions[counter].answer1[2]);
    var img = $('<img>');
    img.attr('src', allQuestions[counter].answer1[1]);
    $('.ans1').append(img);

    $('.ans2').data('value', allQuestions[counter].answer2[2]);
    var img = $('<img>');
    img.attr('src', allQuestions[counter].answer2[1]);
    $('.ans2').append(img);

    $('.ans3').data('value', allQuestions[counter].answer3[2]);
    var img = $('<img>');
    img.attr('src', allQuestions[counter].answer3[1]);
    $('.ans3').append(img);

    $('.ans4').data('value', allQuestions[counter].answer4[2]);
    var img = $('<img>');
    img.attr('src', allQuestions[counter].answer4[1]);
    $('.ans4').append(img);

    $('.ans5').data('value', allQuestions[counter].answer5[2]);
    var img = $('<img>');
    img.attr('src', allQuestions[counter].answer5[1]);
    $('.ans5').append(img);

    $('.ans6').data('value', allQuestions[counter].answer6[2]);
    var img = $('<img>');
    img.attr('src', allQuestions[counter].answer6[1]);
    $('.ans6').append(img);

    counter++
};

// Display user's style based on answered quiz
function findStyle() {
    if (sum <= 6) {
        $('#resultsTitle').text("Contemporary Rustic");
        $('#resultsText').text("Rustic style embraces the organic, straight-from-the-earth way of life. Pieces in a rustic styled space have lived a good life – they are, or at least seem to be, repurposed, handbuilt, used and reused, and perfectly imperfectly rough and worn.");
        $("#resultsImage").attr('src', 'http://www.icheval-savoir.com/wp-content/uploads/2017/11/modern-rustic-interior-design-ideas-modern-rustic-interior-design-interior-design-jobs.jpg');
    } else if (sum >= 10 && sum <= 60) {
        $('#resultsTitle').text("Modern Minimalist");
        $('#resultsText').text("Minimalist style most closely resonates with what is uber modern. That is, it’s a style that embraces the aesthetic of essential simplicity. A minimalist space is well edited and contains only those pieces that will assist in achieving the maximum décor effect.");
        $("#resultsImage").attr('src', 'https://cdn.decoist.com/wp-content/uploads/2014/04/Modern-Minimalist-Dining-Room-Ideas.jpg');
    } else if (sum >= 70 && sum <= 420) {
        $('#resultsTitle').text("French Country");
        $('#resultsText').text("French country style effortlessly blends elegance with simplicity. The style has an almost old-world aesthetic that is made beautiful and comfortably familiar by the rustic finishes amid refined details.");
        $("#resultsImage").attr('src', 'https://cdn.decoist.com/wp-content/uploads/2014/01/Chic-French-country-living-room.jpg');
    } else if (sum >= 430 && sum <= 2580) {
        $('#resultsTitle').text("Coastal");
        $('#resultsText').text("Coastal style incarnates everything we love about being on vacation at the beach – the sun, the surf, the sand. The style is comfortable and inviting and aims to put people at ease with its genuine charm and serenity.");
        $("#resultsImage").attr('src', 'https://www.1stdibs.com/blogs/the-study/wp-content/uploads/tmp-bynder_photos-1174713_coastal-contemporary-patio-and-deck-dana-point-california-by-brown-design-group-1024x683.jpg');
    } else if (sum >= 2590 && sum <= 15540) {
        $('#resultsTitle').text("Industrial");
        $('#resultsText').text("Industrial style embraces rawness, a bit of the edgy hardness that one associates with primitive surroundings. It’s textural, it’s grey, and it’s worn down…yet it’s also full of repurposed and recycled vitality.");
        $("#resultsImage").attr('src', 'https://i.shelterness.com/2011/10/really-spacious-kitchen-with-lots-of-industrial-elements.jpg');
    } else {
        $('#resultsTitle').text("Asian Influence");
        $('#resultsText').text("Asian-style interiors instantly evoke an image of serenity and tranquil calm. With most of us engrossed in a fast-paced urban lifestyle, it helps immensely when we can come back home to a peaceful abode that allows us to escape this never-ending rush. Asian-themed interiors accomplish this goal in inimitable style by ushering in harmony and balance. Credit: decoist.com");
        $("#resultsImage").attr('src', 'http://homedesignware.com/wp-content/uploads/2017/03/asian-style-interior-design-interior-modern-japanese-style-study-room-interior-design-ideas.jpg');
    }

    $("#styleModal").modal("toggle")

    // Play the sound
    audioElement.play();

    setTimeout(function () {
        //Pause the sound
        audioElement.pause()
    }, 17000);
};

$(function () {

    $('#button-style').on('click', function () {

        $('#button-style').hide();

        // Display questions
        displayQuestions();
    });

    // Click event listener when anyone clicks on button class
    $('.answer-btn').on('click', function () {

        var userAnswer = $(this).data("value");
        sum += userAnswer;
        if (counter < allQuestions.length) {
            $(".answer-btn").empty()
            displayQuestions()
        } else {
            $(".answer-btn").empty()
            $(".question").text("Computing your favorite style...")
            setTimeout(function () {
                findStyle();
                $('.question').empty();

            }, 1000);
        }
    })
});



