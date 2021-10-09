import React from 'react';

const HomePage = () => (
    <>
        <h1>welcome to my blog</h1>
        <p>
                const str = 'JavaScript is amazing';

        console.log(str.replace('JavaScript', 'Node.js'));  'Node.js is amazing'

         replace() method is case sensitive
         replace will not work
        console.log(str.replace('Javascript', 'Node.js'));  'JavaScript is amazing'

         use regular expression for case insensitive
        console.log(str.replace(/Javascript/i, 'Node.js'));  'Node.js is amazing'

         replace() method replaces only the first match
        console.log(str.replace('a', 'A'));  'JAvaScript is amazing'

         to replace all matches, use regular expression
        console.log(str.replace(/a/g, 'A'));  'JAvAScript is AmAzing'
        </p>
        <p>
            kjshKL i HS hHbAJSUGFbb asbJERUj njs SUAKfjSSIFhj LOfhizhs UGj Sjhgff lHfhSF
            Sh H:Kh:Usifjjhd hJSH fHSjfjyhJSdhf sHSfiu IHfliuYIOWu ;ioIflIU hFLHFlHSF
            ILSUfgUSHF hSLhf flhSLFhziulsdghSDHJ uIGSfu liIUSLghlGH lKHSli hKJH j ySJFk L 
            SILFu Lhlj  gzghkjdglzkdh jhz sdlkguhSilu fkfj slikhs.kdjhg ksdh kjz 
            SODIh lSIhjgklJSH Djk sZldkjf hlkJshdf lJShgozshdg
             SilU HglHSLj lJS HjZ sliz sg
             ZSo;hg LJHDsglk jlkz js
        </p>
    </>
);

export default HomePage;