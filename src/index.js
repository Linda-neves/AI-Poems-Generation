function displayPoem(response)
{
    new Typewriter("#poem", {
       strings: response.data.answer,
       autoStart: true,
       delay: 1,
       cursor: "",
    });
}

function generatePoem(event)
{
   event.preventDefault();

   let instructionInput = document.querySelector("#user-instructions");
   let apiKey = "bc0cf33438a473et001fo0823a9ca9ff";
   let prompt = `User instructions: Generate a poem ${instructionInput.value}`;
   let context = "You are a romatic poet. Write a short poem that has a bold heading centered in the middle and separate each line with a <br />. Make sure to follow the user instructions.";
   let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

   axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
