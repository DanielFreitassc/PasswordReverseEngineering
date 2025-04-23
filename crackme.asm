section .data
    msg_password   db "Enter password: ", 0
    success_msg    db "Access granted", 10, 0
    error_msg      db "Access denied", 10, 0
    expected_pass  db 0x33, 0x2F, 0x21, 0x2C, 0x26, 0x00  

section .bss
    buffer resb 16

section .text
    global _start

_start:
    mov rax, 1         
    mov rdi, 1         
    mov rsi, msg_password
    mov rdx, 17         
    syscall

    mov rax, 0        
    mov rdi, 0        
    mov rsi, buffer     
    mov rdx, 16         
    syscall

    xor rbx, rbx

.verify_loop:
    mov al, [buffer + rbx]
    cmp al, 10        
    je .compare

    xor al, 0x55       
    mov cl, [expected_pass + rbx]
    cmp al, cl
    jne .fail          

    inc rbx
    cmp rbx, 6        
    jl .verify_loop

.compare:
    mov rax, 1
    mov rdi, 1
    mov rsi, success_msg
    mov rdx, 17
    syscall
    jmp .end

.fail:
    mov rax, 1
    mov rdi, 1
    mov rsi, error_msg
    mov rdx, 15
    syscall

.end:
    mov rax, 60       
    xor rdi, rdi       
    syscall
