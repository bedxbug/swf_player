var mobileDevice=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent);var head=document.getElementsByTagName('body')[0];var script=document.createElement('script');script.type='text/javascript';var responsive=document.createElement('script');responsive.type='text/javascript';script.src='/dee825731d7d.js';mobileAction='Yes';if(!mobileDevice)
{responsive.src='/4944cf1e959d.js';}else if(mobileDevice&&mobileAction=='Yes')
{responsive.src='/1513b1f60bde.js';}
head.appendChild(script);head.appendChild(responsive);