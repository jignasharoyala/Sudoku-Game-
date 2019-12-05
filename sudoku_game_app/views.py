from django.shortcuts import render, redirect
from sudoku_game_app.game_solustion import GameSolver


def index(request):
    if request.GET:
        valid = True
        values = dict()
        for l in "ABCDEFGHI":
            for n in "123456789":
                if l+n not in request.GET:
                    valid = False
                else:
                    if len(request.GET[l+n]) > 1:
                        valid = False
                    elif len(request.GET[l+n]) == 1:
                        if request.GET[l+n] not in "123456789":
                            valid = False
                        else:

                            values[l+n] = request.GET[l+n]
        if valid:

            values = GameSolver(values).values
            if values:
                return render(request, 'sudoku/index.html', {'values': values})

        return redirect('index')
    else:
        return render(request, 'sudoku/index.html')
