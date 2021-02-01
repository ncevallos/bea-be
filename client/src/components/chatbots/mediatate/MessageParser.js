// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message)
      const lowerCaseMessage = message.toLowerCase()
      
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
          
      }
    }
  }
  
  export default MessageParser;