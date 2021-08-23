// MessageParser starter code
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message)
    const lowerCaseMessage = message.toLowerCase()
    if(this.state.waitingformsgflag){
      console.log("flag was true");
      if(this.state.lastblockvisited === "Planning Intro"){
        this.actionProvider.planningPhase2(message)
      }
      if(this.state.lastblockvisited === "Triggers Intro"){
        this.actionProvider.identifyTriggers2(message)
      }
      if(this.state.lastblockvisited === "Identify Triggers2"){
        this.actionProvider.triggerSomethingElse2(message)
      }
      
      // if(this.state.lastblockvisited === "Emotional Behavioral"){
      //   this.actionProvider.planbadjournal2(message)
      // }
      // if(this.state.lastblockvisited === "Food Choices"){
      //   this.actionProvider.somethingelse2(message)
      // }
      // if(this.state.lastblockvisited === "Different Foods"){
      //   this.actionProvider.emotionalbehavioral(message)
      // }
      // if(this.state.lastblockvisited === "Something Else"){
      //   this.actionProvider.somethingelse3(message)
      // }
    }
    else {
      if (lowerCaseMessage.includes("shit") || lowerCaseMessage.includes("fuck") || lowerCaseMessage.includes("pussy") || lowerCaseMessage.includes("dick") || lowerCaseMessage.includes("asshole") || lowerCaseMessage.includes("bitch") || lowerCaseMessage.includes("fucker") || lowerCaseMessage.includes("cunt")) {
        this.actionProvider.nofoulwords()
      }
      else if (lowerCaseMessage.includes("die") || lowerCaseMessage.includes("suicide") || lowerCaseMessage.includes("harm") || lowerCaseMessage.includes("kill") || lowerCaseMessage.includes("death") || lowerCaseMessage.includes("dying") || lowerCaseMessage.includes("cut") || lowerCaseMessage.includes("hurt myself")) {
        this.actionProvider.emergency()
      }
      else if (lowerCaseMessage.includes("therapy") || lowerCaseMessage.includes("therapist") || lowerCaseMessage.includes("psychologist") || lowerCaseMessage.includes("psychotherapist")) {
        this.actionProvider.findtherapist()
      }            
      else if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi") || lowerCaseMessage.includes("bea")) {
        this.actionProvider.greet()
      }     
      else {
          this.actionProvider.dontunderstand()
      }
    }
  }
}

export default MessageParser;