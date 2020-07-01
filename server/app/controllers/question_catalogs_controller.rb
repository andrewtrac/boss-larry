class QuestionCatalogsController < ApplicationController
    def index
        @questions = QuestionCatalog.all
        render json: @questions
    end
end
