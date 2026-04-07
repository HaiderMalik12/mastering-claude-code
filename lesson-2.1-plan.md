```bash
 Here's Lesson 2.1: Feature Building with Claude Code — a practical breakdown of how to learn and practice it.                                                                 
                       
  ---                                                                                                                                                                           
  Lesson 2.1: Feature Building with Claude Code                                                                                                                                 
                                                                                                                                                                                
  What the lesson covers                                                                                                                                                        
                                                                                                                                                                                
  The lesson has 5 core skills:
                                                                                                                                                                                
  ┌─────────────────────────────┬──────────────────────────────────────────────────────────┐                                                                                    
  │            Skill            │                      What it means                       │
  ├─────────────────────────────┼──────────────────────────────────────────────────────────┤                                                                                    
  │ Plain-language descriptions │ Tell Claude what to build, not how                       │
  ├─────────────────────────────┼──────────────────────────────────────────────────────────┤
  │ Claude's plan-execute loop  │ Claude explores → plans → writes across files → verifies │                                                                                    
  ├─────────────────────────────┼──────────────────────────────────────────────────────────┤                                                                                    
  │ @filename context hints     │ Point Claude at specific files to reduce guessing        │                                                                                    
  ├─────────────────────────────┼──────────────────────────────────────────────────────────┤                                                                                    
  │ Reviewing the plan first    │ Use plan mode (or ask Claude to plan before coding)      │
  ├─────────────────────────────┼──────────────────────────────────────────────────────────┤                                                                                    
  │ Mid-task redirection        │ Hit Esc to stop and correct; don't wait until the end    │
  └─────────────────────────────┴──────────────────────────────────────────────────────────┘                                                                                    
                                                        
  ---                                                                                                                                                                           
  How to practice it (the hands-on exercise)            
                                                                                                                                                                                
  The lesson's goal: build a complete REST endpoint with validation and tests, entirely through Claude Code prompts — no manual coding.
                                                                                                                                                                                
  Here's a step-by-step practice sequence:              
                                                                                                                                                                                
  Step 1 — Set up a target project                                                                                                                                              
  You need a NestJS project (or any API project). Open it in Claude Code:
  cd your-nestjs-project                                                                                                                                                        
  claude                                                                                                                                                                        
                                                                                                                                                                                
  Step 2 — Practice plain-language feature requests                                                                                                                             
  Start with a concrete ask:                                                                                                                                                    
  Build a POST /articles endpoint that accepts a title (string, required, max 200 chars),
  body (string, required), and authorId (UUID, required). Use class-validator for validation,                                                                                   
  store it in the articles table, and return the created article.                                                                                                               
                                                                                                                                                                                
  Step 3 — Review Claude's plan before it executes                                                                                                                              
  Before Claude writes code, ask it to plan first:                                                                                                                              
  Before writing any code, show me your implementation plan — what files will you touch and in what order?
  Read the plan. If something looks wrong, correct it now.                                                                                                                      
                                                                                                                                                                                
  Step 4 — Use @filename to provide context                                                                                                                                     
  If Claude needs to follow your existing patterns, reference files:                                                                                                            
  Follow the same pattern as @src/users/users.service.ts for the service layer.                                                                                                 
  Use the DTO structure from @src/users/dto/create-user.dto.ts as a reference. 
                                                                                                                                                                                
  Step 5 — Practice mid-task redirection                                                                                                                                        
  Intentionally give Claude a slightly vague task, watch it go, then hit Esc when it diverges and redirect:                                                                     
  Actually, don't create a new module — add it to the existing content module at @src/content/                                                                                  
                                                        
  Step 6 — Ask for tests                                                                                                                                                        
  After the feature is built:                           
  Now write unit tests for the ArticlesService and e2e tests for the POST /articles endpoint.                                                                                   
                                                        
  ---                                                                                                                                                                           
  Key things to internalize                             
                                                                                                                                                                                
  - Don't specify implementation details — say "validate the input" not "add @IsString() decorators". Let Claude choose.
  - The plan review step is where you save time. Catching a wrong file structure early beats fixing it after 20 file edits.                                                     
  - Esc is your friend. If Claude is heading the wrong direction, stop it early. Context is preserved when you interrupt.                                                       
  - Iterate conversationally. After the feature is built, say "the validation should also reject empty strings" — Claude will patch what it already wrote.                      
                                                                                                                                                                                
  ---                                                                                                                                                                           
  A realistic practice session (30–45 min)                                                                                                                                      
                                                                                                                                                                                
  1. Pick a small but real feature from your backlog
  2. Write a clear natural-language description of it                                                                                                                           
  3. Ask Claude to plan before coding                                                                                                                                           
  4. Review the plan, ask 1–2 clarifying questions to Claude                                                                                                                    
  5. Let it execute, watching which files it touches                                                                                                                            
  6. Request tests afterward                                                                                                                                                    
  7. Try redirecting Claude at least once mid-session                                                                                                                           
                                                                                                                                                                                
  That one session will teach you more than reading the lesson twice. 

```