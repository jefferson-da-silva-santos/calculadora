
function addThousandsSeparator(stringToFormat) {
     let dividedString = [];

     let stringPart1 = '';
     let stringPart2 = '';
     let stringPart3 = '';
     let stringPart4 = '';
     let stringPart5 = '';
     let stringPart6 = '';

     let formattedString = '';

     switch (stringToFormat.length) {
          
          case 4:
               stringPart1 = stringToFormat.substring(0, 1);
               stringPart2 = stringToFormat.substring(1);
               formattedString = `${stringPart1}.${stringPart2}`;
               break;

          case 6:
               dividedString = stringToFormat.split('');
               dividedString[1] = '';
               stringToFormat = dividedString.join('');
               stringPart1 = stringToFormat.substring(0, 2);
               stringPart2 = stringToFormat.substring(2);
               formattedString = `${stringPart1}.${stringPart2}`;
               break;

          case 7:
               dividedString = stringToFormat.split('');
               dividedString[2] = '';
               stringToFormat = dividedString.join('');
               stringPart1 = stringToFormat.substring(0, 3);
               stringPart2 = stringToFormat.substring(3);
               formattedString = `${stringPart1}.${stringPart2}`;
               break;

          case 8:
               dividedString = stringToFormat.split('');
               dividedString[3] = '';
               stringToFormat = dividedString.join('');
               stringPart1 = stringToFormat.substring(0, 1);
               stringPart2 = stringToFormat.substring(1, 4);
               stringPart3 = stringToFormat.substring(4);
               formattedString = `${stringPart1}.${stringPart2}.${stringPart3}`;
               break;

          case 10:
               dividedString = stringToFormat.split('');
               dividedString[1] = '';
               dividedString[5] = '';
               stringToFormat = dividedString.join('');
               stringPart1 = stringToFormat.substring(0, 2);
               stringPart2 = stringToFormat.substring(2, 5);
               stringPart3 = stringToFormat.substring(5);
               formattedString = `${stringPart1}.${stringPart2}.${stringPart3}`;
               break;

          case 11:
               dividedString = stringToFormat.split('');
               dividedString[2] = '';
               dividedString[6] = '';
               stringToFormat = dividedString.join('');
               stringPart1 = stringToFormat.substring(0, 3);
               stringPart2 = stringToFormat.substring(3, 6);
               stringPart3 = stringToFormat.substring(6);
               formattedString = `${stringPart1}.${stringPart2}.${stringPart3}`;
               break;

          case 12:
               dividedString = stringToFormat.split('');
               dividedString[3] = '';
               dividedString[7] = '';
               stringToFormat = dividedString.join('');
               stringPart1 = stringToFormat.substring(0, 1);
               stringPart2 = stringToFormat.substring(1, 4);
               stringPart3 = stringToFormat.substring(4, 7);
               stringPart4 = stringToFormat.substring(7);
               formattedString = `${stringPart1}.${stringPart2}.${stringPart3}.${stringPart4}`;
               break;


          case 14:
               dividedString = stringToFormat.split('');
               dividedString[1] = '';
               dividedString[5] = '';
               dividedString[9] = '';
               stringToFormat = dividedString.join('');
               stringPart1 = stringToFormat.substring(0, 2);
               stringPart2 = stringToFormat.substring(2, 5);
               stringPart3 = stringToFormat.substring(5, 8);
               stringPart4 = stringToFormat.substring(8);
               formattedString = `${stringPart1}.${stringPart2}.${stringPart3}.${stringPart4}`;
               break;

          case 15:
               dividedString = stringToFormat.split('');
               dividedString[2] = '';
               dividedString[6] = '';
               dividedString[10] = '';
               stringToFormat = dividedString.join('');
               stringPart1 = stringToFormat.substring(0, 3);
               stringPart2 = stringToFormat.substring(3, 6);
               stringPart3 = stringToFormat.substring(6, 9);
               stringPart4 = stringToFormat.substring(9);
               formattedString = `${stringPart1}.${stringPart2}.${stringPart3}.${stringPart4}`;
               break;

          case 16:
               dividedString = stringToFormat.split('');
               dividedString[3] = '';
               dividedString[7] = '';
               dividedString[11] = '';
               stringToFormat = dividedString.join('');
               stringPart1 = stringToFormat.substring(0, 1);
               stringPart2 = stringToFormat.substring(1, 4);
               stringPart3 = stringToFormat.substring(4, 7);
               stringPart4 = stringToFormat.substring(7, 10);
               stringPart5 = stringToFormat.substring(10);
               formattedString = `${stringPart1}.${stringPart2}.${stringPart3}.${stringPart4}.${stringPart5}`;
               break;

          case 18:
               dividedString = stringToFormat.split('');
               dividedString[1] = '';
               dividedString[5] = '';
               dividedString[9] = '';
               dividedString[13] = '';
               stringToFormat = dividedString.join('');
               stringPart1 = stringToFormat.substring(0, 2);
               stringPart2 = stringToFormat.substring(2, 5);
               stringPart3 = stringToFormat.substring(5, 8);
               stringPart4 = stringToFormat.substring(8, 11);
               stringPart5 = stringToFormat.substring(11);
               formattedString = `${stringPart1}.${stringPart2}.${stringPart3}.${stringPart4}.${stringPart5}`;
               break;

          case 19:
               ///111 111 111 111 111
               dividedString = stringToFormat.split('');
               dividedString[2] = '';
               dividedString[6] = '';
               dividedString[10] = '';
               dividedString[14] = '';
               stringToFormat = dividedString.join('');
               stringPart1 = stringToFormat.substring(0, 3);
               stringPart2 = stringToFormat.substring(3, 6);
               stringPart3 = stringToFormat.substring(6, 9);
               stringPart4 = stringToFormat.substring(9, 12);
               stringPart5 = stringToFormat.substring(12);
               formattedString = `${stringPart1}.${stringPart2}.${stringPart3}.${stringPart4}.${stringPart5}`;
               break;

          case 20:
               dividedString = stringToFormat.split('');
               dividedString[3] = '';
               dividedString[7] = '';
               dividedString[11] = '';
               dividedString[15] = '';
               stringToFormat = dividedString.join('');
               console.log(stringToFormat);
               stringPart1 = stringToFormat.substring(0, 1);
               stringPart2 = stringToFormat.substring(1, 4);
               stringPart3 = stringToFormat.substring(4, 7);
               stringPart4 = stringToFormat.substring(7, 10);
               stringPart5 = stringToFormat.substring(10, 13);
               stringPart6 = stringToFormat.substring(13);
               formattedString = `${stringPart1}.${stringPart2}.${stringPart3}.${stringPart4}.${stringPart5}.${stringPart6}`;
               break;

          default:
               formattedString = stringToFormat;
     }

     return formattedString;
}

function adicionarSeparadorDeMilharSimples(numero) {
     return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
