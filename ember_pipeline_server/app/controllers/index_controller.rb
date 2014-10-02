class IndexController < ApplicationController

  def index
    render :text => index_html
  end

  private

  def index_html
    redis.get('dev:index.html')
  end

  def redis
    redis = Redis.new(:host => '192.168.59.103')
  end

end
