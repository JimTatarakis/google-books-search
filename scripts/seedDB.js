const mongoose = require("mongoose");
const db = require("../models");

require("dotenv").config();

// This file empties the Books collection and inserts the books below
// DB: Config
// =============================================================
const mongodb = require('../config/config').MONGODB_URI;

// Mongoose: Connect to MongoDB
// =============================================================
mongoose
.connect(mongodb,{ useNewUrlParser: true, useFindAndModify: false })
.then(()=> console.log('MongoDB connected...'))
.catch(err => console.log(err));

const bookSeed = [
{
  title: 'the origin of species',
  authors: ["charles darwin",],
  description: "First published in 1859, this landmark book on evolutionary biology was not the first to deal with the subject, but it went on to become a sensation—and a controversial one for many religious people who could not reconcile Darwin’s science with their faith. Darwin worked on the book for over 20 years before its publication. The radical crux of his scientific theory was the idea of natural selection, which meant that chance, not a divine Creator, played a great role in humanity's advancement and that individuals who weren't physically able to adapt with the greater populace died off.",
  image: 'https://books.google.com/books/content?id=YY4EAAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72j8-lnfUNisqRV3dZspkgNQtbe6QMZ6_C1O7C_luc8yVPJ4Htlsvq5YGbWFSEm2Csu9gfQO76-maoRsDqdyj_X1Z6-K_5h-dN2rljqixYZHSwxnv-yB_tFLoeXstyUZ0J8UEKU',
  link: 'https://books.google.com/books?id=YY4EAAAAYAAJ&printsec=frontcover&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false'
},
{
  title: 'accessory to war: the unspoken alliance between astrophysics and the military',
  authors: ["neil degrasse tyson","avis lang"],
  description: "An exploration of the age-old complicity between skywatchers and warfighters, from the best-selling author of Astrophysics for People in a Hurry.",
  image: 'https://books.google.com/books/content?id=-WRSDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE719K-H3hU47F_byjoUEhfVBSdbCYjZmg_kDIAQMffIPzTNSNbMpWy7SIy1F9vbEhQnLjcxSVCqsu58XaJcOAxuZSvlCb0p1WLMQZvvCaPrwqwYTnjADR8HnZsrCG75IebxBtenH',
  link: 'https://books.google.com/books?id=-WRSDwAAQBAJ&printsec=frontcover&source=gbs_ge_summary_r&cad=0'
},
{
  title: 'atrophysics for people in a hurry',
  authors: ["neil degrasse tyson"],
  description: "Over a year on the New York Times bestseller list and more than a million copies sold. The essential universe, from our most celebrated and beloved astrophysicist",
  image: 'https://books.google.com/books/content?id=hx5DDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72XsunNw4M8PCU_Ywwm1jytqjdJ-2LQySeEx6-eagFpEjKW67ZffY48lvQJ-0iX64nI6CmNIu8WBntfDLavj04D7kbMaU8t5CgEy_yNDpXBG0GB6z_MUqIT2qcwcA8kpXfG5s3W',
  link: 'https://books.google.com/books?id=hx5DDQAAQBAJ&printsec=frontcover&source=gbs_ge_summary_r&cad=0'
},
{
  title: 'extreme ownership: how the u.s. navy seals lead and win',
  authors: ["jocko willink","leif babin"],
  description: "Sent to the most violent battlefield in Iraq, Jocko Willink and Leif Babin’s SEAL task unit faced a seemingly impossible mission: help U.S. forces secure Ramadi, a city deemed “all but lost.” In gripping firsthand accounts of heroism, tragic loss, and hard-won victories in SEAL Team Three’s Task Unit Bruiser, they learned that leadership—at every level—is the most important factor in whether a team succeeds or fails.",
  image: 'https://books.google.com/books/content?id=tpspDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE72kqjSJBZJxBR2fV3h-VfeGLOY9x0Pku7u1Da7MHvwnkvY59vnOp4x8a7aQYWI6knD2rBOnEE7wbpYsxR1b1yQ8P6VNI5VHewXXIfqHvixtC9RL9eKUonJcyYXEYb72wNPgXFP4',
  link: 'https://books.google.com/books?id=tpspDwAAQBAJ&printsec=frontcover&dq=jocko+willink&hl=en&sa=X&ved=0ahUKEwiW0MLHwt3jAhXZFjQIHb_7CSEQ6AEILTAA'
},
{
  title: 'the dichotomy of leadership',
  authors: ["jocko willink","leif babin"],
  description: "From the #1 New York Times bestselling authors of Extreme Ownership comes a new and revolutionary approach to help leaders recognize and attain the leadership balance crucial to victory.",
  image: 'https://books.google.com/books/content?id=DRtNDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE713lw2k4-6vvre1FyenpWNSn5nzDi6AnDruXHJNbTsgW2hse51zAuJabICARK4EGM-YfoGew3g3t89bhG4Qo0N9zCcxBd9Hcy5u1NMMdX60dDEz_W0_bhLNBpO9RZX2x3febMQF',
  link: 'https://books.google.com/books?id=DRtNDwAAQBAJ&printsec=frontcover&source=gbs_ge_summary_r&cad=0'
},
{
  title: 'the subtle art of not giving a f*ck',
  authors: ["mark manson"],
  description: "New York Times bestseller. This book teaches you the ways of not giving a 'F'",
  image: 'https://books.google.com/books/content?id=yng_CwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72DxlYYJtLp9ZLw-W70gWO9LXlJ1fJIQ1N2ewy6dbmxDTpmPn5FrWL_xx6obKJvvCZUC7gCYCj1MD21jzLnZ33vkEUfzHTh3Mvabn1eLVLJDQe8RpWYGwAWlIeCVYVkhMfDvP5w',
  link: 'https://books.google.com/books?id=yng_CwAAQBAJ&printsec=frontcover&source=gbs_ge_summary_r&cad=0'
},
{
  title: '12 rules for life: an antidote to chaos',
  authors: ["jordan b. peterson"],
  description: "What does everyone in the modern world need to know? Renowned psychologist Jordan B. Peterson's answer to this most difficult of questions uniquely combines the hard-won truths of ancient tradition with the stunning revelations of cutting-edge scientific research.",
  image: 'https://books.google.com/books/content?id=sxVHDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72lMqlRfkaSWv1Pwm327-KHShicrJXKJUKr4BpwCSINBGLIllXvXghblshp-B9RKrPddxyhtqu3akGtecgnj6hfCH_FSjioOIRGShiRyISDKpf7WUCH4J4W2j7wrHJNmsGjBCYz',
  link: 'https://books.google.com/books?id=sxVHDwAAQBAJ&printsec=frontcover&source=gbs_ge_summary_r&cad=0'
},
{
  title: 'sapiens: a brief history of mankind',
  authors: ["yuval noah harari"],
  description: "A Summer Reading Pick for President Barack Obama, Bill Gates, and Mark Zuckerberg",
  image: 'https://books.google.com/books/content?id=FmyBAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70u2g9KNVQ0VP3w5a5gBkAJfGDGjJO9W6ASjpb80MUQQHPAafue3VpYe_91ZLDaHRyabgHPixT_WdRP9gAy_Xj4UMbs5bbz6Dyyzik_n0SwBlZUEA6M7FFKgJR47z6RCsyiAR1r',
  link: 'https://books.google.com/books?id=FmyBAwAAQBAJ&printsec=frontcover&source=gbs_ge_summary_r&cad=0'
},
{
  title: 'coyote america: a natural and supernatural history',
  authors: ["dan flores"],
  description: "Legends don't come close to capturing the incredible story of the coyote In the face of centuries of campaigns of annihilation employing gases, helicopters, and engineered epidemics, coyotes didn't just survive, they thrived, expanding across the continent from Alaska to New York. In the war between humans and coyotes, coyotes ",
  image: 'https://books.google.com/books/content?id=CSvXCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73Kkk3ayIbBUsRtga85mH9Vr3Jg7zLNpbuiQPoE3CcDfuqVjznKa0hObs8yRclYHpT3JFuDUEYuGQ9qbi2sNi0UrgnZNBrGTZOzyiFUuFn_4T6uYl7bF6MnKv-MNJMZquleby9z',
  link: 'https://books.google.com/books?id=CSvXCwAAQBAJ&printsec=frontcover&source=gbs_ge_summary_r&cad=0'
},
{
  title: 'the natural west: environmental history in the great plains and rocky mountains',
  authors: ["dan flores"],
  description: "The Natural West offers essays reflecting the natural history of the American West as written by one of its most respected environmental historians. Developing a provocative theme, Dan Flores asserts that Western environmental history cannot be explained by examining place, culture, or policy alone, but should be understood within the context of a universal human nature.",
  image: 'https://books.google.com/books/content?id=mVFzlcaFB4MC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73zvdM4X4pM_qgQ9da7OTugy9o4Pjs4RDibP5FJPaBLrfcrqDzKro3bL50bE2Xedx8WQ3VR92lVEDuOZg3ecDtWp2tHYVf6mV_0Wgtt_6gLOULkT_YZ7n0jAPzzSOOxevXq_vTa',
  link: 'https://books.google.com/books?id=mVFzlcaFB4MC&printsec=frontcover&source=gbs_ge_summary_r&cad=0'
},
{
  title: 'american buffalo: in search of a lost icon',
  authors: ["steven rinella"],
  description: "A hunt for the American buffalo—an adventurous, fascinating examination of an animal that has haunted the American imagination.",
  image: 'https://books.google.com/books/content?id=b5rmuZb1JPAC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70MgK1b2GoguIE7Mb9LvIDn8veurmOt9cXnvwZdhviXWfyd8JPDgmbkcvpxDCoz_Gtx_hpcPRsceB_SyPURBIAASyg6PAsd8_jQwIrfXDovLVb899y7doQdXZntJEiy0dsWqh2S',
  link: 'https://books.google.com/books?id=b5rmuZb1JPAC&printsec=frontcover&source=gbs_ge_summary_r&cad=0'
},
{
  title: "a people's history of the united states",
  authors: ["howard zinn"],
  description: "A classic since its original landmark publication in 1980, Howard Zinn’s A People’s History of the United States is the first scholarly work to tell America’s story from the bottom up—from the point of view of, and in the words of, America’s women, factory workers, African Americans, Native Americans, working poor, and immigrant laborers. From Columbus to the Revolution to slavery and the Civil War—from World War II to the election of George W. Bush and the “War on Terror”—A People’s History of the United States is an important and necessary contribution to a complete and balanced understanding of American history.",
  image: 'https://books.google.com/books/content?id=Aw5sqwgQKtEC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70rOtRntWMUhfUf1sDmsS_yvf8WmVlMkAo8CAr3U_Ov_fHotMAmKmwCKsTNGKeQ0p3Tcp7cDUDaPGXl9V5kWtNJxVTQ7aR-hCWAHjlu-T3lkhZ8UswATTg8fv5Mq6wo4TXx9xAo',
  link: 'https://books.google.com/books?id=Aw5sqwgQKtEC&printsec=frontcover&source=gbs_ge_summary_r&cad=0'
},
{
  title: 'nietzsche: human, all too human',
  authors: ["friedrich nietzsche"],
  description: "This remarkable collection of almost 1,400 aphorisms was originally published in three instalments. The first (now Volume I) appeared in 1878, just before Nietzsche abandoned academic life, with a first supplement entitled The Assorted Opinions and Maxims following in 1879, and a second entitled The Wanderer and his Shadow a year later. In 1886 Nietzsche republished them together in a two-volume edition, with new prefaces to each volume. Both volumes are presented here in R. J. Hollingdale's distinguished translation (originally published in the series Cambridge Texts in German Philosophy) with a new introduction by Richard Schacht. In this wide-ranging work Nietzsche first employed his celebrated aphoristic style, so perfectly suited to his iconoclastic, penetrating and multi-faceted thought. Many themes of his later work make their initial appearance here, expressed with unforgettable liveliness and subtlety. Human, All Too Human well deserves its subtitle 'A Book for Free Spirits', and its original dedication to Voltaire, whose project of radical enlightenment here found a new champion.",
  image: 'https://books.google.com/books/content?id=Nl-vaAdJD3MC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE721C03vYnad4q87zY3k5FL9UGt3uCLV_DACZu0Zib-K3-0Kidy-Kxf3w53_25KMNyhM-TP-ug2DDoc3YGqS6F2dNHBPOuz84pOWMa3Uwz0Q94rrVIziSA3tXjZJ-r6OnNxXBn0F',
  link: 'https://books.google.com/books?id=Nl-vaAdJD3MC&printsec=frontcover&source=gbs_ge_summary_r&cad=0'
}
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
