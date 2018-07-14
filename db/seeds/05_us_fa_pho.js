const TABLE_NAME = 'us_fa_pho'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, uri: 'file:///var/mobile/Containers/Data/Application/14412AE8-2833-47E3-A9E3-12F17CB9CD3F/Library/Caches/ExponentExperienceData/%2540abedababe8%252Fexp%253A%252F%252Fmr-7hs.abedababe8.awesomeproject.exp.direct%253A80/ImagePicker/3C999536-F314-4640-9608-3C7FDE997205.jpg', userId: 1, parkId: 'ChIJPUN72LpqkFQRCP8C8t0okEw'},
        {id: 2, uri: 'file:///var/mobile/Containers/Data/Application/14412AE8-2833-47E3-A9E3-12F17CB9CD3F/Library/Caches/ExponentExperienceData/%2540abedababe8%252Fexp%253A%252F%252Fmr-7hs.abedababe8.awesomeproject.exp.direct%253A80/ImagePicker/233575C3-0D45-47B5-B2AD-B9E8173602D8.jpg', userId: 2, parkId: 'ChIJSx5JLLRqkFQRwnvCxhDzA3o'},
        {id: 3, uri: 'file:///var/mobile/Containers/Data/Application/14412AE8-2833-47E3-A9E3-12F17CB9CD3F/Library/Caches/ExponentExperienceData/%2540abedababe8%252Fexp%253A%252F%252Fmr-7hs.abedababe8.awesomeproject.exp.direct%253A80/ImagePicker/4CBD4503-5DDE-4C5F-8BD3-70FDF383D7CD.jpg', userId: 1, parkId: 'ChIJPUN72LpqkFQRCP8C8t0okEw'}
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
})
};
