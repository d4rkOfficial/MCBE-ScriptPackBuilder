function pretreatment(str) {
	return str
	  .join('')
		.split('\n')
		.join('\n  ')
}

const logo = pretreatment`
 __  __  _____ ____  ______ 
|  \\/  |/ ____|  _ \\|  ____|
| \\  / | |    | |_) | |__   
| |\\/| | |    |  _ <|  __|  
| |  | | |____| |_) | |____ 
|_|  |_|\\_____|____/|______|
 __   __   __     __  ___  __        __       
/__\` /  \` |__) | |__)  |  |__)  /\\  /  \` |__/ 
.__/ \\__, |  \\ | |     |  |    /~~\\ \\__, |  \\ 
 __               __   ___  __                
|__) |  | | |    |  \\ |__  |__)               
|__) \\__/ | |___ |__/ |___ |  \\               
	                                              
`

export { logo }