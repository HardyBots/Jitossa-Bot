const _0xc0e517=_0x1318;(function(_0x1767b1,_0x122d46){const _0x3551ad=_0x1318,_0x3117cd=_0x1767b1();while(!![]){try{const _0x3527ed=-parseInt(_0x3551ad(0xc6))/0x1+parseInt(_0x3551ad(0xc7))/0x2*(-parseInt(_0x3551ad(0xd9))/0x3)+parseInt(_0x3551ad(0xdf))/0x4*(parseInt(_0x3551ad(0xdb))/0x5)+-parseInt(_0x3551ad(0xde))/0x6+-parseInt(_0x3551ad(0xc8))/0x7*(parseInt(_0x3551ad(0xdd))/0x8)+-parseInt(_0x3551ad(0xd5))/0x9*(-parseInt(_0x3551ad(0xcf))/0xa)+-parseInt(_0x3551ad(0xd4))/0xb;if(_0x3527ed===_0x122d46)break;else _0x3117cd['push'](_0x3117cd['shift']());}catch(_0x209d43){_0x3117cd['push'](_0x3117cd['shift']());}}}(_0x4539,0xe5935));import{instagramdl}from'@bochilteam/scraper';import{snapsave}from'@bochilteam/scraper-sosmed';import _0x19b2a7 from'node-fetch';import _0x181cc5 from'fs/promises';function _0x1318(_0x5243ba,_0x458e90){const _0x453918=_0x4539();return _0x1318=function(_0x1318bf,_0x15af5c){_0x1318bf=_0x1318bf-0xc6;let _0x2a5d3c=_0x453918[_0x1318bf];return _0x2a5d3c;},_0x1318(_0x5243ba,_0x458e90);}var handler=async(_0x18d6fd,{args:_0xd1a237,conn:_0x1f8f46,usedPrefix:_0x34cd9f,command:_0x5d95ee})=>{const _0x5f138d=_0x1318;if(!_0xd1a237[0x0])throw _0x5f138d(0xd1)+_0x34cd9f+_0x5d95ee+_0x5f138d(0xd7);const _0x14c7f8=/^(https?:\/\/)?(www\.)?instagram\.com/i;if(!_0x14c7f8[_0x5f138d(0xd6)](_0xd1a237[0x0])){_0x1f8f46[_0x5f138d(0xce)](_0x18d6fd['chat'],'الرجاء\x20إدخال\x20رابط\x20Instagram\x0aمثال:\x20'+_0x34cd9f+_0x5d95ee+_0x5f138d(0xda),_0x18d6fd);return;}let _0x584aa8;try{_0x584aa8=await snapsave(_0xd1a237[0x0]),_0x1f8f46['reply'](_0x18d6fd['chat'],wait,_0x18d6fd);}catch(_0x4008ca){try{_0x584aa8=await instagramdl(_0xd1a237[0x0]),_0x1f8f46[_0x5f138d(0xce)](_0x18d6fd[_0x5f138d(0xcb)],_0x5f138d(0xcd),_0x18d6fd);}catch(_0x16b456){console[_0x5f138d(0xe0)](_0x5f138d(0xd3),_0x16b456),_0x1f8f46[_0x5f138d(0xce)](_0x18d6fd['chat'],_0x5f138d(0xdc),_0x18d6fd);return;}}try{let _0x6e29d4=await _0x584aa8[0x0]['url'];const _0x3b6ef3=_0x18d6fd[_0x5f138d(0xd0)][_0x5f138d(0xca)]('@')[0x0];if(!_0x584aa8)throw'لا\x20يمكن\x20تحميل\x20المنشور';await _0x1f8f46[_0x5f138d(0xc9)](_0x18d6fd[_0x5f138d(0xcb)],{'video':{'url':_0x6e29d4},'caption':_0x5f138d(0xcc),'mentions':[_0x18d6fd[_0x5f138d(0xd0)]]},_0x18d6fd);}catch(_0x1cd925){_0x1f8f46[_0x5f138d(0xce)](_0x18d6fd['chat'],_0x5f138d(0xdc),_0x18d6fd);}};handler[_0xc0e517(0xd2)]=[_0xc0e517(0xd8)],handler['tags']=['downloader'],handler['command']=/^(ig(dl)?|instagram(dl)?)$/i;function _0x4539(){const _0x424c46=['4ozKlFF','log','174685sYHEWj','3369826zIspik','7FoEhiW','sendMessage','split','chat','_*instagram.com/hg_hardy*_','جاري\x20تحميل\x20الفيديو...\x20على\x20خادم\x20instagramdl','reply','2070730DUMYGh','sender','مثال:\x0a','help','error','910140VMKyiB','81uunZTf','test','\x20https://www.instagram.com/reel/C0EEgMNSSHw/?igshid=MzY1NDJmNzMyNQ==','instagram','3VDlKyS','\x20https://www.instagram.com/reel/C0zv5N7ShOs/?utm_source=ig_web_copy_link','8759435DbpXVy','فشل\x20تحميل\x20الفيديو','1084232TcFQOm','3584016xgKbMa'];_0x4539=function(){return _0x424c46;};return _0x4539();}export default handler;
