const { igApi, getCookie } = require("insta-fetcher");

const newSessionId = "mid=YoTBqwALAAHln378Ib7sxCqS2FTA; ig_did=91BF7D91-70ED-4D62-950A-DEE3FD91D272; ig_nrcb=1; fbm_124024574287414=base_domain=.instagram.com; datr=r3eaYpQVZ6ue_lFIE2hSUZLP; dpr=1.25; shbid=\"13652\0543587651637\0541697046510:01f7ccb9556c3deb4bacd5e438fdd71c60bef9a37751d9bd83bf2bfe0369b5756d46ae64\"; shbts=\"1665510510\0543587651637\0541697046510:01f7026127d6232a0fe7a2e9158339c0d345c0075e2059d871dc46a35c2fa6cae5574d93\"; csrftoken=iddVrlpFDSq7h6ON7EnxUJNIW3MEbFJN; sessionid=53803448050%3ADXbiHDxc2JxM5e%3A8%3AAYfZaM_kfE0z4eCEhLg6z2TVnp0eL3YTRWR-W2kCKg; ds_user_id=53803448050; rur=\"RVA\05453803448050\0541697124122:01f7b1db01216e995161b7054842aa2fef02164973d21ab61daab4020932c297b6a6b913\""


const ig = new igApi(newSessionId);

module.exports ={ig}