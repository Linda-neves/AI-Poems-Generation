function generatePoem(event)
{
   event.preventDefault();

   new Typewriter("#poem", {
       strings: ["Here comes <br />the best poem"],
       autoStart: true,
       delay: 1,

    });


}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
