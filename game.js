const inventory = [];
let room = "Комната Даши и Маши";
let jena = false
let byblic = false
let closet = false
let shelf = false
let flover = false

function showInventory() {
    if (inventory.length === 0) {
        alert("Рюкзак пуст.");
    } else {
        alert("В рюкзаке: " + inventory.join(", "));
    }
}

alert(
    "Миссия «Мурзик»\n\n" +
    "Накормите тарантула Мурзика и найдите все предметы:\n" +
    "ключ от квартиры, корм для пауков и айрозоль."
);

alert(
    "Звонок от Бабушки...\n" +
    "- Привет Даша! Я уехала по делам, можешь сходить ко мне в квартиру и покормить Мурзика. Ключи у Гали.\n" +
    "- Конечно бабуль.\n" +
    "- Будь аккуратнее, у него сегодня нет настроения. Еще раз спасибо, Дашуль!\n"
)


while (true) {
    if (room === "Комната Даши и Маши") {
        const choice = prompt(
            "ВЫ В КОМНАТЕ ДАШИ И МАШИ\n" +
            "В комнате ничего нет, надо выйти в коридор.\n" +
            "1 — Комната младших\n" +
            "2 — Коридор\n" +
            "3 — Проверить рюкзак\n" +
            "0 — Завершить игру"
        );

        if (choice === "0" || choice === null) {
            break;
        } else if (choice === "1") {
            room = "Комната младших";
        } else if (choice === "2") {
            room = "Коридор";
        } else if (choice === "3") {
            showInventory();
        } else {
            alert("Такого прохода нет.");
        }
    }
    // Комната младших
    else if (room === "Комната младших") {
        const choice = prompt(
            "КОМНАТА МЛАДШИХ\n" +
            "1 — Подойти к кровати Пуговки\n" +
            "2 — Вернуться в свою комнату\n" +
            "0 — Завершить игру"
        );

        if (choice === "0" || choice === null) {
            break;
        } else if (choice === "1") {
            room = "Кровать пуговки";
        } else if (choice === "2") {
            room = "Комната Даши и Маши";
        } else {
            alert("Такого прохода нет.");
        }
    }
    // кровать пуговки
    else if (room === "Кровать пуговки") {
        const choice = prompt(
            "КРОВАТЬ ПУГОВКИ\n" +
            "Под подушкой что то лежит. \n" +
            "1 — Поднять подушку\n" +
            "2 — Вернуться ко входу в комнату младших\n" +
            "0 — Завершить игру"
        )
        if (choice === "0" || choice === null) {
            break;
        } else if (choice === "1") {
            if (inventory.includes("Пакет с конфетами")) {
                alert("Под подушкой пусто. Конфеты уже у вас.");
            } else {
                const takeKey = confirm("Под подушкой лежит пакет с конфетами. Взять его?");

                if (takeKey === true) {
                    inventory.push("Пакет с конфетами");
                    alert("Предмет взят!");
                } else {
                    alert("Вы оставили пакет на кровати.");
                }
            }
        } else if (choice === "2") {
            room = "Комната младших";
        } else {
            alert("Такого действия нет.");
        }
    }
    // коридор
    else if (room === "Коридор") {
        const choice = prompt(
            "ВЫ В КОРИДОРЕ\n" +
            "В коридоре Женя качает себе мяч, а из туалета слышен звук фена, видимо Маша собирается на свидание.\n" +
            "1 – Поговорить с Женей\n" +
            "2 — Комната Даши и Маши\n" +
            "3 — Зал\n" +
            "4 — Ванная\n" +
            "5 — Подъезд\n" +
            "6 — Проверить рюкзак\n" +
            "0 — Завершить игру"
        );
        if (choice === "0" || choice === null) {
            break;
        } else if (choice === "1") {
            room = "Диалог с Женей";
        } else if (choice === "2") {
            room = "Комната Даши и Маши";
        }  else if (choice === "3") {
            room = "Зал";
        } else if (choice === "4") {
            room = "Ванная";
        } else if (choice === "5") {
            room = "Подъезд";
        } else if (choice === "6") {
            showInventory();
        } else {
            alert("Такого прохода нет.");
        }
    }
    // диалог с женей
    else if (room === "Диалог с Женей") {
        if (jena) {
            const choice = prompt(
                "1 – Женя, а где ключ от квартиры бабушки?\n" +
                "2 – Что делаешь Женя?\n" +
                "3 – Коридор\n" +
                "0 — Завершить игру"
            )
            if (choice === "0" || choice === null) {
                break;
            } else if (choice === "1") {
                alert("- Да, я брала его, нужно было забрать свою кофту. Ключ лежит в цветочном горшке в подъезде.");
                flover = true
                room = "Коридор"
            } else if (choice === "2") {
                alert("Я тут мяч хочу накачать, пойду футбол играть.");
                room = "Диалог с Женей"
            } else if (choice === "3") {
                room = "Коридор";
            } else {
                alert("Такого прохода нет.");
            }
        }
        else {
            const choice = prompt(
                "- Привет Даш.\n" +
                "1 – Привет, что делаешь?\n" +
                "2 – Ты не знаешь где лежит айрозоль?  \n" +
                "3 – Коридор\n" +
                "0 — Завершить игру"
            )
            if (choice === "0" || choice === null) {
                break;
            } else if (choice === "1") {
                alert("Я тут мяч хочу накачать, пойду футбол играть.");
                room = "Диалог с Женей"
            } else if (choice === "2") {
                alert("Неа, посмотри в ванной.");
                room = "Диалог с Женей"
            } else if (choice === "3") {
                room = "Коридор";
            } else {
                alert("Такого прохода нет.");
            }
        }
    }
    // ванная
    else if (room === "Ванная") {
        const choice = prompt(
            "ВЫ ВОЗЛЕ ДВЕРИ В ВАННУЮ\n" +
            "1 – Постучать в дверь\n" +
            "2 – Вернуться в коридор\n" +
            "0 — Завершить игру"
        );
        if (choice === "0" || choice === null) {
            break;
        } else if (choice === "1") {
            const choice = prompt(
                "- Занято.\n" +
                "1 – Маша мне нужно взять айрозоль из ванной.\n" +
                "2 – Давай быстрее, мне тоже нужно в ванную.\n" +
                "3 – Коридор\n" +
                "0 — Завершить игру"
            )
            if (choice === "0" || choice === null) {
                break;
            } else if (choice === "1") {
                alert("Его здесь нет, посмотри в шкафу в зале.");
                closet = true
                room = "Коридор"
            } else if (choice === "2") {
                alert("– Я здесь надолго.");
                room = "Ванная"
            } else if (choice === "3") {
                room = "Коридор";
            } else {
                alert("Такого прохода нет.");
            } 
        } else if (choice === "2") {
            room = "Коридор";
        }
    }
    // зал
    else if (room === "Зал") {
        const choice = prompt(
            "ВЫ В ЗАЛЕ\n" +
            "1 – Поговорить с Пуговкой\n" +
            "2 — Кухня\n" +
            "3 — Подойти к шкафу\n" +
            "4 — Вернуться в коридор\n" +
            "5 — Проверить рюкзак\n" +
            "0 — Завершить игру"
        )
        if (choice === "0" || choice === null) {
            break;
        } else if (choice === "1") {
            room = "Диалог с Пуговкой";
        } else if (choice === "2") {
            room = "Кухня";
        } else if (choice === "3") {
            room = "Шкаф";
        } else if (choice === "4") {
            room = "Коридор";
        } else if (choice === "5") {
            showInventory();
        } else {
            alert("Такого прохода нет.");
        }
    }
    // пуговка
    else if (room === "Диалог с Пуговкой") {
        if (byblic) {
            const choice = prompt(
                "1 – Пуговка, а ты не видела случайно корм для мурзика.?\n" +
                "2 – Какой мультик смотришь?\n" +
                "3 – Вернуться в зал\n" +
                "0 — Завершить игру"
            )
            if (choice === "0" || choice === null) {
                break;
            } else if (choice === "1") {
                const choice = prompt(
                    "- Его съел Бублик.\n" +
                    "1 – А как мне его забрать у него?\n" +
                    "2 – Надеюсь ему было вкусно.\n" +
                    "3 – Вернуться в зал\n" +
                    "0 — Завершить игру")
        
                if (choice === "0" || choice === null) {
                    break;
                } else if (choice === "1") {
                    alert("Ну если ты принесешь ему конфеты он сможет тебе его вернуть.");
                    if (inventory.includes("Пакет с конфетами")) {
                        const takeKey = confirm("Отдать конфеты Пуговке?");
        
                        if (takeKey === true) {
                            alert("- Вот твои конфеты.");
                            let index = inventory.findIndex(el => el === 'Пакет с конфетами');
        
                            if (index !== -1) {
                                inventory.splice(index, 1);
                            }
                            inventory.push("Корм для паука");
                            alert("Предмет взят!");
                        } else {
                            alert("Пуговка не отдала вам корм.");
                        }
                    } else {
                        alert("Принесите конфеты Пуговке.")
                    }
                    room = "Диалог с Пуговкой"
                } else if (choice === "2") {
                    alert("Очень!");
                    room = "Диалог с Пуговкой"
                } else if (choice === "3") {
                    room = "Зал";
                } else {
                    alert("Такого прохода нет.");
                }
            } else if (choice === "2") {
                alert("Мы с Бубликом смотрим только развивающие программы.");
                room = "Диалог с Пуговкой"
            } else if (choice === "3") {
                room = "Зал";
            } else {
                alert("Такого прохода нет.");
            }
        }
        else {
            alert("- Даша, мы с Бубликом смотрим телевизор. Не мешай нам. \n")
            room = "Зал";
        }
    }
    else if (room === "Шкаф") {
        if (closet) {
            if (inventory.includes("Айрозоль")) {
                alert("В шкафу пусто. Айрозоль уже у вас.");
            } else {
                const takeKey = confirm("В шкафу лежит айрозоль. Взять его?");

                if (takeKey === true) {
                    inventory.push("Айрозоль");
                    alert("предмет взят!");
                } else {
                    alert("Вы оставили айрозоль в шкафу.");
                }
            }
            room = "Зал";
        }
        else {
            alert("– Я не могу его открыть.")
            room = "Зал";
        }
    }
    else if (room === "Кухня") {
        const choice = prompt(
            "ВЫ НА КУХНЕ\n" +
            "1 – Поговорить с Галиной Сергеевной\n" +
            "2 — Подойти к полке\n" +
            "3 — Вернуться в зал\n" +
            "4 — Проверить рюкзак\n" +
            "0 — Завершить игру"
        )
        if (choice === "0" || choice === null) {
            break;
        } else if (choice === "1") {
            room = "Диалог с Галей";
        } else if (choice === "2") {
            room = "Полка";
        } else if (choice === "3") {
            room = "Зал";
        } else if (choice === "4") {
            showInventory();
        } else {
            alert("Такого прохода нет.");
        }
    }
    else if (room === "Диалог с Галей") {
        const choice = prompt(
            "1 – Галина Сергеевна меня бабушка попросила накормить Мурзика, сказала ключи у тебя от ее квартиры.\n" +
            "2 – Дашь списать дз по биологии.\n" +
            "3 – Кухня\n" +
            "0 — Завершить игру"
        )
        if (choice === "0" || choice === null) {
            break;
        } else if (choice === "1") {
            alert("У меня их вчера Женя просила, иди у нее спрашивай.");
            jena = true
            room = "Кухня"
        } else if (choice === "2") {
            alert("– Я еще его не сделала, чуть позже дам.");
            room = "Диалог с Галей"
        } else if (choice === "3") {
            room = "Кухня";
        } else {
            alert("Такого прохода нет.");
        }
    }
    else if (room === "Полка") {
        const choice = prompt(
            "Корм должен был быть на полке, а его здесь нет.\n" +
            "1 – Спросить у Галины Сергеевны\n" +
            "2 – Посмотреть еще раз\n" +
            "3 – Кухня\n" +
            "0 — Завершить игру"
        )
        if (choice === "0" || choice === null) {
            break;
        } else if (choice === "1") {
            alert("Страно, вчера я видело его там. Попробуй спросить у Пуговки, она утром там что-то искала.");
            byblic = true
            room = "Кухня"
        } else if (choice === "2") {
            alert("Здесь пусто.");
            room = "Полка"
        } else if (choice === "3") {
            room = "Кухня";
        } else {
            alert("Такого прохода нет.");
        }
    }
    else if (room === "Подъезд") {
        const choice = prompt(
            "ВЫ В ПОДЪЕЗДЕ\n" +
            "1 – Подойти к квартире бабушки\n" +
            "2 — Подойти к цветочному горшку\n" +
            "3 — Вернуться в коридор\n" +
            "4 — Проверить рюкзак\n" +
            "0 — Завершить игру"
        )
        if (choice === "0" || choice === null) {
            break;
        } else if (choice === "1") {
            room = "Кв Бабушки";
        } else if (choice === "2") {
            room = "Цвет горшок";
        } else if (choice === "3") {
            room = "Коридор";
        } else if (choice === "4") {
            showInventory();
        } else {
            alert("Такого прохода нет.");
        }
    }
    else if (room === "Цвет горшок") {
        if (flover) {
            if (inventory.includes("Ключ")) {
                alert("В горшке пусто. Ключ уже у вас.");
            } else {
                const takeKey = confirm("В горшке лежит ключ. Взять его?");

                if (takeKey === true) {
                    inventory.push("Ключ");
                    alert("Предмет взят!");
                } else {
                    alert("Вы оставили ключ в горшке.");
                }
            }
            room = "Подъезд";
        }
        else {
            alert("– Мне не стоит трогать этот цветок. ")
            room = "Подъезд";
        }
    }
    else if(room === "Кв Бабушки"){
        if (inventory.includes("Ключ") && inventory.includes("Айрозоль") && inventory.includes("Корм для паука")){
            alert("Вы успешно вошли в квартиру бабушки и накормили Мурзика\n" +
            "ИГРА ПРОЙДЕНА")
            break
        } else {
            alert("У вас не хватает предметов для босса. Вернитесь в локацию и найдите их.")
            room = "Подъезд";
        }
    }
}