//central image asset hub

export const imgURLS: Record<string, string> = {
    HogWallow:
        'https://raw.githubusercontent.com/k-stranick/imagesForClass/main/hogwallow.jpg',
    SushiYah:
        'https://raw.githubusercontent.com/k-stranick/imagesForClass/main/sushi.jpg',
    Quarters:
        'https://raw.githubusercontent.com/k-stranick/imagesForClass/main/quarters.jpg',
    Repel:
        'https://raw.githubusercontent.com/k-stranick/imagesForClass/main/repel.jpg',

    SnowCapped:
        'https://raw.githubusercontent.com/k-stranick/imagesForClass/main/snowcapped.jpg',

    Peruvian:
        'https://raw.githubusercontent.com/k-stranick/imagesForClass/main/peruvian.jpg',

    Mountain:
        'https://raw.githubusercontent.com/k-stranick/imagesForClass/main/mountain.jpg',

    Hiking:
        'https://raw.githubusercontent.com/k-stranick/imagesForClass/main/hiking.jpg',

    Food2:
        'https://raw.githubusercontent.com/k-stranick/imagesForClass/main/food2.jpg',

    Food: 'https://raw.githubusercontent.com/k-stranick/imagesForClass/main/food.jpg',

    BgImg:
        'https://raw.githubusercontent.com/k-stranick/imagesForClass/main/bgImg.jpg',

    Snowbird:
        'https://raw.githubusercontent.com/k-stranick/imagesForClass/main/snowbird.jpg',

    Ferguson:
        'https://raw.githubusercontent.com/k-stranick/imagesForClass/main/ferg.jpg',

    FifthWater:
        'https://raw.githubusercontent.com/k-stranick/imagesForClass/main/fifthwater.jpg',

    Olympus:
        'https://raw.githubusercontent.com/k-stranick/imagesForClass/main/olympus.jpg',

    LowerFalls:
        'https://raw.githubusercontent.com/k-stranick/imagesForClass/main/lowerfalls.jpg',
};

export const trailImageMap: Record<string, keyof typeof imgURLS> = {
    'Ferguson Canyon Trail to Upper Meadow': 'Ferguson',
    'Fifth Water Hot Springs Trail': 'FifthWater',
    'Mount Olympus Trail': 'Olympus',
    'Lower Falls via Bells Canyon Trail': 'LowerFalls',
};
